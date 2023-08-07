import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
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
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-1MZZMNKPYF"
                />
                <Script
                    dangerouslySetInnerHTML={{
                        __html: ` window.dataLayer = window.dataLayer || []
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());
              
                gtag('config', 'G-1MZZMNKPYF')`,
                    }}
                />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
