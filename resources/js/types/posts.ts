import { User } from '@/types/index';
import { ImagePath } from '@/types/image-path';
import { Groups } from '@/types/groups';

export type Posts = {
    id: number;
    content: string;
    post_image: ImagePath[]
    created_at: string;
    user: User;
    likes: number;
    group: Groups
}
