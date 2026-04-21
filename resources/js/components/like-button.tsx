import { useHttp } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { like } from '@/routes';

export default function LikeButton({ postId, initialLikes }: { postId: number; initialLikes: number }) {
    const { data, optimistic, post } = useHttp({ likes: initialLikes });

    const handleLike = () => {
        optimistic((d) => ({ likes: d.likes + 1 }));
        post(like({ id: postId }).url);
    };

    return (
        <Button variant="ghost" onClick={handleLike}>J'aime {data.likes}</Button>
    );
}