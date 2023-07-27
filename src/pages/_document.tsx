import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>Mohamed Wael</title>
                <meta name="author" content="Mohamed Wael" />
                <meta
                    name="description"
                    content="Explore Mohamed Wael's impressive software developer portfolio showcasing projects, skills, and expertise in web development."
                />
                <meta
                    name="keywords"
                    content="software developer, web development, programming, projects, portfolio"
                />

                <meta property="og:title" content="Mohamed Wael" />
                <meta property="og:description" content="Explore Mohamed Wael's impressive software developer portfolio showcasing projects, skills, and expertise in web development." />
                <meta property="og:image" content="/imgs/personal-pic.jpg" />
                <meta property="og:url" content="https://m-wael.vercel.app/" />
                <meta property="og:site_name" content="Mohamed Wael" />
                <meta name="twitter:card" content="🚀 Welcome! I'm Mohamed, a passionate full-stack web developer with expertise in JavaScript, Typescript, React, and Node.js. Explore my projects and witness the power of intuitive, user-friendly applications. Let's build something amazing together! #webdev #portfolio" />
                <meta name="twitter:image:alt" content="Portrait of  Mohamed Wael, software developer" />
                <link
                    href="https://db.onlinewebfonts.com/c/4c19fc875e7ba1e6831129de3ab5ac0b?family=Retro+Gaming"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Noto+Sans+Arabic:wght@100;200;300;400;500;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
