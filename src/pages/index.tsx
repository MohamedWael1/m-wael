import About from "@/components/About";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className={inter.className}>
            <Layout>
                <Hero />
                <About />
                <TechStack />
                <Projects />
            </Layout>
        </div>
    );
}
