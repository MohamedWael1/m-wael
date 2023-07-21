import Hero from "@/components/Hero";
import { Pacman } from "@/components/Pacman";
import ProjectCard from "@/components/ProjectCard";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Inter } from "next/font/google";
import { useRef, useState } from "react";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
   
    return (
        <div className="px-4 md:p-20 select-none">
            <Projects />

        </div>
    );
}
