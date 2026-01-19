import { User } from '@/types/index';

export type Groups = {
    id: number,
    owner: User,
    name: string,
    description: string,
    bannier? : string,
    created_at: string,
    updated_at: string,
    slug: string,
    private: boolean
}
