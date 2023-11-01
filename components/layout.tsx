import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Head from "next/head";
import Navbar from '@/components/navbar';
import { useRouter } from "next/router";

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
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);

    const names = getNames(router.pathname);
    const description = "An AI conference near you!";

    return (
        <div ref={ref} className="">
            <Head>
                <title>AiVolution | {names.pageTitle}</title>
                <meta name="description" content={description} />
            </Head>

            <div className="w-full h-[96rem] overflow-hidden relative grid place-items-center">
                <motion.div
                    className="relative z-20 h-full w-full"
                >
                    <Navbar />
                    {children}
                </motion.div>
                <motion.div
                    className="absolute inset-0 z-10"
                    style={{
                        backgroundImage: `url(/background-images/${names.bgImageName}.png)`,
                        backgroundPosition: "top",
                        backgroundSize: "cover",
                        y: backgroundY,
                    }}
                />
            </div>
        </div>
        
    )
}