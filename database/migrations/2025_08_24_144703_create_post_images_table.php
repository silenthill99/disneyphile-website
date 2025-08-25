<?php

    use App\Models\Post;
    use App\Models\PostImage;
    use Illuminate\Database\Migrations\Migration;
	use Illuminate\Database\Schema\Blueprint;
	use Illuminate\Support\Facades\Schema;

	return new class extends Migration {
		public function up(): void
		{
			Schema::create('post_images', function (Blueprint $table) {
				$table->id();
                $table->foreignIdFor(Post::class)->constrained()->cascadeOnDelete();
                $table->string('image_path');
				$table->timestamps();
			});
		}

		public function down(): void
		{
			Schema::dropIfExists('post_images');
		}
	};
