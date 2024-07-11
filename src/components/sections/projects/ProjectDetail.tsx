import React, { useEffect, useState } from 'react'
import VideoPlayer from './VideoPlayer'
import { ProjectData } from './ProjectData'

interface Props {
    video?: string,
    name?: string,
    company?: string,
    description?: string,
    images?: [string],
    tags?: [string],

}

const ProjectDetail = (id: number) => {
    const [project, setProject] = useState(ProjectData[id]);

    useEffect(() => {
        setProject(ProjectData[id]);
        console.log(project.name);

    }
    ), [id];

    return (
        <>
            {/* <p className='text-mtext-white mb-8 text-2xl font-medium'>{project.name ?? "Loading..."}</p>
        <p className='text-mtext-white/60 font-semibold'>{project.company ?? "Loading..."}</p>
            {project.video ?
                <VideoPlayer videoSrc={project.video} type="video/mp4" />
                :
                null
            }

            <p className='text-mtext-white mt-3'>{project.description ?? "Loading..."}</p> */}



        </>
    )
}

export default ProjectDetail