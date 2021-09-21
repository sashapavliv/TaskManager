import React from 'react';
import {Dialog} from "@material-ui/core";
import Icon from "../../../assets/Icon/Icon";
import {constants} from "../../../helpers/constants";
import './complete.scss'

interface IProps {
    handleClose: Function;
    open: boolean;
}

const CompleteModal = ({handleClose, open}: IProps) => {
    const close = () => handleClose();
    return (
        <Dialog open={open} onClose={close}>
                <div className={'complete-dialog'}>
                    <Icon onClick={handleClose} icon="delete" className={'icon-complete'} size={"20"} color={constants.blueIconColor}/>
                    <p>Completed!</p>
                </div>
        </Dialog>
    );
};
export default CompleteModal;