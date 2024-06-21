import React from 'react';
import {positions,image} from '../data/OpportunitiesData.js';

function Opportunities(){
    return (
    <div className='mt-20'>
           {positions.map((positions) => (
                <div className='mt-10 mx-20 mb-10'>
                    <h3 className='mb-3 font-bold text-xl'>{positions.title}</h3>
                    <p className=''>{positions.description}</p>
                </div>
            ))}
            
            {image.map((image) => (
                
            <img src={image.image} alt='placeholder' className='mx-auto mb-2 max-md' ></img>
            ))}
    </div>
    
    );
}

export default Opportunities;