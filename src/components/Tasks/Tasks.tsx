import React, {useState} from 'react';
import Task from "../Task/Task";
import Icon from "../../assets/Icon/Icon";
import CreateEditModal from "./modals/createEditModal/CreateEditModal";
import './Tasks.scss'

const Tasks = () => {
    const [tasks, setTasks] = useState(Object.keys(JSON.parse(localStorage.getItem('tasks') || '{}')).length ? JSON.parse(localStorage.getItem('tasks') || '{}') : []) as any;
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const changeData = (task: any) => {
        task.id = tasks.length ? tasks[tasks.length - 1].id + 1 : 0;
        const newArray = [...tasks];
        newArray.push(task)
        setTasks(newArray);
        localStorage.setItem('tasks', JSON.stringify([...tasks, task]));
    }
    const changeSomething = (task: any) => {
        const findedIndex = tasks.findIndex((f: any) => f.id === task.id);
        const tasksArray = [...tasks];
        tasksArray[findedIndex] = task;
        setTasks(tasksArray);
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    }

    const handleDelete = (id: number) => {
        const findedIndex = tasks.findIndex((f: any) => f.id === id);
        const tasksArray = [...tasks];
        tasksArray.splice(findedIndex, 1);
        setTasks(tasksArray);
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    }

    return (
        <div className={'main-container'}>
            <div className={'create-block'}>
                <div className={'create'}>
                    <Icon icon="create" onClick={handleOpen} className={'icon'} size={"40"} color={"#4993fa"}/>
                </div>
            </div>
            {
                tasks.length ? tasks.map((value: any) => {
                    return (
                        <Task key={value.id} {...value}
                              changeSomething={(data: any) => changeSomething(data)}
                              handleDelete={(id: number) => handleDelete(id)}
                        />
                    )
                }) : null
            }
            <CreateEditModal handleClose={handleClose} changeData={(task: any) => changeData(task)} open={open}/>
        </div>
    );
};

export default Tasks;