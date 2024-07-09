import { useState } from "react";
import "./App.css";
import { ReactTyped } from "react-typed";
import Socials from "./components/Socials";
import Background from "./components/Background";
import { MacbookScroll } from "./components/macbook-scroll";

const lineActive = (title: string) => {
  return (
    <a href="#">
      <div className="flex items-center">
        <div className="w-[64px] h-[0px] border-solid border border-mtext-white/90"></div>
        <p className="text-mtext-white/90 font-medium ml-4">{title}</p>
      </div>
    </a>
  );
};

const line = (title: string) => {
  return (
    <a href="#">
      <div className="flex items-center transition-all duration-300 group">
        <div className="w-[32px] h-[0px] border-solid border border-white/40 transition-all duration-300 group-hover:border-white/60 group-hover:w-[64px]"></div>
        <p className="text-white/40 font-medium ml-4 transition-all duration-300 group-hover:text-white/60">
          {title}
        </p>
      </div>
    </a>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="dotted-background w-screen h-screen relative isolate ">
        <div className="relative w-full h-full overflow-scroll overflow-x-hidden">
          <div className="min-h-screen flex flex-row max-lg:flex-wrap justify-center items-center ml-28 max-sm:ml-0 max-lg:pt-10">
            <div className=" flex flex-col items-center relative">
              <div>
                <p className=" text-2xl max-sm:text-lg italic font-source-code-pro bg-gradient-to-tr from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent text-left">
                  Hi, My Name is
                </p>
                <h1 className="mt-3 mb-3 font-semibold text-white text-8xl max-sm:text-6xl text-left">
                  Nathan
                  <br /> Schroeder.
                </h1>
                <p className="text-5xl max-sm:text-3xl mb-5 text-white italic font-source-code-pro text-left">
                  <ReactTyped strings={["Designer/Coder."]} typeSpeed={100} />
                </p>
                <button className="mt-4 max-sm:mt-2 w-[212px] max-sm:w-[160px] h-[64px] max-sm:h-[52px] text-2xl max-sm:text-lg font-semibold bg-accent text-custom-dark rounded-lg">
                  Download CV
                </button>

                {/* Nav headers */}
                <div className="flex flex-col gap-4 mt-12 items-start">
                  {lineActive("HOME")}
                  {line("ABOUT")}
                  {line("EXPERIENCE")}
                  {line("PROJECTS")}
                </div>
              </div>
            </div>

            <div className="flex w-full h-[42rem] overflow-auto m-5 justify-center">

            </div>
          </div>


        </div>
        <Background />

      </div>
      <div className="float-right w-2/3 overflow-x-hidden">
        <MacbookScroll
          title={
            <span>
              Why the fuck is this not working. <br /> No kidding.
            </span>
          }
          src={`/images/Vector.png`}
          showGradient={false}
        />
      </div>
      <Socials />
    </>
  );
}

export default App;
