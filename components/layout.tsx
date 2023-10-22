import { ReactNode } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import Head from "next/head";
import Navbar from '@/components/navbar';
import Image from 'next/image';
import { useRouter } from "next/router";
import backgroundImage from "../public/background-images/pexels-pixabay-531880.jpg"



export default function Layout ({ children }: { children: ReactNode }) {
    const title = "AiVolution";
    const description = "An AI conference near you!";

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <Navbar />
            <m.div
                className="absolute -z-"
            >
                <Image 
                    src={backgroundImage} 
                    alt="image" 
                    
                />
            </m.div>
            <m.div>
                {children}
            </m.div>
        </div>
        
    )
}