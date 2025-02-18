import {PROJECTS} from '../constants';
import { useRef } from 'react';

const Projects=()=>{

    const projetsRef = useRef(null); 

    return(
        <section className="pt-16" id='projects' ref={projetsRef}>
            <div className="px-4">
                <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
                    Projects
                </h2>
                <div className="flex flex-wrap justify-center">
                    {PROJECTS.map((project,index)=>{
                        return(
                            <div key={index} className='flex w-full flex-col p-4 md:w-1/2 lg:w-1/3 '>
                                <div className='flex-grow overflow-hidden rounded-lg border border-purple-300/20'>
                                    <a href={project.link} target='_blank' rel='noopener noreferrer'>
                                        <img src={project.imgSrc} alt={project.title} className='h-60 w-full object-cover cursor-pointer
                                        transform transition duration-300 hover:scale-110'/>
                                    </a>
                                    <div className='p-6'>
                                        <h3 className='mb-2 text-lg font-medium'>{project.title}</h3>
                                        <p className='mb-4'> {project.description}</p>
                                        <div className='mb-4'>
                                            <strong>Tech stack:</strong>
                                            <ul>
                                                {project.techStack.map((tech,index)=>{
                                                    return(
                                                        
                                                            <li key={index} className='mb-1 mr-2 inline-block rounded-full border-2
                                                            border-pink-500/30 px-3 py-1 text-sm font-semibold'>
                                                                {tech}
                                                            </li>
                                                    
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects;