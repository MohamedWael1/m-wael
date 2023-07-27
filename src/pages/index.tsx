import About from "@/components/About";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import { Inter } from "next/font/google";
import { useEffect, useReducer } from "react";

const inter = Inter({ subsets: ["latin"] });

function ResponsiveTechStack() {
    const [key, forceUpdate] = useReducer((x) => x + 1, 0);

    useEffect(() => {
        const handleResize = () => forceUpdate();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <TechStack key={key} />
    )
}

export default function Home() {
    return (
        <div className={inter.className}>
            <Layout>
                <Hero />
                <About />
                <ResponsiveTechStack />
                <Projects />
            </Layout>
        </div>
    );
}
