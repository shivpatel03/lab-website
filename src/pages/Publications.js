import React from 'react';
import publications from '../data/PublicationData';

function Publications(){
    return (
        <div className="content">
            <div className="header bg-indigo-500 flex items-center justify-center h-[60vh] bg-[url('https://via.placeholder.com/500')]"> 
                <strong className='text-5xl'>Our Publications</strong>
            </div>
            <div className='citations mt-6'>
                <ul>
                    {publications.slice().reverse().map((publication) => (
                        <li key={publication.id} className='my-6 text-2xl text-center'>{publication.id}. {publication.citation}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Publications;