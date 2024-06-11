import React from 'react';
import { previousProjects, currentProjects, funding } from '../data/ProjectData'; // importing data from external JavaScript file


function Research(){
    return (
    
        <div className=''>
            <div className="header bg-indigo-500 flex items-center justify-center h-[60vh] bg-[url('https://via.placeholder.com/500')]"> 
                <strong className='text-5xl'>Boots on the Ground</strong>
            </div>
            <div className='currentProjects mt-6'>
                <h1 className= 'text-5xl font-bold text-center'>Current Projects</h1>
                <div className="grid grid-cols-3 gap-4 mx-80 mt-4">
                    {currentProjects.map((project) => (
                        <div className='project p-4 border border-gray-200 rounded-lg text-center'>
                            <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                            <img src={project.image} alt='placeholder' className='mx-auto mb-2 rounded'/>
                            <p className='text-gray-600 text-sm'>{project.photoCredit} </p>
                        </div> 
                    ))}
                </div>
            </div>
            <div>
                <h1 className= 'text-5xl font-bold text-center'>Previous Projects</h1>
                <div className="grid grid-cols-2 gap-6 mt-4 mx-80">
                    {previousProjects.map((project) => (
                        <div className='project p-4 border border-gray-200 rounded-lg text-center'>
                            <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                            <img src={project.image} alt='placeholder' className='mx-auto mb-2 rounded'/>
                            <p className='text-gray-600 text-sm'>{project.photoCredit} </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-2">
                <h1 className= 'text-5xl font-bold text-center'>Funding</h1>
                <div className="grid grid-cols-8 gap-6 mt-4 mx-80">
                    {funding.map((company) => (
                        <div className='project p-4 border border-gray-200 rounded-lg text-center'>
                            <img src={company.image} alt='placeholder' className='mx-auto mb-2 rounded'/>
                            <p className='text-gray-600 text-sm'>{company.companyName} </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Research;