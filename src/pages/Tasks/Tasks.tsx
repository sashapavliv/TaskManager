import React, {useState} from 'react';
import Task from "../../components/Task/Task";
import Icon from "../../assets/Icon/Icon";
import CreateEditModal from "../../components/modals/createEditModal/CreateEditModal";
import {complete, create, deleteItem, edit, setTasksToLocalStorage} from "../../services/TaskService";
import FirstWindowComponent from "../../components/firstWindowComponent/FirstWindowComponent";
import classNames from "classnames";
import {setTaskArray} from "../../helpers/helpers";
import {ITask} from "../../types/Task";
import DeleteModal from "../../components/modals/deleteModal/DeleteModal";
import './Tasks.scss';
import {constants} from "../../helpers/constants";

const Tasks = () => {
    const [tasks, setTasks] = useState(setTaskArray());
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openDeleteAllModal, setOpenDeleteAllModal] = useState(false);

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
        setTasksToLocalStorage(taskArray);
    }

    return (
        <div className={classNames({'main-container': true, 'main-empty-container': !tasks.length})}>
            <div className={'create-block'}>
                {tasks.length ? <div className={'create'}>
                        <button onClick={() => setOpenDeleteAllModal(true)}>Clear all</button>
                        <Icon icon="create" onClick={() => setOpenCreateModal(true)} className={'icon-tasks'} size={"40"}
                              color={constants.blueIconColor}/>
                    </div>
                    : null}
            </div>
            {
                tasks.length ? tasks.map((value: any) => {
                    return (
                        <Task key={value.id} {...value}
                              handleEdit={(data: any) => handleEdit(data)}
                              handleDelete={(id: number) => handleDelete(id)}
                              handleComplete={(task: any) => handleComplete(task)}
                        />
                    )
                }) : <FirstWindowComponent handleOpen={() => setOpenCreateModal(true)}/>
            }
            <CreateEditModal handleClose={() => setOpenCreateModal(false)}
                             changeData={(task: any) => handleCreate(task)}
                             open={openCreateModal}/>
            <DeleteModal
                handleDelete={handleDeleteAll}
                handleClose={() => setOpenDeleteAllModal(false)}
                open={openDeleteAllModal}
                titleDelete={'Are you sure you want to delete all tasks?'}
            />
        </div>
    );
};

export default Tasks;