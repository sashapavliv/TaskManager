import React from 'react';
import './home.scss'
import Tasks from "../Tasks/Tasks";

const HomePage = () => {
    return (
        <div className={'home-block'}>
            <Tasks/>
        </div>
    );
};

export default HomePage;