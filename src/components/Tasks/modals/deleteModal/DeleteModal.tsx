import React from 'react';
import {Dialog, DialogActions, DialogTitle} from "@material-ui/core";
import './deleteStyle.scss';
import ModalComponent from "../../../modalComponent/modalComponent";

interface IProps {
    handleClose: Function;
    handleDelete: Function;
    open: boolean;
    id: number
}

const DeleteModal = ({handleClose, handleDelete, open, id}: IProps) => {

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
            <ModalComponent handleClose={close} title={'Delete'} actionText={'Delete'} handleSubmit={remove}>
            <div className={'delete-dialog'}>
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete this task?"}
                </DialogTitle>
            </div>
            </ModalComponent>
        </Dialog>
    );
};

export default DeleteModal;