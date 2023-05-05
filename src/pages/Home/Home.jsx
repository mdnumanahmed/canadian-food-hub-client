import React, { useContext } from 'react';
import Slider from './Slider';
import Chef from './Chef';
import { AuthContext } from '../../providers/AuthProvider';
import Spinner from '../../shared/Spinner';
import Services from '../Services/Services';
import Foods from '../Foods/Foods';

const Home = () => {
    const {loading} = useContext(AuthContext)

    if(loading){
        return <Spinner />
    }

    return (
        <div>            
            <Slider />
            <Chef />
            <Services />
            <Foods />
        </div>
    );
};

export default Home;