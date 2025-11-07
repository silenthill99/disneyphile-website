<?php

namespace App\Console\Commands;

use App\Models\Group;
use App\Models\Page;
use App\Models\PostImage;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class CleanUnusedImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:clean-unused-images {--dry-run : Display files that would be deleted without actually deleting them}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clean unused images from storage/app/public/images directory';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $dryRun = $this->option('dry-run');
        $this->info('Scanning for unused images...');

        $allImages = Storage::disk('public')->files('images');

        if (empty($allImages)) {
            $this->info('No images were found.');

            return Command::SUCCESS;
        }

        $this->info('Found '.count($allImages).' image(s) in storage.');

        // Collect all image paths from database
        $usedImages = collect();

        // From groups.bannier
        $usedImages = $usedImages->merge(
            Group::query()->whereNotNull('bannier')->pluck('bannier')
        );

        // From users.image_profile
        $usedImages = $usedImages->merge(
            User::query()->whereNotNull('image_profile')->pluck('image_profile')
        );
        // From pages.image_profile and pages.bannier
        $usedImages = $usedImages->merge(
            Page::query()->whereNotNull('image_profile')->pluck('image_profile')
        );
        $usedImages = $usedImages->merge(
            Page::query()->whereNotNull('bannier')->pluck('bannier')
        );
        // From post_images.image_path
        $usedImages = $usedImages->merge(
            PostImage::query()->whereNotNull('image_path')->pluck('image_path')
        );
        // Normalize paths to match storage format (remove /storage/ prefix if present)
        $usedImages = $usedImages->map(function ($path) {
            return str_replace('/storage/', '', $path);
        })->unique();

        $this->info('Found '.$usedImages->count().' image(s) referenced in database.');

        // Find unused images
        $unusedImages = collect($allImages)->filter(function ($image) use ($usedImages) {
            return ! $usedImages->contains($image);
        });

        if ($unusedImages->isEmpty()) {
            $this->info('No unused images were found.');

            return Command::SUCCESS;
        }

        $this->warn('Found '.$unusedImages->count().' unused image(s):');

        $deletedCount = 0;

        foreach ($unusedImages as $image) {
            if ($dryRun) {
                $this->line('  - '.$image.' (would be deleted)');
            } else {
                Storage::disk('public')->delete($image);
                $this->line('  - '.$image.' (deleted)');
                $deletedCount++;
            }
        }

        if ($dryRun) {
            $this->info('Dry run completed. No files were deleted.');
            $this->comment('Run without --dry-run to actually delete the files.');
        } else {
            $this->info("Successfully deleted {$deletedCount} unused image(s).");
        }

        return Command::SUCCESS;
    }
}
