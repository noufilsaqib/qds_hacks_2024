'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import TaskForm from '@/components/TaskForm';

const EditTask = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const searchParams = useSearchParams();

    const taskId = searchParams.get('id');
    const [myCourses, setMyCourses] = useState([]);

    useEffect(() => {
        console.log(session)
        if (!session && status === "unauthenticated") {
            router.push('/');
        }
    }, [session, status, router]);

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/courses`);
            const data = await response.json();

            setMyCourses(data);
        };

        if (session?.user.id) fetchCourses();
    }, [session?.user.id]);

    const [submitting, setIsSubmitting] = useState(false);
    const [task, setTask] = useState({
        course: '',
        name: '',
        type: '',
        description: '',
        status: 'not_started',
        dueDate: '',
        file: '',
    });

    useEffect(() => {
        const getTaskDetails = async () => {
            try {
                const response = await fetch(`/api/task/${taskId}`);
                const data = await response.json();

                setTask({
                    course: data.course,
                    name: data.name,
                    type: data.type,
                    description: data.description,
                    status: data.status,
                    dueDate: data.dueDate,
                    file: data.file,
                });
            } catch (error) {
                console.log(error);
            }
        };

        if (taskId) getTaskDetails();
    }, [taskId]);

    const editTask = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`/api/task/${taskId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    course: task.course,
                    name: task.name,
                    type: task.type,
                    description: task.description,
                    status: task.status,
                    dueDate: task.dueDate,
                    file: task.file,
                }),
            });

            if (response.ok) {
                router.push('/');
            } else {
                console.error('Failed to update the task');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <TaskForm
            data={myCourses}
            type="Edit"
            task={task}
            setTask={setTask}
            isSubmitting={submitting}
            onSubmit={editTask}
        />
    );
}

export default EditTask;