'use client'
import getAllProjects from '@/API/getAllProjects';
import React, {useEffect, useState} from 'react';
import { Slider } from './Slider';
import { Project } from '@/src/types';

type Props = {
    projects: Project[]
}

const ProjectsComp = ({ projects }:Props) => {


    return (
        <div className='h-screen' id='projects'>
            <h1 className='md:pl-20 md:pt-6 pt-20 text-3xl text-center md:text-left animate-fade-up animate-duration-1000 animate-delay-500 animate-once'>OUR PROJECTS</h1>
            <div className='flex justify-center md:mt-2 mt-20 animate-fade-up animate-duration-1000 animate-delay-1000'>
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

