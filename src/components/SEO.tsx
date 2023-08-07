import Head from "next/head";

function SEO() {
    return (
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
            <meta
                property="og:description"
                content="Explore Mohamed Wael's impressive software developer portfolio showcasing projects, skills, and expertise in web development."
            />
            <meta property="og:image" content="/imgs/website-screenshot.png" />
            <meta property="og:url" content="https://m-wael.vercel.app/" />
            <meta property="og:site_name" content="Mohamed Wael" />
            <meta
                name="twitter:card"
                content="🚀 Welcome! I'm Mohamed, a passionate full-stack web developer with expertise in JavaScript, Typescript, React, and Node.js. Explore my projects and witness the power of intuitive, user-friendly applications. Let's build something amazing together! #webdev #portfolio"
            />
            <meta
                name="twitter:image:alt"
                content="Portrait of  Mohamed Wael, software developer"
            />
        </Head>
    );
}

export default SEO;