import React from "react";
import Image from "next/image";
import pic1 from "@/public/ig/1.jpg";
import pic2 from "@/public/ig/2.jpg";
import pic3 from "@/public/ig/3.jpg";

export function CarouselDefault() {

    const images = [
        {
            src: pic3,
            num: "3",
            link: "https://www.instagram.com/p/C1ixhNzqa-U/"
        },
        {
            src: pic2,
            num: "2",
            link: "https://www.instagram.com/p/C1YFj6my8ed/"
        },
        {
            src: pic1,
            num: "1",
            link: "https://www.instagram.com/p/C1SZuIyyMUe/"
        }
    ]

    return (
        <div className="flex flex-row xs:flex-col justify-evenly">
            {images.map((data, i) => 
                <a
                    href={data.link}
                    target="_blank"
                    key={i}
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden mb-4 sm:mb-0 hover:scale-105 transition-transform duration-300 hover:opacity-90 mx-auto sm:mx-[20px]"
                >
                    <Image
                        src={data.src}
                        alt={`image ${data.num}`}
                        className="object-cover border-[2px] border-black rounded-xl w-[600px] xs:w-[300px]"
                    />
                </a>
            )}
        </div>
    );
}

export default CarouselDefault;