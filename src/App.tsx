import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ReactTyped } from "react-typed";

const lineActive = (title: string) => {
  return (
    <div className="flex items-center">
      <div className="w-[64px] h-[0px] border-solid border border-mtext-white/90"></div>
      <p className="text-mtext-white/90 font-medium ml-4">{title}</p>
    </div>
  );
};

const line = (title: string) => {
  return (
    <div className="flex items-center">
      <div className="w-[32px] h-[0px] border-solid border border-mtext-white/40"></div>
      <p className="text-mtext-white/40 font-medium ml-4">{title}</p>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="dotted-background w-screen h-screen relative isolate">
        <div className="relative w-full h-full">

          <div className="min-h-screen flex flex-row items-center">
            <div className="ml-52 flex-1 relative">
              <p className="text-accent/75 text-2xl italic font-source-code-pro bg-gradient-to-tr from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent">
                Hi, My Name is
              </p>
              <h1 className="mt-3 mb-3 font-semibold text-mtext-white text-8xl">
                Nathan
                <br /> Schroeder.
              </h1>
              <p className="text-5xl mb-5 text-mtext-white italic font-source-code-pro">
                <ReactTyped strings={["Designer/Coder."]} typeSpeed={100} />
              </p>
              <button className="mt-4 w-[212px] h-[64px] text-2xl font-semibold bg-accent text-custom-dark rounded-lg">
                Download CV
              </button>

              {/* Nav headers */}
              <div className="flex flex-col gap-4 mt-12">
                {lineActive("HOME")}
                {line("ABOUT")}
                {line("EXPERIENCE")}
                {line("PROJECTS")}
              </div>
            </div>

            <div className="flex-1">
              Hello
            </div>

            <div className="fixed bottom-0 left-0 h-full w-[100px]">
              <p className="absolute left-5 right-0 m-auto text-4xl font-semibold mt-6 bg-gradient-to-tr from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent">
                &lt;/&gt;
              </p>
              <a href="https://discord.gg/9w3r4u3" className="h-[24px] absolute bottom-20 left-0 right-0 m-auto">
                <img src="images/discord.svg" className="m-auto" />
              </a>
              <a href="https://instagram.com/nathanschroederr" className="h-[24px] absolute bottom-32 left-0 right-0 m-auto">
                <img src="images/instagram.svg" className="m-auto" />
              </a>
              <a href="https://github.com/schroedernathan" className="h-[24px] absolute bottom-44 left-0 right-0 m-auto">
                <img src="images/github.svg" className="m-auto" />
              </a>
              <a href="https://www.linkedin.com/in/nathan-schroeder-a40aa2210/" className="h-[24px] absolute bottom-56 left-0 right-0 m-auto">
                <img src="images/linkedin.svg" className="m-auto" />
              </a>
              <div className="h-[58px] bg-mtext-white w-[2px] absolute bottom-0 left-0 right-0 m-auto"></div>
            </div>
          </div>

          {/* Background images */}
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <img src="/images/Vector.png" className=" -z-10" />
            <img src="/images/Vector-1.png" className="absolute top-0 right-0 -z-10" />
            <img src="/images/Vector-2.png" className="absolute bottom-0 left-0 -z-10" />
            <img src="/images/Vector-3.png" className="absolute bottom-0 right-0 -z-10" />


            {/* <div className="bg-[url('/images/Vector.png')] w-100 h-100 bg-no-repeat absolute" /> */}
            <div className="bg-[url('/images/Vector-1.png')] w-fit h-full bg-no-repeat absolute" />
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
