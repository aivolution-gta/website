import { ReactNode, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
// import AiVolutionLogo from '../public/aivolution-logo.png';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

function getNames (routerPathname: string) {
    let pageTitle;
    let bgImageName;

    if (routerPathname=="/") {
        pageTitle = "Home";
        bgImageName = "home";
    } else {
        const routerName = routerPathname.slice(1);
        const words = routerName.split('-');
        const capitalizedWords = words.map((word) => {
            if (word.length > 0) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            } else {
                return word;
            }
        });

        pageTitle = capitalizedWords.join(' ');
        bgImageName = routerName;
    }
    
    return {
        pageTitle: pageTitle,
        bgImageName: bgImageName,
    };
}

export default function Layout ({ children }: { children: ReactNode }) {
    const router = useRouter();
    const ref = useRef(null);
    const names = getNames(router.pathname);
    const description = "An AI conference near you!";
    const title = `AiVolution | ${names.pageTitle}`

    return (
        <div /*ref={ref}*/ className="">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon/favicon.ico" />
                <meta name="description" content={description} />
                <style>
                    @import url(https://fonts.googleapis.com/css2?family=Outfit&family=Poppins&display=swap);
                </style>
            </Head>

            <div className="w-full overflow-hidden relative grid place-items-center" 
                // style={{
                //     backgroundImage: `url(/background-images/${names.bgImageName}.png)`,
                //     width: '100%',
                //     height: '100%',
                // }}
            >
                <div
                    className="relative h-full w-full"
                >
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
        
    )
}