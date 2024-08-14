import TechChip from "./TechChip";
interface Props {
  id?: number;
  image?: string;
  name?: string;
  company?: string;
  description?: string;
  links?: string[];
  tags?: string[];
  onItemClick?: any;
}

const Project = ({
  id,
  image,
  name,
  company,
  description,
  tags,
  onItemClick,
  links,
}: Props) => {
  const handleScrollToTop = (id: number) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional for smooth scrolling
    });
    onItemClick(id);
    console.log("Scrolled to top");
  };

  return (
    <li className="mb-12 group/project hover:cursor-pointer">
      <a onClick={() => handleScrollToTop(id!)}>
        <div className="group flex flex-row flex-basis relative pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:hidden bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg" />

          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
          <header className="basis-1/4 hidden sm:block text-mtext-white/60 z-10">
            {/* {date} */}
            <img
              src={image}
              alt={name}
              className="mt-1 p-0.5 w-full aspect-auto object-cover rounded border-2 border-accent/10 transition group-hover:border-accent/40 sm:order-1 sm:col-span-2 sm:translate-y-1"
            />
          </header>
          <main className="sm:basis-3/4 basis-1/1 z-10">
            <p className="text-mtext-white font-semibold flex items-center">
              {name}

              {links![1] ? (
                <a
                  href={links![1]}
                  className=" h-[24px] ml-2 transition-transform transform hover:-translate-y-1 z-20 group/github"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    className="transition-colors duration-200 fill-current text-white group-hover/github:text-transparent"
                    viewBox="0 0 24 24"
                  >
                    <defs>
                      <linearGradient
                        id="grad1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 ml-1 text-mtext-white hidden lg:group-hover/project:block icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 7l-10 10" />
                <path d="M8 7l9 0l0 9" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 ml-1 text-mtext-white lg:hidden icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 7l-10 10" />
                <path d="M8 7l9 0l0 9" />
              </svg>
            </p>

            {company ? (
              <p className="text-mtext-white/60 font-semibold">{company}</p>
            ) : (
              <p className="text-mtext-white/60 font-semibold">{company}</p>
            )}
            <p className="text-mtext-white mt-3">{description}</p>

            <ul className="mt-2 flex flex-wrap">
              <TechChip tags={tags} />
            </ul>
          </main>
        </div>
      </a>
    </li>
  );
};

export default Project;
