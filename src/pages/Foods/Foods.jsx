import React, { useEffect, useState } from 'react';
import SingleFood from './SingleFood';

const Foods = () => {
    const [foods, setFoods] = useState([])

    useEffect(()=>{
        fetch('https://canadian-food-hub-server.vercel.app/recipe')
        .then(res => res.json())
        .then(data => {
            const slicedData = data.filter(d => d.id < 9)
            setFoods(slicedData)
        } )
    },[])
    return (
        <section className='py-20 bg-indigo-100'>
            <div className="chef-area container mx-auto">
                <div className="sec-title text-center mb-8">
                    <h4 className='text-xl font-bold'>Goodess & Taste</h4>
                    <h1 className='text-4xl font-bold'>Our Popular Dishes</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    foods.map(food => <SingleFood key={food.id} food={food} />)
                }
                </div>
            </div>
        </section>
    );
};

export default Foods;