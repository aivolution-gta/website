import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Head from "next/head";
import Navbar from '@/components/navbar';
import { useRouter } from "next/router";



export default function Layout ({ children }: { children: ReactNode }) {
    const router = useRouter();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const title = `AiVolution | ${router.pathname=="/" ? "Home" : router.pathname}`;
    const description = "An AI conference near you!";

    return (
        <div ref={ref} className="">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>

            <div className="w-full h-[96rem] overflow-hidden relative grid place-items-center">
                <motion.div
                    className="relative z-20"
                >
                    <Navbar />
                    {children}
                </motion.div>
                <motion.div
                    className="absolute inset-0 z-10"
                    style={{
                        backgroundImage: `url(/background-images/pexels-pixabay-531880.jpg)`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: backgroundY,
                    }}
                />
            </div>

            <div className="my-96" />
            <div className="my-96" />
            <div className="my-96" />
        </div>
        
    )
}