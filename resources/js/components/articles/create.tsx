import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ImageIcon } from 'lucide-react';

const Create = () => {
    return (
        <form >
            <Textarea className={"h-100 resize-none"}/>
            <div>
                <ImageIcon/>
            </div><br/>
            <Button>Créer un post</Button>
        </form>
    );
};

export default Create;
