import React from 'react';
import {Dialog, DialogTitle} from "@material-ui/core";
import ModalComponent from "../modalComponent/modalComponent";
import './deleteStyle.scss';

interface IProps {
    handleClose: Function;
    handleDelete: Function;
    open: boolean;
    id?: number;
    titleDelete: string;
}

const DeleteModal = ({handleClose, handleDelete, open, id, titleDelete}: IProps) => {

    const close = () => handleClose();
    const remove = () => {
        handleDelete(id);
        close();
    }

    return (
        <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <ModalComponent handleClose={close} title={id?'Delete task':'Delete all tasks'} actionText={'Delete'} handleSubmit={remove}>
            <div className={'delete-dialog'}>
                <DialogTitle id="alert-dialog-title">
                        {titleDelete}
                </DialogTitle>
            </div>
            </ModalComponent>
        </Dialog>
    );
};

export default DeleteModal;