import clsx from "clsx";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface PacmanProps {
    size: "lg" | "md";
}

export function Pacman(props: PacmanProps) {
    const eyeRef = useRef(null);
    const mouthRef = useRef(null);

    useEffect(() => {
        const eye = eyeRef.current;
        const mouth = mouthRef.current;

        gsap.set([eye, mouth], { visibility: "visible" });

        const eatAnimation = gsap.to(mouth, {
            keyframes: [
                {
                    clipPath: "polygon(100% 74%, 44% 48%, 100% 21%)",
                    duration: 0,
                },
                {
                    clipPath: "polygon(100% 60%, 44% 48%, 100% 40%)",
                    duration: 0.25,
                },
                {
                    clipPath: "polygon(100% 50%, 44% 48%, 100% 50%)",
                    duration: 0.5,
                },
                {
                    clipPath: "polygon(100% 59%, 44% 48%, 100% 35%)",
                    duration: 0.25,
                },
                {
                    clipPath: "polygon(100% 74%, 44% 48%, 100% 21%)",
                    duration: 0.25,
                },
            ],
            repeat: -1,
            ease: "power1.inOut",
        });
        return () => {
            eatAnimation.kill();
        };
    }, []);

    return (
        <div>
            <div
                className={clsx(
                    props.size === "lg" ? "w-20 h-20" : "w-10 h-10",
                    " rounded-full bg-yellow-400 relative"
                )}
                style={{ marginTop: "20px", overflow: "hidden" }}
            >
                <div
                    ref={eyeRef}
                    className="absolute w-2 h-2 rounded-full bg-gray-800"
                    style={{ top: "10%", right: "30%" }}
                ></div>
                <div
                    ref={mouthRef}
                    className="absolute w-full h-full bg-black"
                ></div>
            </div>
        </div>
    );
}

export function ReversePacman(props: PacmanProps) {
    const eyeRef = useRef(null);
    const mouthRef = useRef(null);

    useEffect(() => {
        const eye = eyeRef.current;
        const mouth = mouthRef.current;

        gsap.set([eye, mouth], { visibility: "visible" });

        const eatAnimation = gsap.to(mouth, {
            keyframes: [
                { clipPath: "polygon(0 74%, 44% 48%, 0 21%)", duration: 0 },
                { clipPath: "polygon(0 60%, 44% 48%, 0% 40%)", duration: 0.25 },
                { clipPath: "polygon(0 50%, 44% 48%, 0% 50%)", duration: 0.5 },
                { clipPath: "polygon(0 59%, 44% 48%, 0% 35%)", duration: 0.25 },
                { clipPath: "polygon(0 74%, 44% 48%, 0% 21%)", duration: 0.25 },
            ],
            repeat: -1,
            ease: "power1.inOut",
        });
        return () => {
            eatAnimation.kill();
        };
    }, []);

    return (
        <div>
            <div
                className={clsx(
                    props.size === "lg" ? "w-20 h-20" : "w-10 h-10",
                    " rounded-full bg-yellow-400 relative"
                )}
                style={{ marginTop: "20px", overflow: "hidden" }}
            >
                <div
                    ref={eyeRef}
                    className="absolute w-2 h-2 rounded-full bg-gray-800"
                    style={{ top: "10%", left: "30%" }}
                ></div>
                <div
                    ref={mouthRef}
                    className="absolute w-full h-full bg-black"
                ></div>
            </div>
        </div>
    );
}
