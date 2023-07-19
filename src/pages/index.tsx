import Hero from "@/components/Hero";
import { Pacman } from "@/components/Pacman";
import ProjectCard from "@/components/ProjectCard";
import TechStack from "@/components/TechStack";
import { PROJECTS } from "@/constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Inter } from "next/font/google";
import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const container = useRef<HTMLDivElement>(null);
    const panels = useRef<HTMLDivElement[]>([]);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(panels.current, {
            xPercent: -100 * (panels.current.length - 1),
            scrollTrigger: {
                trigger: container.current!,
                pin: true,
                scrub: true,
            },
        });
    });
    return (
        <div>
            <Hero />
            <TechStack />
        </div>
        // <div ref={container}>
        //     <div className="h-screen w-[400%] flex flex-nowrap">
        //         <div className="absolute z-10 left-10">
        //             <Pacman size="lg" />
        //         </div>
        //         <section
        //             className="bg-orange-500 w-full"
        //             ref={(el: HTMLDivElement) => (panels.current[0] = el)}
        //         >
        //             One
        //         </section>

        //         <section
        //             className="bg-red-500 w-full"
        //             ref={(el: HTMLDivElement) => (panels.current[1] = el)}
        //         >
        //             Two
        //         </section>

        //         <section
        //             className="bg-blue-500 w-full"
        //             ref={(el: HTMLDivElement) => (panels.current[2] = el)}
        //         >
        //             Three
        //         </section>

        //         <section
        //             className="bg-green-500 w-full"
        //             ref={(el: HTMLDivElement) => (panels.current[3] = el)}
        //         >
        //             Four
        //         </section>
        //     </div>
        // </div>
    );
}
