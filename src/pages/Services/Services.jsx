import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('https://canadian-food-hub-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className='py-20 bg-pink-100'>
            <div className="chef-area container mx-auto">
                <div className="sec-title text-center mb-8">
                    <h4 className='text-xl font-bold'>Our Services</h4>
                    <h1 className='text-4xl font-bold'>What We Offers</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    services.map(service => <SingleService key={service.id} service={service} />)
                }
                </div>
            </div>
        </section>
    );
};

export default Services;