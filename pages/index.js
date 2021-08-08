import Head from "next/head";
import fs from "fs";
import { useEffect } from "react";
export default function Home({ pages }) {
    useEffect(() => {
        console.log(`pages`, pages);
    }, [pages]);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Front End Challenges</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                <h1 className="text-6xl font-bold">Completed Challenges</h1>

                <p className="mt-3 text-2xl">Click on a card to view output</p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    {pages.map((page) => (
                        <a
                            href={page.url}
                            key={page.name}
                            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                        >
                            <h3 className="text-2xl font-bold">
                                {page.name} &rarr;
                            </h3>
                            {/* <p className="mt-4 text-xl">
                                Find in-depth information about Next.js features
                                and API.
                            </p> */}
                        </a>
                    ))}
                </div>
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                <a
                    className="flex items-center justify-center"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <img
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className="h-4 ml-2"
                    />
                </a>
            </footer>
        </div>
    );
}

export async function getServerSideProps() {
    const baseUrl = {
        development: "http://localhost:3000",
        production: "https://front-end-challenges-theta.vercel.app",
    }[process.env.NODE_ENV];
    console.log(`process.env.NODE_ENV`, process.env.NODE_ENV);
    const staticPages = fs
        .readdirSync("pages")
        .filter((staticPage) => {
            return ![
                "_app.js",
                "_document.js",
                "_error.js",
                "sitemap.xml.js",
                "api",
                "index.js",
            ].includes(staticPage);
        })
        .map((staticPagePath) => {
            return {
                url: `${baseUrl}/${staticPagePath.substr(
                    0,
                    staticPagePath.lastIndexOf(".")
                )}`,
                name: staticPagePath
                    .replace("-", " ")
                    .substr(0, staticPagePath.lastIndexOf(".")),
            };
        });

    return {
        props: {
            pages: staticPages,
        },
    };
}
