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
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className="w-[350px] md:w-[600px] shadow-xl rounded-md text-primary select-none border-2 bg-slate-900 border-slate-700 relative max-h-[400px] min-h-[400px]">
            <div
                className={clsx(
                    "shadow-md text-center py-3 mx-4 flex justify-center -translate-y-1/2  border-2 bg-slate-900 border-slate-700"
                )}
            >
                {props.title}
            </div>
            <div
                className={clsx(
                    props.index % 2 === 0 ? "" : "justify-end",
                    "flex gap-4  p-2 md:p-6"
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
                        ? "md:translate-x-3/4 md:-translate-y-[10%]"
                        : "md:-translate-x-2/4 md:-translate-y-[10%]",
                    " mx-auto absolute translate-y-1/2"
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
