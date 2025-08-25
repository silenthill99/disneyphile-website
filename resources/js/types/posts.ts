import { User } from '@/types/index';
import { ImagePath } from '@/types/image-path';

export type Posts = {
    id: number;
    content: string;
    image: ImagePath[]
    created_at: string;
    user: User;
}
