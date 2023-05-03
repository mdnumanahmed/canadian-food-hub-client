import React from 'react';
import loader from '../assets/loader.gif'

const Spinner = () => {
    return (
        <div>
            <img src={loader} alt="" />
        </div>
    );
};

export default Spinner;