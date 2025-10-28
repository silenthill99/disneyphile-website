import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ImageIcon } from 'lucide-react';
import { Form } from '@inertiajs/react';
import posts from '@/routes/posts';

const Create = () => {
    return (
        <Form {...posts.store.form()}>
            {({errors}) => (
                <>
                    <Textarea className={"h-100 resize-none"} name={"content"} aria-invalid={!!errors.content}/>
                    {errors.content && (
                        <p className="text-red-600">{errors.content}</p>
                    )}
                    <div>
                        <ImageIcon/>
                    </div><br/>
                    <Button>Créer un post</Button>
                </>
            )}
        </Form>
    );
};

export default Create;
