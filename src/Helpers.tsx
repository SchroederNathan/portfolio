export const lineActive = (title: string) => {
    return (
  
      <li className="" key={title}>
        <a href={"#" + title} className=" w-fit flex items-center">
          <span className="w-[64px] h-[0px] border-solid border border-mtext-white/90 transition-all duration-300 ease-in-out" />
          <p className="text-mtext-white/90 font-medium ml-4 transition-all duration-300 ease-in-out">
            {title}
          </p>
        </a>
      </li >
  
    );
  };
  
  export const line = (title: string) => {
    return (
      <li className="" key={title}>
        <a href={"#" + title} className="w-fit flex items-center transition-all duration-300 ease-in-out group/nav ">
          <span className="w-[32px] h-[0px] border-solid border border-white/40 transition-all duration-300 ease-in-out group-hover/nav:border-white/60 group-hover/nav:w-[64px]" />
          <p className="text-white/40 font-medium ml-4 transition-all duration-300 ease-in-out group-hover/nav:text-white/60">
            {title}
          </p>
        </a>
      </li>
  
    );
  };
  
  export const link = (url: string, title: string) => {
    return (
      <a
        href={url}
        className="font-bold transition-colors hover:bg-gradient-to-tr hover:from-sky-300 hover:via-blue-500 hover:to-blue-900 hover:bg-clip-text hover:text-transparent"
      >
        {title}
      </a>
    );
  };
  