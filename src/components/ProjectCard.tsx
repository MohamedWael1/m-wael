import Image from "next/image";
import Link from "next/link";
import { BsCodeSlash } from "react-icons/bs";
import { LuExternalLink } from "react-icons/lu";
import clsx from "clsx";
import { StyleHTMLAttributes } from "react";

interface ProjectCardProps {
    img: string;
    projectLink: string;
    githubLink: string;
    index: number;
    title: string;
    description: string;
    techStack: string[];
}


export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className="w-[350px] md:w-[600px] shadow-xl rounded-md text-primary select-none border-2 bg-slate-900 border-slate-700 relative min-h-[400px]">
            <div className="shadow-md text-center py-3 mx-4 flex justify-center -translate-y-1/2  border-2 bg-slate-900 border-slate-700">
                {props.title}
            </div>

            <main>
                <div className={clsx("flex gap-4  p-2 md:p-6")}>
                    <div>
                        <Link href={props.githubLink} target="_blank">
                            <BsCodeSlash />
                        </Link>
                    </div>
                    <div>
                        <Link href={props.projectLink} target="_blank">
                            <LuExternalLink />
                        </Link>
                    </div>
                </div>

                <div className={clsx("px-4 text-sm ")}>{props.description}</div>

                <ul className="grid p-4" style={{
                    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                }}>
                    {props.techStack.map((tech, index) => (
                        <li
                            key={index}
                            className={clsx(
                                "text-xs px-4 py-2",
                            )}
                        >
                            {tech}
                        </li>
                    ))}
                </ul>

            </main>

            <div
                className={clsx(
                    props.index % 2 === 0
                        ? "md:translate-x-3/4"
                        : "md:-translate-x-2/4",
                    "absolute -bottom-1/3 sm:-bottom-2/3  md:-bottom-1/2  -translate-y-1/2"
                )}
            >
                <Link href={props.projectLink} target="_blank">
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
        </div>
    );
}
