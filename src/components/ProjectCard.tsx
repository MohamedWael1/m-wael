import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Pacman, ReversePacman } from "./Pacman";
import { gsap } from "gsap";
import Link from "next/link";

interface Tech {
    name: string;
    img: string;
}

interface ProjectCardProps {
    img: string;
    title: string;
    techs: Tech[];
    link: string;
}

export default function ProjectCard(props: ProjectCardProps) {
    const [isLastPosSmaller, setIsLastPosSmaller] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const pacman = useRef<HTMLDivElement>(null);
    const parent = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handlePacmanMove = (e: KeyboardEvent) => {
            const pacmanEl = pacman.current;

            const tl = gsap.timeline();

           props.techs.forEach((tech,i) => {
                
           })

            switch (e.key) {
                case "ArrowUp":
                    if (!pacmanEl) return;
                    if (
                        pacmanEl?.getBoundingClientRect().top <
                        parent.current?.getBoundingClientRect().top!
                    )
                        return;
                    tl.to(pacmanEl, { y: "-=30" });
                    break;
                case "ArrowDown":
                    if (!pacmanEl) return;
                    if (
                        pacmanEl?.getBoundingClientRect().top + 90 >
                        parent.current?.getBoundingClientRect().height!
                    )
                        return;
                    tl.to(pacmanEl, { y: "+=30" });
                    break;
                case "ArrowLeft":
                    if (!pacmanEl) return;
                    if (
                        pacmanEl?.getBoundingClientRect().left - 30 <
                        parent.current?.getBoundingClientRect().left!
                    )
                        return;
                    setIsLastPosSmaller(true);
                    tl.to(pacmanEl, { x: "-=30" });
                    break;
                case "ArrowRight":
                    if (!pacmanEl) return;
                    if (
                        pacmanEl?.getBoundingClientRect().left - 250 >
                        parent.current?.getBoundingClientRect().width!
                    )
                        return;
                    setIsLastPosSmaller(false);
                    tl.to(pacmanEl, { x: "+=30" });
                    break;
            }
        };

        window.addEventListener("keydown", handlePacmanMove);
        return () => {
            window.removeEventListener("keydown", handlePacmanMove);
        };
    });

    return (
        <div
            className="relative  h-[300px] w-[400px] md:w-[600px] shadow-xl rounded-sm text-primary"
            ref={parent}
        >
            <div className="z-10 absolute  -translate-x-1/2 -bottom-1/3 left-1/2  w-4/5">
                <Link href={props.link} target="_blank">
                    <Image
                        src={props.img}
                        alt="Test Creator v2"
                        draggable={false}
                        width={400}
                        height={400}
                        className="shadow-2xl rounded-md"
                    />
                </Link>
            </div>

            <div className="z-10 absolute -translate-x-1/2 -top-4 left-1/2  w-3/6 h-8 rounded-md shadow-lg text-center">
                {props.title}
            </div>

            <div
                className="grid text-xs gap-3 p-6"
                style={{
                    gridTemplateColumns: "repeat(3, minmax(20px, 1fr))",
                }}
            >
                {props.techs.map((tech, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center justify-center"
                    >
                        <Image
                            src={tech.img}
                            alt={tech.name}
                            draggable={false}
                            width={20}
                            height={20}
                        />
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>

            {
                // isInitialized &&
                <div ref={pacman} className="absolute">
                    {isLastPosSmaller ? (
                        <ReversePacman size="md" />
                    ) : (
                        <Pacman size="md" />
                    )}
                </div>
            }
        </div>
    );
}
