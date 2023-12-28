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
            <h1 className='pl-20 pt-6 text-3xl'>OUR PROJECTS</h1>
            <div className='flex justify-center'>
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

