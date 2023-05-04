import React from 'react';
import loader from '../assets/loader.gif'

const Spinner = () => {
    return (
        <div className='flex justify-center items-center bg-white min-h-screen'>
            <img src={loader} alt="" />
        </div>
    );
};

export default Spinner;