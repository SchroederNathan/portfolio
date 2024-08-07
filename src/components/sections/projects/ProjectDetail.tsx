import VideoPlayer from './VideoPlayer'
import { ProjectData } from './ProjectData'
import { IconArrowLeft } from '@tabler/icons-react';
import TechChip from './TechChip';
import { link } from '../../../Helpers';

const ProjectDetail = ({ id, onBackClicked }: { id: number, onBackClicked: any }) => {
    const project = ProjectData[id];

    return (
        <div className='md:mb-12 lg:mb-18' id='detail'>
            <a className='mb-3 flex items-center hover:cursor-pointer group/back' onClick={() => onBackClicked()}>
                <IconArrowLeft stroke={2} className='text-mtext-white transition-colors group-hover/back:text-mtext-white/75' />
                <p className='text-mtext-white ml-1 transition-all duration-200 ease-in-out group-hover/back:ml-2 group-hover/back:text-mtext-white/75'>Back</p>
            </a>
            <p className='text-mtext-white text-2xl font-medium'>{project.name ?? "Loading..."}</p>
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
                null
            }
            <p className='text-mtext-white mt-6 whitespace-pre-wrap'>{project.description[1] ?? "Loading..."}</p>

            {project.images[1] ?
                <img className='w-full mt-6' src={project.images[0]} />
                :
                null
            }

            {project.link ? <p className='text-mtext-white'><br />{link(project.link, "Visit Website")}</p> : null}

            <ul className='mt-6 mb-6 flex flex-wrap'>
                <TechChip tags={project.tags} />
            </ul>

        </div>
    )
}

export default ProjectDetail