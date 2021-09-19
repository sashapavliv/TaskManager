import React from 'react';
import {Dialog, DialogActions, DialogTitle} from "@material-ui/core";
import './deleteStyle.scss';

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
            <div className={'delete-dialog'}>
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure?"}
                </DialogTitle>
                <DialogActions>
                    <button className={'delete-button'} onClick={close}>No</button>
                    <button className={'delete-button'} onClick={remove} autoFocus>Yes</button>
                </DialogActions>
            </div>
        </Dialog>
    );
};

export default DeleteModal;