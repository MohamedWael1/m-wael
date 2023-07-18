import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import { gsap } from "gsap";
import { Inter } from "next/font/google";
import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="max-w-4xl mx-auto my-28">
                <Hero />
                <TechStack />
        </div>
    );
}





