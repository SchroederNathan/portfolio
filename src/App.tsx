import { useEffect, useRef, useState } from "react";
import "./App.css";
import { ReactTyped } from "react-typed";
import Socials from "./components/Socials";
import Background from "./components/ui/Background";
import { HeroHighlight } from "./components/ui/highlight";
import Education from "./components/sections/Education";
import Work from "./components/sections/Work";
import Project from "./components/sections/Project";
import { ContactForm } from "./components/sections/contact/ContactForm";

const sections = ["ABOUT", "EXPERIENCE", "PROJECTS", "CONTACT"];

const lineActive = (title: string) => {
  return (

    <li className="">
      <a href={"#" + title} className=" w-fit flex items-center">
        <span className="w-[64px] h-[0px] border-solid border border-mtext-white/90 transition-all duration-300 ease-in-out" />
        <p className="text-mtext-white/90 font-medium ml-4 transition-all duration-300 ease-in-out">
          {title}
        </p>
      </a>
    </li >

  );
};

const line = (title: string) => {
  return (
    <li className="">
      <a href={"#" + title} className="w-fit flex items-center transition-all duration-300 ease-in-out group/nav ">
        <span className="w-[32px] h-[0px] border-solid border border-white/40 transition-all duration-300 ease-in-out group-hover/nav:border-white/60 group-hover/nav:w-[64px]" />
        <p className="text-white/40 font-medium ml-4 transition-all duration-300 ease-in-out group-hover/nav:text-white/60">
          {title}
        </p>
      </a>
    </li>

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
          <div className="mx-auto min-h-screen max-w-screen-xl px-12 py-24 sm:ps-28 sm:pe-12 sm:py-12 md:px-24 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <div className="my-auto">
                  <p className=" text-xl max-sm:text-lg italic font-source-code-pro bg-gradient-to-tr from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent text-left">
                    Hi, My Name is
                  </p>
                  <a href="#ABOUT">
                    <h1 className="mt-3 mb-3 font-semibold text-white text-7xl max-sm:text-6xl text-left">
                      Nathan
                      <br /> Schroeder.
                    </h1>
                  </a>
                  <p className="text-4xl max-sm:text-3xl mb-5 text-white italic font-source-code-pro text-left">
                    <ReactTyped strings={["Designer/Coder."]} typeSpeed={100} />
                  </p>
                  <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] hidden lg:block md:block">
                    <span className="absolute inset-[-1000%] animate-[spin_4.6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#bfdbfe_0%,#3b82f6_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-custom-dark px-3 py-1 text-sm font-medium text-mtext-white backdrop-blur-3xl">
                      Download CV
                    </span>
                  </button>
                  <nav className="mt-16 hidden lg:block">
                    {sections.map((section) =>
                      section === activeSection ? lineActive(section) : line(section)
                    )}
                  </nav>
                </div>
              </header>

              <main className="pt-12 lg:pt-24 md:pt-24 lg:w-1/2 lg:py-24">
                <section
                  id={'ABOUT'}
                  ref={(el) => (sectionRefs.current['ABOUT'] = el)}
                  className="scroll-mt-24  mb-12 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                >
                  <p className="text-mtext-white">
                    Welcome to my portfolio! As a dedicated software developer and UI designer, I have a solid background in both mobile and web application development. I excel in creating sleek, user-friendly interfaces and building robust, scalable applications.
                    <br /><br />
                    This portfolio highlights my expertise in bringing projects to life from concept to deployment. From the initial design phase using tools like Figma to the development phase utilizing various front-end frameworks and building APIs on the back-end, it showcases my commitment to quality and innovation.
                    <br /><br />
                    Explore my work to discover how I can provide innovative solutions for your projects. Whether it's designing a stunning UI or developing a powerful web application, I am eager to tackle new challenges and contribute to your success.
                  </p>

                </section>
                <section
                  id={'EXPERIENCE'}
                  ref={(el) => (sectionRefs.current['EXPERIENCE'] = el)}
                  className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 "
                >
                  <p className="text-mtext-white mb-8 text-2xl font-medium">Experience</p>
                  <ol className="group/list">
                    <Education date={"2020 - 2024"} program={'Mobile Applications Development'} school={'St. Clair College'} link={"https://www.stclaircollege.ca/programs/mobile-applications-development"} description="In this program I learned to develop, test, and deploy a variety of native mobile and web applications for multiple platforms while also designing, modeling, implementing and maintain databases within. I also learned how to design user-friendly prototypes inside these applications using tools like Figma. This program also gave me plenty of opportunity to work and lead teams to accomplish larger scale projects. " />

                    <Work
                      date={"2019 - 2024"}
                      position={"Assistant Manager"}
                      company={"Imagine Cinemas"}
                      description={"I have successfully led and managed a team with efficiency and cooperation, demonstrating strong skills in communication, organization, management, and leadership to foster a positive environment for a theatre team. Furthermore, I thrive in fast-paced environments, ensuring effective performance under pressure."}
                      link={"https://imaginecinemas.com/"} />
                  </ol>
                </section>
                <section
                  id={'PROJECTS'}
                  ref={(el) => (sectionRefs.current['PROJECTS'] = el)}
                  className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                >
                  <p className="text-mtext-white mb-8 text-2xl font-medium">Projects</p>
                  <ol className="group/list">

                    <Project
                      image={"images/footcare2you.jpg"}
                      name={"Footcare2You"}
                      description={"A freelanced web app for a medical foot service provider. Featuring a contact form, Google Map, and detailed service info, it showcases my skills in modern web design and development using Figma and React."}
                      tags={["tag1", "tag2"]}
                      link={"https://www.footcare2you.ca"}
                    />
                    <Project
                      image={"images/footcare2you.jpg"}
                      name={"Inventory Managment System"}
                      company="H2M Staging"
                      description={"I led a team of 3 to develop a web app to track inventory coming in and out of warehouses and track which homes they're in. We built the front end with Angular and an API with NodeJS, ExpressJS, Sequelize, and MySQL to manage warehouse and staged home inventory data."}

                      tags={["tag1", "tag2"]}
                      link={"https://h2mstaging.com/"}
                    />
                  </ol>
                </section>
                <section
                  id={'CONTACT'}
                  ref={(el) => (sectionRefs.current['CONTACT'] = el)}
                  className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                >
                  <ContactForm/>
                </section>


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
