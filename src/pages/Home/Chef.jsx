import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChef from './SingleChef';

const Chef = () => {
    const allChef = useLoaderData()
    return (
        <section className='py-20'>
            <div className="chef-area container mx-auto">
                <div className="sec-title text-center mb-8">
                    <h4 className='text-xl font-bold'>Our Chefs</h4>
                    <h1 className='text-4xl font-bold'>We Have Experienced Chef Team</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    allChef.map(chef => <SingleChef key={chef.id} chef={chef} />)
                }
                </div>
            </div>
        </section>
    );
};

export default Chef;