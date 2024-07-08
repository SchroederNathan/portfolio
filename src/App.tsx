import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ReactTyped } from "react-typed";
import Socials from "./components/Socials";
import Background from "./components/Background";

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

          <div className="min-h-screen flex flex-row justify-center items-center ml-28">
            <div className="basis-2/5 flex flex-col items-center relative">
              <div>
                <p className="text-accent/75 text-2xl italic font-source-code-pro bg-gradient-to-tr from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent text-left">
                  Hi, My Name is
                </p>
                <h1 className="mt-3 mb-3 font-semibold text-white text-8xl text-left">
                  Nathan
                  <br /> Schroeder.
                </h1>
                <p className="text-5xl mb-5 text-white italic font-source-code-pro text-left">
                  <ReactTyped strings={["Designer/Coder."]} typeSpeed={100} />
                </p>
                <button className="mt-4 w-[212px] h-[64px] text-2xl font-semibold bg-accent text-custom-dark rounded-lg">
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

            <div className="basis-3/5 flex justify-center items-center">
              <p className="text-xl text-white">Hello</p>
            </div>
          </div>

          <Socials />
          <Background/>
        </div>
      </div>


    </>
  );
}

export default App;
