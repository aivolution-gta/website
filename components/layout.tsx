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

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);

    const currentRoute = router.pathname=="/" ? "Home" : router.pathname
    const title = `AiVolution | ${currentRoute}`;
    const description = "An AI conference near you!";

    return (
        <div ref={ref} className="">
            <Head>
                <title>{title}</title>
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
                        backgroundImage: `url(/background-images/${currentRoute}.png)`,
                        backgroundPosition: "top",
                        backgroundSize: "cover",
                        y: backgroundY,
                    }}
                />
            </div>
        </div>
        
    )
}