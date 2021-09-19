import React, {useState} from 'react';
import Icon from "../../assets/Icon/Icon";
import DeleteModal from "../Tasks/modals/deleteModal/DeleteModal";
import CreateEditModal from "../Tasks/modals/createEditModal/CreateEditModal";
import './taskStyles.scss';
import CompleteModal from "../Tasks/modals/completeModal/CompleteModal";

const Task = (props: any) => {

    const {changeSomething, handleDelete} = props;
    const task = {id: props.id, title: props.title, description: props.description}

    const [openComplete, setOpenComplete] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const handleCloseEdit = () => {
        setOpenEdit(false);
    }

    const handleOpenEdit = () => {
        setOpenEdit(true);
    }
    const handleCloseDelete = () => {
        setOpenDelete(false);
    }

    const handleOpenDelete = () => {
        setOpenDelete(true);
    }
    const handleOpenComplete = () => {
        setOpenComplete(true);
    }
    const handleCloseComplete = () => {
        setOpenComplete(false);
    }

    return (
        <div className={'task-block'}>
            <div className={'task-top'}>
                <h3 className={'title'}>
                    {task.title}
                </h3>
                <div className={'edit'}>
                    <Icon onClick={handleOpenEdit} icon="edit" className={'icon'} size={"25"} color={"#f1fafb"}/>
                </div>
            </div>
            <div className={'task-bottom'}>
                <p className={'body'}>
                    {task.description}
                </p>
                <div className={'complete-delete'}>
                    <div className={'two-buttons'}>
                        <div className={'complete'}>
                            <Icon onClick={handleOpenComplete} icon="complete" className={'icon'} size={"20"} color={"#f1fafb"}/>
                        </div>
                        <div className={'delete'}>
                            <Icon onClick={handleOpenDelete} icon="delete" className={'icon'} size={"20"}
                                  color={"#f1fafb"}/>
                        </div>
                    </div>
                </div>
            </div>
            <CreateEditModal handleClose={handleCloseEdit} open={openEdit}
                             changeData={(task: any) => changeSomething(task)} task={task}/>
            <DeleteModal handleDelete={(id: number) => handleDelete(id)} handleClose={handleCloseDelete}
                         open={openDelete} id={task.id}/>
             <CompleteModal open={openComplete} handleClose={handleCloseComplete}/>
        </div>
    );
};
export default Task;