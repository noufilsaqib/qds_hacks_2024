"use client"
import React, {useState} from 'react';
import Accordion from "@/components/Accordion";
import {useSession} from "next-auth/react";
import {data} from "autoprefixer";


const Profile = () => {
    const {data: session} = useSession();
     console.log("data", data)
    const tasks = [
        {
            id: 0,
            title: "Assignment 2: Data Structures",
            dueDate: "2023-03-02",
            type: "assignment",
            status: "completed",
            course: "COMP 3760",
        },
        {
            id: 1,
            title: "Lab 3: SQL Queries",
            dueDate: "2023-03-26",
            type: "assignment",
            status: "in-progress",
            course: "COMP 4537",
        },
        {
            id: 2,
            title: "Assignment 4: Ethics Report",
            dueDate: "2023-04-01",
            type: "assignment",
            status: "in-progress",
            course: "LIBS 7102",
        },
        {
            id: 3,
            title: "Midterm Exam: Object-Oriented Programming",
            dueDate: "2023-04-06",
            type: "exam",
            status: "in-progress",
            course: "COMP 3522",
        },
        {
            id: 4,
            title: "Quiz 2: Operating Systems",
            dueDate: "2023-04-01",
            type: "quiz",
            status: "in-progress",
            course: "COMP 4736",
        },
        {
            id: 5,
            title: "Project Proposal",
            dueDate: "2023-03-15",
            type: "project",
            status: "pending",
            course: "COMP 3760",
        },
        {
            id: 6,
            title: "Research Paper",
            dueDate: "2023-03-30",
            type: "assignment",
            status: "in-progress",
            course: "LIBS 7102",
        },
        {
            id: 7,
            title: "Final Exam",
            dueDate: "2023-04-20",
            type: "exam",
            status: "pending",
            course: "COMP 3522",
        },
        {
            id: 8,
            title: "Midterm Project",
            dueDate: "2023-04-10",
            type: "project",
            status: "in-progress",
            course: "COMP 4537",
        },
        {
            id: 9,
            title: "Final Project",
            dueDate: "2023-04-25",
            type: "project",
            status: "pending",
            course: "COMP 4736",
        }
    ];
    const accordionData =
        [{
            title: 'Comp 3981', content: [{
                id: 0,
                title: "Assignment 2: Data Structures",
                dueDate: "2023-03-02",
                type: "assignment",
                status: "completed",
                course: "COMP 3760",
            }, {
                id: 1,
                title: "Lab 3: SQL Queries",
                dueDate: "2023-03-26",
                type: "assignment",
                status: "in-progress",
                course: "COMP 4537",
            }, {
                id: 2,
                title: "Assignment 4: Ethics Report",
                dueDate: "2023-04-01",
                type: "assignment",
                status: "in-progress",
                course: "LIBS 7102",
            }, {
                id: 3,
                title: "Midterm Exam: Object-Oriented Programming",
                dueDate: "2023-04-06",
                type: "exam",
                status: "in-progress",
                course: "COMP 3522",
            }, {
                id: 4,
                title: "Quiz 2: Operating Systems",
                dueDate: "2023-04-01",
                type: "quiz",
                status: "in-progress",
                course: "COMP 4736",
            }]
        }, {
            title: 'Comp 999', content: [{
                id: 0,
                title: "Assignment 2: Data Structures",
                dueDate: "2023-03-02",
                type: "assignment",
                status: "completed",
                course: "COMP 3760",
            }, {
                id: 1,
                title: "Lab 3: SQL Queries",
                dueDate: "2023-03-26",
                type: "assignment",
                status: "in-progress",
                course: "COMP 4537",
            }, {
                id: 2,
                title: "Assignment 4: Ethics Report",
                dueDate: "2023-04-01",
                type: "assignment",
                status: "in-progress",
                course: "LIBS 7102",
            }, {
                id: 3,
                title: "Midterm Exam: Object-Oriented Programming",
                dueDate: "2023-04-06",
                type: "exam",
                status: "in-progress",
                course: "COMP 3522",
            }, {
                id: 4,
                title: "Quiz 2: Operating Systems",
                dueDate: "2023-04-01",
                type: "quiz",
                status: "in-progress",
                course: "COMP 4736",
            }]
        }, {
            title: 'Comp chillinh', content: [{
                id: 0,
                title: "Assignment 2: Data Structures",
                dueDate: "2023-03-02",
                type: "assignment",
                status: "completed",
                course: "COMP 3760",
            }, {
                id: 1,
                title: "Lab 3: SQL Queries",
                dueDate: "2023-03-26",
                type: "assignment",
                status: "in-progress",
                course: "COMP 4537",
            }, {
                id: 2,
                title: "Assignment 4: Ethics Report",
                dueDate: "2023-04-01",
                type: "assignment",
                status: "in-progress",
                course: "LIBS 7102",
            }, {
                id: 3,
                title: "Midterm Exam: Object-Oriented Programming",
                dueDate: "2023-04-06",
                type: "exam",
                status: "in-progress",
                course: "COMP 3522",
            }, {
                id: 4,
                title: "Quiz 2: Operating Systems",
                dueDate: "2023-04-01",
                type: "quiz",
                status: "in-progress",
                course: "COMP 4736",
            }],
        },];
    const tasksByCourse = {};

    tasks.forEach(task => {
        if (!tasksByCourse[task.course]) {
            tasksByCourse[task.course] = [];
        }
        tasksByCourse[task.course].push(task);
    });
    return (
        <div className="container w-full mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Welcome {session && session.user.name}</h1>
            <div className="accordion justify-start">
                {Object.entries(tasksByCourse).map(([course, tasks]) => (
                    <Accordion key={course} title={course} content={tasks}/>
                ))}
            </div>
        </div>
    );
};

export default Profile;