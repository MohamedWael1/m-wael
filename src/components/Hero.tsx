import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Pacman, ReversePacman } from "./Pacman";
import Typewriter from "typewriter-effect";

function Hero() {
    const [isCompleted, setIsCompleted] = useState(false);
    const comp = useRef();
    const ref = useRef<Record<string, HTMLDivElement>>({});
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(ref.current.ghost, {
                x: 1000,
                y: 0,
                duration: 4,
                onComplete: () => {
                    setIsCompleted(true);
                },
            });
            gsap.to(ref.current.pacman, {
                x: 1000,
                y: 0,
                duration: 5,
            });

            gsap.to(ref.current.ghost, {
                x: -1000,
                duration: 4,
                delay: 4,
                onComplete: () => {
                    setIsCompleted(false);
                },
            });
            gsap.to(ref.current.pacman, {
                x: -1000,
                y: 90,
                duration: 4,
                delay: 5,
            });
        }, comp);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <div className="p-4 overflow-hidden">
            <main className="text-primary w-full space-y-4">
                <div className="text-3xl md:text-4xl text-center font-semibold">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Hello there, I'm Pacman")
                                .pauseFor(200)
                                .deleteChars(6)
                                .typeString("Mohamed Wael")
                                .start();
                        }}
                    />
                </div>
                <div className="text-center text-lg">
                    A passionate developer who loves building things with code.
                    I spend my time building pixel websites, learning
                    new technologies and solving problems.
                </div>
            </main>
            <div className="flex items-center">
                <div ref={(el: HTMLDivElement) => (ref.current.pacman = el)}>
                    {isCompleted ? (
                        <ReversePacman size="lg" />
                    ) : (
                        <Pacman size="lg" />
                    )}
                </div>
                <div ref={(el: HTMLDivElement) => (ref.current.ghost = el)}>
                    <Image
                        src="/imgs/ghost.png"
                        width={60}
                        height={60}
                        alt="ghost"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
