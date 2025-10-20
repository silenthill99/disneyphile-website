import { LucideIcon } from 'lucide-react';
import { Tag } from '@/types/tags';
import { Groups } from '@/types/groups';
import { Posts } from '@/types/posts';

export interface PaginatedProps<T> {
    data: T[];
    links: {
        active: boolean;
        url: string | null;
        label: string;
    }[];
    current_page: number;
    first_page_url: string;
    from: number | null;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
}

export interface Page {
    id: number,
    owner: User,
    title: string,
    description?: string,
    image_profile?: string,
    bannier?: string,
    created_at: string,
    updated_at: string,
    members: User[]
}

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
    flash: {
        success?: string;
    }
}

export interface User {
    id: number;
    name: string;
    slug: string;
    email: string;
    avatar?: string;
    image_profile?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    role?: Role
    [key: string]: unknown; // This allows for additional properties...
    can?: {
        admin?: boolean;
    }
    tags: Tag[],
    createdGroups: Groups[],
    groups: Groups[],
    posts: Posts[],
    pages: Page[],
    joinedPages: Page[],
}

export interface Role {
    name: string;
    created_at: string;
    updated_at: string;
}
