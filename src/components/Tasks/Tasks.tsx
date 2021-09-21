import React, {useState} from 'react';
import Task from "./Task/Task";
import Icon from "../../assets/Icon/Icon";
import CreateEditModal from "./modals/createEditModal/CreateEditModal";
import {complete, create, deleteItem, edit, setLocalStorage} from "../../services/TaskService";
import FirstWindowComponent from "../firstWindowComponent/FirstWindowComponent";
import classNames from "classnames";
import {setTaskArray} from "../../helpers/helper";
import './Tasks.scss';
import {ITask} from "../../types/Task";

const Tasks = () => {
    const [tasks, setTasks] = useState(setTaskArray());
    const [open, setOpen] = useState(false);

    const handleDeleteAll = () => {
        setTasks([]);
        localStorage.clear();
    }

    const handleComplete = (id: number) => {
        setArray(complete(id, tasks));
    }

    const handleCreate = (task: ITask) => {
        setArray([...create(task, tasks)])
    }
    const handleEdit = (task: ITask) => {
        setArray([...edit(task, tasks)])
    }

    const handleDelete = (id: number) => {
        setArray(deleteItem(id, tasks))
    }

    function setArray(taskArray: Array<ITask>) {
        setTasks([...taskArray])
        setLocalStorage(taskArray);
    }

    return (
        <div className={classNames({'main-container': true, 'main-empty-container': !tasks.length})}>
            <div className={'create-block'}>
                {tasks.length ? <div className={'create'}>
                        <button onClick={handleDeleteAll}>Clear all</button>
                        <Icon icon="create" onClick={() => setOpen(true)} className={'icon-tasks'} size={"40"}
                              color={"#4993fa"}/>
                    </div>
                    : null}
            </div>
            {
                tasks.length ? tasks.map((value: any) => {
                    return (
                        <Task key={value.id} {...value}
                              changeSomething={(data: any) => handleEdit(data)}
                              handleDelete={(id: number) => handleDelete(id)}
                              handleComplete={(task: any) => handleComplete(task)}
                        />
                    )
                }) : <FirstWindowComponent handleOpen={() => setOpen(true)}/>
            }
            <CreateEditModal handleClose={() => setOpen(false)} changeData={(task: any) => handleCreate(task)}
                             open={open}/>
        </div>
    );
};

export default Tasks;