import React from 'react';
import './fisrtWindowStyle.scss'

interface IProps {
    handleOpen: Function;
}

const FirstWindowComponent = ({handleOpen}: IProps) => {
    return (
        <div className={'first-window'}>
            <h3>
                There are no tasks
            </h3>
            <p>
                Press the button below to add the first task
            </p>
            <button onClick={() => handleOpen()}>Add</button>
        </div>
    );
};

export default FirstWindowComponent;