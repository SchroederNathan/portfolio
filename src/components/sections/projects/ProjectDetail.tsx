import React, { useEffect, useState } from 'react'
import VideoPlayer from './VideoPlayer'
import { ProjectData } from './ProjectData'
import { IconArrowLeft } from '@tabler/icons-react';

const ProjectDetail = ({ id, onBackClicked }: { id: number, onBackClicked: any }) => {
    const project = ProjectData[id];

    useEffect(() => {

    }
    ), [id];

    return (
        <div className='md:mb-12 lg:mb-18'>
            <a className='mb-3 flex items-center hover:cursor-pointer group/back' onClick={() => onBackClicked()}>
                <IconArrowLeft stroke={2} className='text-mtext-white transition-colors group-hover/back:text-mtext-white/75' />
                <p className='text-mtext-white ml-1 transition-all duration-200 ease-in-out group-hover/back:ml-2 group-hover/back:text-mtext-white/75'>Back</p>
            </a>
            <p className='text-mtext-white  text-2xl font-medium'>{project.name ?? "Loading..."}</p>
            {project.company ?
                <a href={project.link}>
                    <p className='text-mtext-white/60 mb-6 font-semibold'>{project.company ?? "Loading..."}</p>
                </a>
                :
                null
            }

            {project.video ?
                <VideoPlayer videoSrc={project.video} type="video/mp4" />
                :
                <a href={project.link}>
                    <img className='w-full mt-6 rounded-md' src={project.images[0]} />
                </a>
            }
            <p className='text-mtext-white mt-6 whitespace-pre-wrap'>{project.description[1] ?? "Loading..."}</p>

            {project.images.length > 1 ?
                <img className='w-full mt-6' src={project.images[1]} />
                :
                null
            }

            {/* <p className='text-mtext-white mt-6 whitespace-pre-wrap'>{project.description[0] ?? "Loading..."}</p> */}




        </div>
    )
}

export default ProjectDetail