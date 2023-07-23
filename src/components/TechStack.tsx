import { useEffect, useRef, useState } from "react";
import { Pacman, ReversePacman } from "./Pacman";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const techs = [
    {
        name: "TypeScript",
        logo: "/imgs/ts-logo.png",
    },
    {
        name: "JavaScript",
        logo: "/imgs/js-logo.png",
    },
    {
        name: "Node.js",
        logo: "/imgs/node-js-logo.png",
    },
    {
        name: "React",
        logo: "/imgs/react-logo.png",
    },
    {
        name: "Next.js",
        logo: "/imgs/next-js-logo.svg",
    },
    {
        name: "Express.js",
        logo: "/imgs/express-logo.png",
    },
    {
        name: "TailwindCSS",
        logo: "/imgs/tailwindcss-logo.svg",
    },

    {
        name: "Prisma",
        logo: "/imgs/prisma.svg",
    },
    {
        name: "PlanetScale",
        logo: "/imgs/planetscale-logo.svg",
    },
    {
        name: "MySQL",
        logo: "/imgs/mysql-logo.png",
    },
    {
        name: "MongoDB",
        logo: "/imgs/mongo-db-logo.png",
    },
    {
        name: "ReactQuery",
        logo: "/imgs/react-query-logo.svg",
    },
    {
        name: "GSAP",
        logo: "/imgs/gsap-logo.svg",
    },
];
gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
    const [isLastPosSmaller, setIsLastPosSmaller] = useState(false);
    const comparePos = (pos1: number, pos2: number) => {
        if (pos1 < pos2) {
            setIsLastPosSmaller(false);
        }
        if (pos1 > pos2) {
            setIsLastPosSmaller(true);
        }
    };
    const techStack = useRef<HTMLDivElement[]>([]);
    const techStackLogos = useRef<HTMLImageElement[]>([]);
    const ref = useRef<HTMLDivElement>(null);

    function animate(tl: gsap.core.Timeline) {
        tl.set(techStackLogos.current, {
            y: -32,
        })
            .set(ref.current, {
                x: 0,
                y: techStack.current[0].offsetTop - 40,
            })
            .to(ref.current, {
                x: techStack.current[0].offsetLeft - 10,
                y: techStack.current[0].offsetTop - 40,
            })
            .to(
                techStackLogos.current[0],
                {
                    opacity: 0,
                },
                ">"
            )
            .to(
                techStack.current[0],
                {
                    opacity: 1,
                },
                ">"
            )
            .to(ref.current, {
                x: techStack.current[1].offsetLeft - 10,
                y: techStack.current[1].offsetTop - 40,
                onStart: () => {
                    comparePos(
                        techStack.current[0].offsetLeft,
                        techStack.current[1].offsetLeft
                    );
                },
            })
            .to(
                techStackLogos.current[1],
                {
                    opacity: 0,
                },
                ">"
            )
            .to(
                techStack.current[1],
                {
                    opacity: 1,
                },
                ">"
            )

            .to(ref.current, {
                x: techStack.current[2].offsetLeft - 10,
                y: techStack.current[2].offsetTop - 40,
                onStart: () => {
                    comparePos(
                        techStack.current[1].offsetLeft,
                        techStack.current[2].offsetLeft
                    );
                },
            })
            .to(
                techStackLogos.current[2],
                {
                    opacity: 0,
                },
                ">"
            )
            .to(
                techStack.current[2],
                {
                    opacity: 1,
                },
                ">"
            )
            .to(ref.current, {
                x: techStack.current[3].offsetLeft - 10,
                y: techStack.current[3].offsetTop - 40,
                onStart: () => {
                    comparePos(
                        techStack.current[2].offsetLeft,
                        techStack.current[3].offsetLeft
                    );
                },
            })
            .to(
                techStackLogos.current[3],
                {
                    opacity: 0,
                },
                ">"
            )
            .to(
                techStack.current[3],
                {
                    opacity: 1,
                },
                ">"
            )
            .to(ref.current, {
                x: techStack.current[4].offsetLeft - 10,
                y: techStack.current[4].offsetTop - 40,
                onStart: () => {
                    comparePos(
                        techStack.current[3].offsetLeft,
                        techStack.current[4].offsetLeft
                    );
                },
            })
            .to(
                techStackLogos.current[4],
                {
                    opacity: 0,
                },
                ">"
            )
            .to(
                techStack.current[4],
                {
                    opacity: 1,
                },
                ">"
            )
            .to(ref.current, {
                x: techStack.current[5].offsetLeft - 10,
                y: techStack.current[5].offsetTop - 40,
                onStart: () => {
                    comparePos(
                        techStack.current[4].offsetLeft,
                        techStack.current[5].offsetLeft
                    );
                },
            })
            .to(
                techStackLogos.current[5],
                {
                    opacity: 0,
                },
                ">"
            )
            .to(
                techStack.current[5],
                {
                    opacity: 1,
                },
                ">"
            )

            .to(ref.current, {
                x: techStack.current[6].offsetLeft - 10,
                y: techStack.current[6].offsetTop - 40,
                onStart: () => {
                    comparePos(
                        techStack.current[5].offsetLeft,
                        techStack.current[6].offsetLeft
                    );
                },
            })
            .to(
                techStackLogos.current[6],
                {
                    opacity: 0,
                },
                ">"
            )
            .to(
                techStack.current[6],
                {
                    opacity: 1,
                },
                ">"
            )
            .to(ref.current, {
                x: techStack.current[7].offsetLeft - 10,
                y: techStack.current[7].offsetTop - 40,
                onStart: () => {
                    comparePos(
                        techStack.current[6].offsetLeft,
                        techStack.current[7].offsetLeft
                    );
                },
            })
            .to(
                techStackLogos.current[7],
                {
                    opacity: 0,
                },
                ">"
            )
            .to(
                techStack.current[7],
                {
                    opacity: 1,
                },
                ">"
            )
            .to(ref.current, {
                x: techStack.current[8].offsetLeft - 10,
                y: techStack.current[8].offsetTop - 40,
                onStart: () => {
                    comparePos(
                        techStack.current[7].offsetLeft,
                        techStack.current[8].offsetLeft
                    );
                },
            })
            .to(
                techStackLogos.current[8],
                {
                    opacity: 0,
                },
                ">"
            )
            .to(
                techStack.current[8],
                {
                    opacity: 1,
                },
                ">"
            )
            .to(ref.current, {
                x: techStack.current[9].offsetLeft - 10,
                y: techStack.current[9].offsetTop - 40,
                onStart: () => {
                    comparePos(
                        techStack.current[8].offsetLeft,
                        techStack.current[9].offsetLeft
                    );
                },
            })
            .to(
                techStackLogos.current[9],
                {
                    opacity: 0,
                },
                ">"
            )
            .to(
                techStack.current[9],
                {
                    opacity: 1,
                },
                ">"
            )
            .to(ref.current, {
                x: techStack.current[10].offsetLeft - 10,
                y: techStack.current[10].offsetTop - 40,
                onStart: () => {
                    comparePos(
                        techStack.current[9].offsetLeft,
                        techStack.current[10].offsetLeft
                    );
                },
            })
            .to(
                techStackLogos.current[10],
                {
                    opacity: 0,
                },
                ">"
            )
            .to(
                techStack.current[10],
                {
                    opacity: 1,
                },
                ">"
            )
            .to(ref.current, {
                x: techStack.current[11].offsetLeft - 10,
                y: techStack.current[11].offsetTop - 40,
                onStart: () => {
                    comparePos(
                        techStack.current[10].offsetLeft,
                        techStack.current[11].offsetLeft
                    );
                },
            })
            .to(
                techStackLogos.current[11],
                {
                    opacity: 0,
                },
                ">"
            )
            .to(
                techStack.current[11],
                {
                    opacity: 1,
                },
                ">"
            )
            .to(ref.current, {
                x: techStack.current[12].offsetLeft - 10,
                y: techStack.current[12].offsetTop - 40,
                onStart: () => {
                    comparePos(
                        techStack.current[11].offsetLeft,
                        techStack.current[12].offsetLeft
                    );
                },
            })
            .to(
                techStackLogos.current[12],
                {
                    opacity: 0,
                },
                ">"
            )
            .to(
                techStack.current[12],
                {
                    opacity: 1,
                },
                ">"
            )
            .to(ref.current, {
                opacity: 0,
            });
    }

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ref.current,
            },
        });
        animate(tl);

        const handleResize = () => {
            tl.clear();
            animate(tl);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            tl.kill();
            window.removeEventListener("resize", handleResize);
        };
    },[]);

    return (
        <div id="tech-stack">
            <h1 className="text-2xl font-bold text-primary mb-10">
                Skills & Tools
            </h1>
            <div ref={ref} className="z-10 absolute">
                {isLastPosSmaller ? (
                    <ReversePacman size="md" />
                ) : (
                    <Pacman size="md" />
                )}
            </div>

            <div
                className="grid text-primary text-center place-items-center   text-[14px]  gap-2 relative"
                style={{
                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(100px, 1fr))",
                }}
            >
                {techs.map((tech, index) => (
                    <div key={index}>
                        <div
                            ref={(el: HTMLDivElement) => {
                                techStack.current[index] = el;
                            }}
                            className="opacity-0"
                        >
                            {tech.name}
                        </div>

                        <div
                            ref={(el: HTMLImageElement) => {
                                techStackLogos.current[index] = el;
                            }}
                            className="opacity-1"
                        >
                            <Image
                                src={tech.logo}
                                height={38}
                                width={38}
                                alt={tech.name}
                                className="rounded-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
