import React from "react";
import Image from "next/image";
import pic1 from "@/public/ig/1.jpg";
import pic2 from "@/public/ig/2.jpg";
import pic3 from '@/public/ig/3.jpg';

export function CarouselDefault() {

    const images = [
        {
            src: pic3,
            num: "3",
            link: "https://www.instagram.com/reel/C2VMSPMr0GG/"
        },
        {
            src: pic2,
            num: "2",
            link: "https://www.instagram.com/p/C1-k1uuLzYs/"
        },
        {
            src: pic1,
            num: "1",
            link: "https://www.instagram.com/p/C2LWl9ELmoF/"
        }
    ]

    return (
        <div className="flex flex-row xs:flex-col sm:flex-col justify-evenly gap-4 mx-4">
            {images.map((data, i) => 
                <a
                    href={data.link}
                    target="_blank"
                    key={i}
                    rel="noopener noreferrer"
                    className="relative my-4 sm:mb-0 hover:scale-105 transition-transform duration-300 mx-auto"
                >
                    <Image
                        src={data.src}
                        alt={`image ${data.num}`}
                        className="object-cover border-[2px] border-black rounded-xl w-[600px]"
                    />
                </a>
            )}
        </div>
    );
}

export default CarouselDefault;
