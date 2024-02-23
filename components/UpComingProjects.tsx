import React from 'react';
import { Slider } from './Slider';
import { Project } from '@/src/types';

type Props = {
    projects: Project[]
}

const ProjectsComp = ({ projects }:Props) => {


    return (
        <div className='h-screen mt-20' id='projects'>
            <h1 className='md:w-[1350px] mx-auto md:pt-6 pt-[35%] text-3xl text-center md:text-left animate-fade-up'>UPCOMING PROJECTS</h1>
            <div className='flex justify-center md:mt-0 mt-12 animate-fade-up'>
                {
                    projects.length > 0 ?
                        <Slider projectsToDisplay={projects}/>
                    :
                    <p>No projects to display</p>
                }
            </div>

        </div>
    );
};

export default ProjectsComp;

