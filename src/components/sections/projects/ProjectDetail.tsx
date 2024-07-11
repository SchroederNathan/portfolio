import React, { useEffect, useState } from 'react'
import VideoPlayer from './VideoPlayer'
import { ProjectData } from './ProjectData'

const ProjectDetail = ({ id }: { id: number }) => {
    const project = ProjectData[id];

    useEffect(() => {

    }
    ), [id];

    return (
        <div className='md:mb-12 lg:mb-18'>
            <p className='text-mtext-white  text-2xl font-medium'>{project.name ?? "Loading..."}</p>
            <p className='text-mtext-white/60 mb-6 font-semibold'>{project.company ?? "Loading..."}</p>
            {project.video ?
                <VideoPlayer videoSrc={project.video} type="video/mp4" />
                :
                null
            }
            <p className='text-mtext-white mt-6 whitespace-pre-wrap'>{project.description[1] ?? "Loading..."}</p>

            <img className='w-full mt-6' src={project.images[1]}  />

            {/* <p className='text-mtext-white mt-6 whitespace-pre-wrap'>{project.description[0] ?? "Loading..."}</p> */}




        </div>
    )
}

export default ProjectDetail