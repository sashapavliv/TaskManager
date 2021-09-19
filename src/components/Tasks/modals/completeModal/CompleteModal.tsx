import React from 'react';
import {Dialog} from "@material-ui/core";
import './complete.scss'
import Icon from "../../../../assets/Icon/Icon";

interface IProps {
    handleClose: Function;
    open: boolean;
}

const CompleteModal = ({handleClose, open}: IProps) => {
    const close = () => handleClose();
    return (
        <Dialog open={open} onClose={close}>
            <div className={'complete-dialog'}>
                <div className={'close-icon'}>
                    <Icon onClick={handleClose} icon="delete" className={'icon'} size={"20"} color={"#4993fa"}/>
                </div>
                <p>Complited!</p>
            </div>
        </Dialog>
    );
};
export default CompleteModal;