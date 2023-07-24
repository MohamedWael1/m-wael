import Link from "next/link";
import { AiOutlineBars } from "react-icons/ai";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const NAV_LINKS = [
    {
        name: "About",
        href: "#about",
    },
    {
        name: "Tech Stack",
        href: "#tech-stack",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Contact",
        href: "#contact",
    },
];

function DesktopNavbar() {
    return (
        <nav className="w-full text-primary flex justify-between bg-slate-900  items-center text-lg select-none font-semibold mb-10">
            <div
                style={{
                    fontFamily:
                        "Gloria Hallelujah, cursive , Noto Sans Arabic, sans-serif",
                }}
            >
                Mohamed Wael
            </div>

            <ul className="flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.href}>
                        <li key={link.name} className="pr-10">
                            {link.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}

function MobileNavbar() {
    const [isOpened, setIsOpened] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const nav = useRef<HTMLUListElement>(null);
    useEffect(() => {
        const handleClose = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpened(false);
            }
        };
        document.addEventListener("keydown", handleClose);
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpened(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleClose);
        };
    }, [isOpened]);
    return (
        <nav
            className="w-full text-primary flex justify-between bg-slate-900  items-center text-lg select-none font-semibold mb-10 "
            ref={ref}
        >
            <div
                className="z-20"
                style={{
                    fontFamily:
                        "Gloria Hallelujah, cursive , Noto Sans Arabic, sans-serif",
                }}
            >
                Mohamed Wael
            </div>

            <div
                className="cursor-pointer z-50"
                onClick={() => setIsOpened(!isOpened)}
            >
                <HiBars3BottomRight className="h-8 w-8" />
            </div>
            <ul
                className={clsx(
                    isOpened ? " translate-x-0" : " -translate-x-full",
                    "transition-all flex flex-col z-10 px-6 w-3/4 sm:w-2/4 text-center justify-center fixed gap-4 top-0 left-0 h-full bg-slate-800 text-primary text-3xl font-semibold"
                )}
            >
                {NAV_LINKS.map((link) => (
                    <Link
                        href={link.href}
                        key={link.href}
                        onClick={() => setIsOpened(false)}
                    >
                        <li>{link.name}</li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}

function Footer() {
    return (
        <footer className="flex flex-col text-primary  items-center space-y-3 ">
            <span>
                Designed and developed by{" "}
                <strong
                    className="text-lg"
                    style={{
                        fontFamily:
                            "Gloria Hallelujah, cursive , Noto Sans Arabic, sans-serif",
                    }}
                >
                    Mohamed Wael
                </strong>
            </span>
            <span className="text-sm">
                Built with <strong>Next.js</strong>,{" "}
                <strong>TailwindCSS & GSAP</strong>
            </span>
            <span className="text-sm">
                <strong>mohwael00@gmail.com</strong>
            </span>
            <span>
                tel: <strong>+201016499566</strong>
            </span>

            <div className="flex space-x-4">
                <Link href="https://github.com/MohamedWael1" target="_blank">
                    <BsGithub className="h-6 w-6 cursor-pointer" />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/mohamed-wael-3b0187229/"
                    target="_blank"
                >
                    <BsLinkedin className="h-6 w-6 cursor-pointer" />
                </Link>
            </div>

            <span className="text-sm">
                Hosted on <strong>Vercel</strong>
            </span>
        </footer>
    );
}

interface LayoutProps {
    children: React.ReactNode;
}

function Layout(props: LayoutProps) {
    return (
        <div className="max-w-7xl mx-auto py-10 px-6">
            <div className="hidden md:block">
                <DesktopNavbar />
            </div>
            <div className="block md:hidden">
                <MobileNavbar />
            </div>
            <main className="select-none ">{props.children}</main>
                <Footer />
        </div>
    );
}

export default Layout;
