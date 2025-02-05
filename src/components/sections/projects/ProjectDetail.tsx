import VideoPlayer from "./VideoPlayer";
import { ProjectData } from "./ProjectData";
import { IconArrowLeft } from "@tabler/icons-react";
import TechChip from "./TechChip";
import { link } from "../../../Helpers";

const ProjectDetail = ({
  id,
  onBackClicked,
}: {
  id: number;
  onBackClicked: any;
}) => {
  const project = ProjectData[id];

  return (
    <div className="md:mb-12 lg:mb-18" id="detail">
      <a
        className="mb-3 flex items-center hover:cursor-pointer group/back"
        onClick={() => onBackClicked()}
      >
        <IconArrowLeft
          stroke={2}
          className="text-mtext-white transition-colors group-hover/back:text-mtext-white/75"
        />
        <p className="text-mtext-white ml-1 transition-all duration-200 ease-in-out group-hover/back:ml-2 group-hover/back:text-mtext-white/75">
          Back
        </p>
      </a>
      <p className="text-mtext-white text-2xl font-medium">
        {project.name ?? "Loading..."}
      </p>
      {project.company ? (
        <a href={project.link[0]}>
          <p className="text-mtext-white/60 mb-6 font-semibold">
            {project.company ?? "Loading..."}
          </p>
        </a>
      ) : null}

      {project.link![1] ? (
        <a
          href={project.link![1]}
          className="inline-block h-[24px] w-[24px] mt-3 transition-transform transform hover:-translate-y-1 z-20 group/github"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            className="transition-colors duration-200 fill-current text-white group-hover/github:text-transparent"
            viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{
                    stopColor: "rgb(56,189,248)",
                    stopOpacity: 1,
                  }}
                />
                <stop
                  offset="50%"
                  style={{
                    stopColor: "rgb(59,130,246)",
                    stopOpacity: 1,
                  }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: "rgb(30,64,175)",
                    stopOpacity: 1,
                  }}
                />
              </linearGradient>
            </defs>
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              fill="currentColor"
              className="group-hover/github:fill-[url(#grad1)]"
            />
          </svg>
        </a>
      ) : null}

      {project.images[1] ? (
        <a href={project.link[0]}>
          <img className="w-full mt-6 rounded shadow" src={project.images[0]} />
        </a>
      ) : null}


      <p className="text-mtext-white mt-6 whitespace-pre-wrap">
        {project.description[1] ?? "Loading..."}
      </p>

      {project.video ? (
        <div className="mt-6 rounded overflow-hidden">
          <VideoPlayer videoSrc={project.video} type="video/mp4" />
        </div>
      ) : null}

      {project.link[0] ? (
        <p className="text-mtext-white">
          <br />
          {link(project.link[0], "Visit Website")}
        </p>
      ) : null}

      <ul className="mt-6 mb-6 flex flex-wrap">
        <TechChip tags={project.tags} />
      </ul>
    </div>
  );
};

export default ProjectDetail;
