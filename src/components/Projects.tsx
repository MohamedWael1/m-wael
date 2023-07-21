import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import clsx from "clsx";
import { Pacman, ReversePacman } from "./Pacman";

const Projects_INFO = [
    {
        img: "/imgs/test-creator-v2.png",
        projectLink: "https:test-creator-v2.vercel.app",
        githubLink: "https://github.com/MohamedWael1/test-creator-v2",
        title: "Test Creator v2",
        description: "A website that allows you to create tests and share them with your friends.",
    },
    {
        img: "/imgs/test-creator-v2.png",
        projectLink: "https:test-creator-v2.vercel.app",
        githubLink: "https://github.com/MohamedWael1/test-creator-v2",
        title: "Test Creator v2",
        description: "A website that allows you to create tests and share them with your friends.",
    },
    {
        img: "/imgs/test-creator-v2.png",
        projectLink: "https:test-creator-v2.vercel.app",
        githubLink: "https://github.com/MohamedWael1/test-creator-v2",
        title: "Test Creator v2",
        description: "A website that allows you to create tests and share them with your friends.",
    },
];

function Projects() {
    const [isReversed, setIsReversed] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const pacman = useRef<HTMLDivElement>(null);
    const projects = useRef<HTMLDivElement[]>([]);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: projects.current,
                scrub: 1,
                start: "top 100",
                snap: 1 / (projects.current.length + 1),
            },
        });

        tl.to(pacman.current, {
            x: "70vw",
        })
            .to(pacman.current, {
                y: ref.current!.getBoundingClientRect().y + 20,
                onStart: () => {
                    setIsReversed(true);
                }
            })
            .to(pacman.current, {
                x: 0,
            })
            .to(pacman.current, {
                y: ref.current!.getBoundingClientRect().y * 2 + 60,
                onStart: () => {
                    setIsReversed(false);
                }
            })
            .to(pacman.current, {
                x: "70vw",
            })
            .to(pacman.current, {
                y: ref.current!.getBoundingClientRect().y * 3 + 100,
                onStart: () => {
                    setIsReversed(true);
                }
            })
            .to(pacman.current, {
                x: 0,
                onComplete: () => {
                    setIsReversed(false);
                }
            });
    }, []);
    return (
        <div ref={ref} className="h-screen">
            <div ref={pacman}>
                {
                    isReversed ? <ReversePacman size="md" /> : <Pacman size="md" />
                }
            </div>
            {Projects_INFO.map((project, index) => (
                <div
                    key={index}
                    className={clsx(
                        index % 2 === 0 ? "flex" : "flex md:flex-row-reverse",
                        "py-20 justify-center md:justify-between"
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
                    />
                </div>
            ))}
        </div>
    );
}

export default Projects;
