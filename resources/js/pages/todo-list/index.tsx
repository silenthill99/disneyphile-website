import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { Todolist } from '@/types';
import { Form, Link, usePage } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import todo, { destroy } from '@/routes/todo';

type Props = {
    todoList: Todolist[];
};

const Index = () => {
    const { todoList } = usePage<Props>().props;

    return (
        <AppLayout>
            <div className={'space-y-4 mx-20 mxy-5'}>
                <h1>Liste des choses à faire</h1>
                <Form {...todo.store.form()}>
                    {({ errors }) => (
                        <>
                            <Label htmlFor={'title'}>Ajouter une tâche</Label>
                            <Input name={'title'} id="title" placeholder={'Ajouter une tâche'} />
                            {errors.title && <p className="text-red-500">{errors.title}</p>}
                            <Button>Créer la tâche</Button>
                        </>
                    )}
                </Form>
                {todoList.length > 0 ? (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Tâche</TableHead>
                                <TableHead className={"text-right"}>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {todoList.map((todo) => (
                                <TableRow key={todo.id}>
                                    <TableCell>{todo.title}</TableCell>
                                    <TableCell className={"text-right"}>
                                        <Link href={destroy({todo: todo.id})}>Supprimer</Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                    <p>Aucune tâches actuellement</p>
                )}
            </div>
        </AppLayout>
    );
};

export default Index;
