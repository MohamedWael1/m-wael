import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import clsx from "clsx";
import { Pacman, ReversePacman } from "./Pacman";

gsap.registerPlugin(ScrollTrigger);

const Projects_INFO = [
    {
        img: "/imgs/test-creator-v1.png",
        projectLink: "https://test-creator.vercel.app/",
        githubLink: "https://github.com/MohamedWael1/Test-Creator",
        title: "Test Creator v1",
        description:
            "A Next.js web app with MongoDB, Express, Chakra UI, and React Hook Form. Simplifies test creation and management with real-time updates and user authentication. Scalable and efficient.",
        techStack: [
            "Next.js",
            "Javascript",
            "Chakra",
            "React-Query",
            "Mongoose",
            "MongoDB",
            "Express",
            "Joy",
            "React-Hook-Form",
        ],
    },
    {
        img: "/imgs/test-creator-v2.png",
        projectLink: "https:test-creator-v2.vercel.app",
        githubLink: "https://github.com/MohamedWael1/test-creator-v2",
        title: "Test Creator v2",
        description:
            "A cutting-edge Next.js API powered by MySQL, Prisma, React Query, and Tailwind CSS. Leveraging TypeScript, it offers superior scalability and maintainability.",
        techStack: [
            "Next.js",
            "Typescript",
            "TailwindCSS",
            "Planet-Scale",
            "mySql",
            "Prisma",
            "React-Query",
            "Zod",
        ],
    },
    {
        img: "/imgs/free-cell.png",
        projectLink: "https://freecell-ts.vercel.app/",
        githubLink: "https://github.com/MohamedWael1/freecell-ts",
        title: "FreeCell",
        description:
            "The FreeCell Project is a TypeScript web app created with Next.js and Tailwind CSS. It showcases the use of SOLID principles, ensuring a clean and flexible codebase. Enjoy a classic game of FreeCell with an adaptable architecture.",
        techStack: ["Nextjs", "Typescript", "TailwindCSS"],
    },
    {
        img: "/imgs/simon-game.png",
        projectLink: "https://simon-game-ts.vercel.app/",
        githubLink: "https://github.com/MohamedWael1/simon-game-ts",
        title: "Simon's Game",
        description:
            "A modern web-based memory challenge. Test your memory skills with colors and sounds, track scores, and enjoy the nostalgic fun.",
        techStack: ["Next.js", "Typescript", "TailwindCSS"],
    },
];

function Projects() {
    const [isReversed, setIsReversed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const pacman = useRef<HTMLDivElement>(null);
    const projects = useRef<HTMLDivElement[]>([]);
    useEffect(() => {
        if (window.innerWidth < 800) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }

        const handleResize = () => {
            if (window.innerWidth < 800) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        window.addEventListener("resize", handleResize);

        if (isMobile) {
            return () => window.removeEventListener("resize", handleResize);
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: projects.current[0],
                scrub: 2,
                start: "top 100",
                end: "+=2000px",
            },
        });

        tl.to(pacman.current, {
            x: "70vw",
        })
            .to(pacman.current, {
                y: projects.current[0].clientHeight,
                onStart: () => {
                    setIsReversed(true);
                },
            })
            .to(pacman.current, {
                x: 0,
            })
            .to(pacman.current, {
                y: projects.current[1].clientHeight * 2,
                onStart: () => {
                    setIsReversed(false);
                },
            })
            .to(pacman.current, {
                x: "70vw",
            })
            .to(pacman.current, {
                y: projects.current[2].clientHeight * 3,
                onStart: () => {
                    setIsReversed(true);
                },
            })
            .to(pacman.current, {
                x: 0,
            })
            .to(pacman.current, {
                y: projects.current[3].clientHeight * 4,
                onStart: () => {
                    setIsReversed(false);
                },
            })
            .to(pacman.current, {
                x: "70vw",
            });

        return () => {
            window.removeEventListener("resize", handleResize);
            tl.kill();
        };
    }, [isMobile]);
    return (
        <div ref={ref} className=" py-20" id="projects">
            <h1 className="text-2xl font-bold text-primary mb-10">Projects</h1>
            {!isMobile && (
                <div ref={pacman}>
                    {isReversed ? (
                        <ReversePacman size="md" />
                    ) : (
                        <Pacman size="md" />
                    )}
                </div>
            )}

            {Projects_INFO.map((project, index) => (
                <div
                    key={index}
                    className={clsx(
                        index % 2 === 0 ? "flex" : "flex md:flex-row-reverse",
                        "py-32 justify-center md:justify-between"
                    )}
                    ref={(el: HTMLDivElement) => (projects.current[index] = el)}
                >
                    <ProjectCard
                        img={project.img}
                        projectLink={project.projectLink}
                        githubLink={project.githubLink}
                        index={index}
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                    />
                </div>
            ))}
        </div>
    );
}

export default Projects;
