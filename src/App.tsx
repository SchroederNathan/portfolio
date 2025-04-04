import { useEffect, useRef, useState } from "react";
import "./App.css";
import { ReactTyped } from "react-typed";
import { Socials, SocialsHorizontal } from "./components/Socials";
import Background from "./components/ui/Background";
import { HeroHighlight } from "./components/ui/highlight";
import Education from "./components/sections/Education";
import Work from "./components/sections/Work";
import Project from "./components/sections/projects/Project";
import { ContactForm } from "./components/sections/contact/ContactForm";
import { line, lineActive, link } from "./Helpers";
import { ProjectData } from "./components/sections/projects/ProjectData";
import ProjectDetail from "./components/sections/projects/ProjectDetail";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const sections = ["ABOUT", "PROJECTS", "EXPERIENCE", "CONTACT"];

function App() {
  const [mainContent, setMainContent] = useState(null);

  const [activeSection, setActiveSection] = useState("ABOUT");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    let observer: IntersectionObserver;
    if (mainContent === null) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust the threshold as needed
      };

      observer = new IntersectionObserver((entries) => {
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
    } else {
      setActiveSection("PROJECTS");
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [mainContent]);

  useEffect(() => {
    if (mainContent !== null) {
      document.getElementById("detail")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [mainContent]);

  //onBackClicked
  const onBackClicked = () => {
    setMainContent(null);
    console.log("Back button clicked");
  };

  // Callback function to handle clicks on projects
  const handleItemClick = (id: any) => {
    setMainContent(id);

    console.log("Selected item:", id);
  };

  // Function to handle navigation item clicks
  const handleNavClick = (section: string) => {
    setMainContent(null);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroHighlight>
        <div className="w-screen h-screen overflow-y-auto scroll-smooth ">
          <div className="mx-auto min-h-screen max-w-screen-xl px-12 py-24 md:ps-28 sm:pe-12 sm:py-12 md:px-24 md:py-20 lg:px-24 lg:py-0 ">
            <div className="lg:flex lg:justify-between lg:gap-4 ">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <div className="my-auto">
                  <p className=" text-xl max-sm:text-lg italic font-source-code-pro bg-gradient-to-tr from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent text-left">
                    Hi, My Name is
                  </p>
                  <h1 className="mt-3 mb-3 font-semibold text-white text-7xl max-sm:text-6xl text-left">
                    Nathan
                    <br /> Schroeder.
                  </h1>
                  <p className="text-4xl max-sm:text-3xl mb-5 text-white italic font-source-code-pro text-left">
                    <ReactTyped
                      strings={["Software Developer."]}
                      typeSpeed={100}
                    />
                  </p>
                  <SocialsHorizontal />
                  <a href="/nathan-schroeder-cv.pdf" download>
                    <button className="relative  h-12 overflow-hidden rounded-lg p-[1px] hidden lg:block md:block">
                      <span className="absolute inset-[-1000%] animate-[spin_4.6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#bfdbfe_0%,#3b82f6_50%,#E2CBFF_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-custom-dark px-3 py-1 text-sm font-medium text-mtext-white backdrop-blur-3xl">
                        Download CV
                      </span>
                    </button>
                  </a>
                  <nav className="mt-16 hidden lg:block">
                    <ol className="list-none">
                      {sections.map((section) =>
                        section === activeSection
                          ? lineActive(section, () => handleNavClick(section))
                          : line(section, () => handleNavClick(section))
                      )}
                    </ol>
                  </nav>
                </div>
              </header>

              <main className="pt-12 lg:pt-24 md:pt-24 lg:w-1/2 lg:py-24 ">
                {mainContent == null ? (
                  <>
                    <section
                      id={"ABOUT"}
                      ref={(el) => (sectionRefs.current["ABOUT"] = el)}
                      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                    >
                      <p className="text-mtext-white mb-8 font-bold text-xl">
                        About
                      </p>
                      <p className="text-mtext-white">
                        Welcome to my portfolio! I'm a software developer and UI
                        designer. I specialize in creating user-friendly,
                        scalable applications that solve real-world problems.
                        <br />
                        <br />
                        I ensure that every project I work on is both visually
                        appealing and highly functional. I enjoy collaborating
                        with others to bring creative ideas to life through
                        powerful applications.
                        <br />
                        <br />
                        Take a look around to explore my projects. I’m always
                        excited to take on new challenges and work on innovative
                        solutions that can make a difference!
                      </p>
                    </section>
                    <section
                      id={"PROJECTS"}
                      ref={(el) => (sectionRefs.current["PROJECTS"] = el)}
                      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                    >
                      <p className="text-mtext-white mb-8 font-bold text-xl">
                        Projects
                      </p>
                      <ol className="group/list">
                        {ProjectData.map((project, index) => (
                          <Project
                            onItemClick={handleItemClick}
                            id={index}
                            key={index}
                            image={project.images[0]}
                            name={project.name}
                            description={project.description[0]}
                            tags={project.tags}
                            links={project.link}
                          />
                        ))}
                      </ol>
                    </section>

                    <section
                      id={"EXPERIENCE"}
                      ref={(el) => (sectionRefs.current["EXPERIENCE"] = el)}
                      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                    >
                      <p className="text-mtext-white mb-8 font-bold text-xl">
                        Experience
                      </p>
                      <ol className="group/list ">
                        <Education
                          date={"2020 - 2024"}
                          program={"Mobile Applications Development"}
                          school={"St. Clair College"}
                          link={
                            "https://www.stclaircollege.ca/programs/mobile-applications-development"
                          }
                          description="In this program I learned to develop, test, and deploy a variety of native mobile and web applications for multiple platforms while also designing, modeling, implementing and maintain databases within. I also learned how to design user-friendly prototypes inside these applications using tools like Figma. This program also gave me plenty of opportunity to work and lead teams to accomplish larger scale projects. "
                        />

                        <Work
                          date={"2025 - Present"}
                          position={"Mobile App Developer"}
                          company={"Red Piston"}
                          description={
                            ""
                          }
                          link={"https://redpiston.com/"}
                        />
                      </ol>
                    </section>

                    <section
                      id={"CONTACT"}
                      ref={(el) => (sectionRefs.current["CONTACT"] = el)}
                      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 "
                    >
                      <ContactForm />
                    </section>
                  </>
                ) : (
                  <ProjectDetail
                    id={mainContent}
                    onBackClicked={onBackClicked}
                  />
                )}

                <p className="text-mtext-white/50 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 ">
                  Portfolio designed and developed by me using{" "}
                  {link("https://figma.com", "Figma")} and{" "}
                  {link("https://code.visualstudio.com/", "Visual Studio Code")}
                  . Built with {link("https://react.dev", "React")},{" "}
                  {link("https://www.typescriptlang.org/", "Typescript")},{" "}
                  {link("https://vitejs.dev/", "Vite")} and{" "}
                  {link("https://tailwindcss.com/", "Tailwind CSS")}, and
                  deployed on {link("https://vercel.com", "Vercel")}.
                </p>
              </main>
            </div>
          </div>
          <Background />
          <Socials />
        </div>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </HeroHighlight>
    </>
  );
}

export default App;
