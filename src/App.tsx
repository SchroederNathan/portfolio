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
      <div className="dotted-background">
        <div className="relative isolate ">
          <div className="absolute left-1/4 h-1/2  -translate-x-1/2 blur-[120px] xl:-top-6">

          </div>

          <div className="min-h-screen flex flex-row items-center ">

            <div className="text-left ml-52 flex-1 relative">
              {/* <div className="relative">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob"></div>
                <div className="absolute top-0 left-72 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-6000"></div>
                <div className="absolute top-64 right-60 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob animation-delay-4000"></div>
              </div> */}
              <p className="text-accent/75 text-2xl italic font-source-code-pro bg-gradient-to-tr from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent">
                Hi, My Name is
              </p>
              <h1 className="mt-3 mb-3 font-semibold text-mtext-white  text-8xl">
                Nathan
                <br /> Schroeder.
              </h1>
              <p className="text-5xl mb-5 text-mtext-white italic font-source-code-pro">
              <ReactTyped strings={["Designer/Coder."]} typeSpeed={100} />

                
              </p>
              <button className="mt-4 w-[212px] h-[64px] text-2xl  font-semibold bg-accent text-custom-dark  rounded-lg">
                Download CV
              </button>
              {/* <img src='images/dotshero.png' className="absolute -top-32 left-0 z-0"></img> */}

              {/* Nav headers */}
              <div className="flex flex-col gap-4 mt-12">
                {lineActive("HOME")}
                {line("ABOUT")}
                {line("EXPERIENCE")}
                {line("PROJECTS")}
              </div>
            </div>
            <div className="flex-1 ">Hello</div>

            <div className="fixed bottom-0 left-0 h-[100%] w-[100px]">
              <p className="absolute left-5 right-0 m-auto text-4xl font-semibold mt-6 bg-gradient-to-tr from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent">
                &lt;/&gt;
              </p>
              <a
                href="https://discord.gg/9w3r4u3"
                className="h-[24px] absolute bottom-20 left-0 right-0 m-auto"
              >
                <img src="images/discord.svg" className="m-auto"></img>
              </a>
              <a
                href="https://instagram.com/nathanschroederr"
                className="h-[24px] absolute bottom-32 left-0 right-0 m-auto"
              >
                <img src="images/instagram.svg" className="m-auto"></img>
              </a>
              <a
                href="https://github.com/schroedernathan"
                className="h-[24px] absolute bottom-44 left-0 right-0 m-auto"
              >
                <img src="images/github.svg" className="m-auto"></img>
              </a>
              <a
                href="https://www.linkedin.com/in/nathan-schroeder-a40aa2210/"
                className="h-[24px] absolute bottom-56 left-0 right-0 m-auto"
              >
                <img src="images/linkedin.svg" className="m-auto"></img>
              </a>

              <div className="h-[58px] bg-mtext-white w-[2px] absolute bottom-0 left-0 right-0 m-auto"></div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >

          </div>
          <div className="absolute -top-24">
            <div className="absolute -top-0 -left-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob"></div>
            <div className="absolute -top-48 left-[20rem] w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute -top-12 -left-24 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob animation-delay-6000"></div>
          </div>
          <div className="absolute -top-[24rem] right-[38rem]">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob"></div>
            <div className="absolute top-48 left-72 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-12 -left-24 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-6000"></div>
          </div>
          <div className="relative float-right mr-[32rem]">
            <div className="absolute -top-0 -left-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob"></div>
            <div className="absolute -top-48 left-72 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-15 animate-blob animation-delay-2000"></div>
            <div className="absolute -top-12 -left-24 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob animation-delay-6000"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
