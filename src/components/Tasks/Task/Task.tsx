import React, {useEffect, useState} from 'react';
import Icon from "../../../assets/Icon/Icon";
import DeleteModal from "../modals/deleteModal/DeleteModal";
import CreateEditModal from "../modals/createEditModal/CreateEditModal";
import CompleteModal from "../modals/completeModal/CompleteModal";
import classNames from "classnames";
import './taskStyles.scss';
import {ITask} from "../../../types/Task";

const Task = (props: any) => {
    const { changeSomething, handleDelete, handleComplete } = props;
    const task = {
        id: props.id,
        title: props.title,
        description: props.description,
        isCompleted: props.isCompleted,
    };

    const [openComplete, setOpenComplete] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const completeTask = () => {
        handleComplete(task.id);
        setOpenComplete(true);
    };

    return (
        <div className={classNames({ "task-block": true, "task-completed-block": task.isCompleted })}>
            <div className={"task-top"}>
                <h3 className={"title"}>{task.title}</h3>
                <div className={"edit"}>
                    <Icon
                        onClick={() => setOpenEdit(true)}
                        icon="edit"
                        className={"icon"}
                        size={"25"}
                        color={"#f1fafb"}
                    />
                </div>
            </div>
            <div className={"task-bottom"}>
                <p className={"body"}>{task.description}</p>
                <div className={"complete-delete"}>
                    <div className={"two-buttons"}>
                        <div className={"complete"}>
                            <Icon
                                onClick={completeTask}
                                icon="complete"
                                className={"icon"}
                                size={"20"}
                                color={"#f1fafb"}
                            />
                        </div>
                        <div className={"delete"}>
                            <Icon
                                onClick={() => setOpenDelete(true)}
                                icon="delete"
                                className={"icon"}
                                size={"20"}
                                color={"#f1fafb"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <CreateEditModal
                handleClose={() => setOpenEdit(false)}
                open={openEdit}
                changeData={(task: ITask) => changeSomething(task)}
                task={task}
            />
            <DeleteModal
                handleDelete={(id: number) => handleDelete(id)}
                handleClose={() => setOpenDelete(false)}
                open={openDelete}
                id={task.id}
            />
            <CompleteModal
                open={openComplete}
                handleClose={() => setOpenComplete(false)}
            />
        </div>
    );
};
export default Task;
