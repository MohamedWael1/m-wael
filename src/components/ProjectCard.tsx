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
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className="w-[300px] md:w-[600px]  shadow-xl rounded-md text-primary select-none border-2 border-slate-700">
            <div
                className={clsx(
                    "shadow-md text-center p-3 w-3/5 mx-auto -translate-y-1/4 border-2 bg-slate-900 border-slate-700"
                )}
            >
                {props.title}
            </div>
                <div
                    className={clsx(
                        props.index % 2 === 0 ? "" : "justify-end",
                        "flex gap-4 h-[100px] p-2 md:p-6"
                    )}
                >
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
                

            <div
                className={clsx(
                    props.index % 2 === 0
                        ? "md:translate-x-3/4 md:-translate-y-1/3"
                        : "md:-translate-x-2/4 md:-translate-y-1/3",
                    "w-4/5 mx-auto translate-y-1/2"
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
