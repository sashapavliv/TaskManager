import React, {useState} from 'react';
import DeleteModal from "../modals/deleteModal/DeleteModal";
import CreateEditModal from "../modals/createEditModal/CreateEditModal";
import CompleteModal from "../modals/completeModal/CompleteModal";
import classNames from "classnames";
import {ITask} from "../../types/Task";
import Icon from "../../assets/Icon/Icon";
import './taskStyles.scss';
import {constants} from "../../helpers/constants";


const Task = (props: any) => {
    const { handleEdit, handleDelete, handleComplete } = props;
    const task = {
        id: props.id,
        title: props.title,
        description: props.description,
        isCompleted: props.isCompleted,
    };

    const [openCompleteModal, setOpenCompleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const completeTask = () => {
        handleComplete(task.id);
        setOpenCompleteModal(true);
    };

    return (
        <div className={classNames({ "task-block": true, "task-completed-block": task.isCompleted })}>
            <div className={"task-top"}>
                <h3 className={"title"}>{task.title}</h3>
                <div className={"edit"}>
                    <Icon
                        onClick={() => setOpenEditModal(true)}
                        icon="edit"
                        className={"icon"}
                        size={"25"}
                        color={constants.whiteIconColor}
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
                                color={constants.whiteIconColor}
                            />
                        </div>
                        <div className={"delete"}>
                            <Icon
                                onClick={() => setOpenDeleteModal(true)}
                                icon="delete"
                                className={"icon"}
                                size={"20"}
                                color={constants.whiteIconColor}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <CreateEditModal
                handleClose={() => setOpenEditModal(false)}
                open={openEditModal}
                changeData={(task: ITask) => handleEdit(task)}
                task={task}
            />
            <DeleteModal
                handleDelete={(id: number) => handleDelete(id)}
                handleClose={() => setOpenDeleteModal(false)}
                open={openDeleteModal}
                id={task.id}
                titleDelete={'Are you sure you want to delete this task?'}
            />
            <CompleteModal
                open={openCompleteModal}
                handleClose={() => setOpenCompleteModal(false)}
            />
        </div>
    );
};
export default Task;
