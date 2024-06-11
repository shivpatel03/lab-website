import React from 'react';
import outreach from '../data/OutreachData';

function Outreach(){
    return (
        <div className="mt-5">
            <div className='outreach mt-6'>
                <div className="grid grid-cols-3 gap-4 mx-80 mt-4">
                    {outreach.map((outreach) => (
                        <div className='outreach p-4 border border-gray-200 rounded-lg text-center'>
                            <a href={outreach.linkTo} className='text-gray-600 text-sm'><img src={outreach.image} alt='placeholder' className='mx-auto mb-2 rounded'/></a>
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Outreach;