import { useEffect, useRef, useState } from "react";
import "./App.css";
import { ReactTyped } from "react-typed";
import Socials from "./components/Socials";
import Background from "./components/Background";
import { motion } from "framer-motion";
import { HeroHighlight } from "./components/highlight";

const sections = ["ABOUT", "EXPERIENCE", "PROJECTS"];

const lineActive = (title: string) => {
  return (
    <a href={"#" + title.toLowerCase()}>
      <li className="flex items-center">
        <span className="w-[64px] h-[0px] border-solid border border-mtext-white/90 transition-all duration-300 ease-in-out" />
        <p className="text-mtext-white/90 font-medium ml-4 transition-all duration-300 ease-in-out">
          {title}
        </p>
      </li>
    </a>
  );
};

const line = (title: string) => {
  return (
    <a href={"#" + title.toLowerCase()}>
      <li className="flex items-center transition-all duration-300 ease-in-out group/nav">
        <span className="w-[32px] h-[0px] border-solid border border-white/40 transition-all duration-300 ease-in-out group-hover/nav:border-white/60 group-hover/nav:w-[64px]" />
        <p className="text-white/40 font-medium ml-4 transition-all duration-300 ease-in-out group-hover/nav:text-white/60">
          {title}
        </p>
      </li>
    </a>
  );
};

const link = (url: string, title: string) => {
  return (
    <a
      href={url}
      className="font-bold transition-colors hover:bg-gradient-to-tr hover:from-sky-300 hover:via-blue-500 hover:to-blue-900 hover:bg-clip-text hover:text-transparent"
    >
      {title}
    </a>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState("ABOUT");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id.toUpperCase());
        }
      });
    }, options);

    sections.forEach((section) => {
      if (sectionRefs.current[section]) {
        observer.observe(sectionRefs.current[section] as HTMLElement);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (sectionRefs.current[section]) {
          observer.unobserve(sectionRefs.current[section] as HTMLElement);
        }
      });
    };
  }, []);

  return (
    <>
      <HeroHighlight>
        <div className="w-screen h-screen overflow-y-auto scroll-smooth">
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <div className="my-auto">
                  <p className=" text-xl max-sm:text-lg italic font-source-code-pro bg-gradient-to-tr from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent text-left">
                    Hi, My Name is
                  </p>
                  <a href="#about">
                    <h1 className="mt-3 mb-3 font-semibold text-white text-7xl max-sm:text-6xl text-left">
                      Nathan
                      <br /> Schroeder.
                    </h1>
                  </a>
                  <p className="text-4xl max-sm:text-3xl mb-5 text-white italic font-source-code-pro text-left">
                    <ReactTyped strings={["Designer/Coder."]} typeSpeed={100} />
                  </p>
                  <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px]">
                    <span className="absolute inset-[-1000%] animate-[spin_4.6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#bfdbfe_0%,#3b82f6_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-custom-dark px-3 py-1 text-sm font-medium text-mtext-white backdrop-blur-3xl">
                      Download CV
                    </span>
                  </button>
                  <nav className="flex flex-col gap-4 mt-16 max-sm:hidden">
                    {sections.map((section) =>
                      section === activeSection ? lineActive(section) : line(section)
                    )}
                  </nav>
                </div>
              </header>

              <main className="pt-24 lg:w-1/2 lg:py-24 ">
                {sections.map((section) => (
                  <section
                    key={section}
                    id={section.toLowerCase()}
                    ref={(el) => (sectionRefs.current[section] = el)}
                    className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                  >
                    <p className="text-mtext-white">
                      I'm a passionate software developer and UI designer with a
                      strong background in mobile and web application development.
                      I specialize in creating sleek, user-friendly interfaces and
                      robust, scalable web applications. My journey in tech
                      started with a love for coding and has evolved into a career
                      where I blend technical expertise with a keen eye for
                      design.
                      <br />
                      <br />
                      This portfolio is a testament to my skills and dedication.
                      Designed in Figma and developed using Visual Studio Code, it
                      showcases my ability to bring projects to life from concept
                      to deployment. Built with Vite and Tailwind CSS for an
                      efficient and smooth build, and deployed seamlessly on
                      Firebase, it reflects my commitment to quality and
                      innovation. <br />
                      <br />
                      Explore my work to see how I can bring innovative solutions
                      to your projects. Whether it's crafting a stunning UI or
                      developing a powerful web application, I am ready to tackle
                      new challenges and contribute to your success.
                    </p>
                  </section>
                ))}
                <p className="text-mtext-white mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                  Designed and developed by me using{" "}
                  {link("figma.com", "Figma")} and{" "}
                  {link("https://code.visualstudio.com/", "Visual Studio Code")}
                  . Built with {link("https://vitejs.dev/", "Vite")} and{" "}
                  {link("https://tailwindcss.com/", "Tailwind CSS")}, and
                  deployed on {link("https://firebase.google.com/", "Firebase")}
                  .
                </p>
              </main>
            </div>
          </div>
          <Background />
          <Socials />
        </div>
      </HeroHighlight>
    </>
  );
}

export default App;
