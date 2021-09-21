import React from 'react';
import Icon from "../../assets/Icon/Icon";
import './style.scss'

interface IProps {
    handleClose: Function;
    handleSubmit?: Function;
    children: any;
    actionText?: string;
    title?: string;
}

const ModalComponent = ({handleSubmit, handleClose, children, title, actionText}: IProps) => {
    return (
        <div className={'modal-block'}>
            <div className={'header'}>
                <p>{title} Task</p>
                <Icon onClick={handleClose} icon="delete" className={'icon'} size={"20"} color={"#4993fa"}/>
            </div>
            <div className={'children'}>
                {children}
            </div>

            {handleSubmit ?
                <div className={'footer'}>
                    <button onClick={() => handleClose()}>Cancel</button>
                    <button onClick={() => handleSubmit()}>{actionText}</button>
                </div>
                : null}
        </div>
    );
};

export default ModalComponent;