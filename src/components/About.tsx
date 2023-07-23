import Image from "next/image";

function About() {
    return (
        <div className="text-primary py-20" id="about">
            <h1 className="text-2xl font-bold text-primary mb-10">About Me</h1>
            <main className="text-lg">
                <div className="pb-6">
                    I am Mohamed a 22 years old teen based in Alexandria, Egypt{" "}
                    <Image
                        src="/imgs/pyramids1.png"
                        width={40}
                        height={40}
                        alt="pyramids"
                        draggable={false}
                        className="inline"
                    />
                    . I am a fullstack web developer, who builds fast responsive
                    web apps. I am currently studying at faculty of veterinary
                    medicine{" "}
                    <Image
                        src="/imgs/health.png"
                        height={40}
                        width={40}
                        alt="health"
                        className="inline"
                    />{" "}
                    <Image
                        src="/imgs/veterinary.png"
                        height={40}
                        width={40}
                        alt="health"
                        className="inline"
                    />
                    , Alexandria University.
                </div>
                <div className="pb-6">
                    So, you might be asking you are a vet how did you end up
                    becoming a software developer? I was very curious about
                    learning coding, specially when seeing how coders impact
                    today{"'"}s life. Going through dozens of articles about coding,
                    I started learning HMTL and CSS.
                </div>
                <div className="pb-6">
                    But magic did happen after learning JS, How I was able to
                    create apps, solve problems that was imposible for humans to
                    solve. It was just a GREAT feeling. I love solving problems,
                    so I spend a lot of time solving problems on Codewars.
                </div>
                <div className="pb-6">
                    I spend my time on a new side projects and reading about
                    software patterns and architectures such as DDD and Clean
                    Architecture.
                </div>
            </main>
        </div>
    );
}

export default About;
