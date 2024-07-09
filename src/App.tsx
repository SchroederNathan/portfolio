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
      <div className="dotted-background w-screen h-screen overflow-y-auto">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
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
            </header>


            <main className="pt-24 lg:w-1/2 lg:py-24">
              <p className="text-mtext-white mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Enim diam vulputate ut pharetra sit amet aliquam id diam. Faucibus nisl tincidunt eget nullam. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Ut venenatis tellus in metus vulputate eu. Ultricies mi eget mauris pharetra et ultrices neque ornare. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. In iaculis nunc sed augue. Platea dictumst quisque sagittis purus sit amet. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Molestie a iaculis at erat pellentesque adipiscing. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Sit amet consectetur adipiscing elit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla.

                Metus vulputate eu scelerisque felis. Ante in nibh mauris cursus mattis molestie. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. Sagittis purus sit amet volutpat. Sem et tortor consequat id porta nibh venenatis cras. Sed nisi lacus sed viverra. Enim nunc faucibus a pellentesque sit amet porttitor eget. Arcu ac tortor dignissim convallis aenean et tortor at. In est ante in nibh mauris cursus mattis molestie a. Nisl suscipit adipiscing bibendum est ultricies. Aenean sed adipiscing diam donec adipiscing.

                Auctor urna nunc id cursus metus. Egestas congue quisque gue quisque gue quisque gue quisque gue quisque gue quisque gue quisque gue quisque gue quisque gue quisque gue quisque egestas diam in arcu cursus euismod. Sit amet aliquam id diam maecenas ultricies mi eget. In vitae turpis massa sed elementum tempus egestas sed. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Aliquet porttitor lacus luctus accumsan tortor posuere. Non odio euismod lacinia at. Eget aliquet nibh praesent tristique magna. Sit amet porttitor eget dolor. Amet justo donec enim diam vulputate ut. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. In hendrerit gravida rutrum quisque non tellus orci. Amet porttitor eget dolor morbi.</p>
            </main>
          </div>
        </div>
        <Background />
        <Socials />
      </div>
    </>
  );
}

export default App;
