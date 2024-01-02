import React from "react";
import Image from "next/image";
import pic1 from "@/public/ig/1.jpg";
import pic2 from "@/public/ig/2.jpg";
import pic3 from "@/public/ig/3.jpg";

export function CarouselDefault() {
  return (
    <div className="flex flex-col sm:flex-row rounded-xl justify-center mediaImage">
      <a
        href={'https://www.instagram.com/p/C1ixhNzqa-U/'}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden mb-4 sm:mb-0 hover:scale-105 transition-transform duration-300 hover:opacity-90"
      >
        <Image
          src={pic3}
          alt="image 1"
          className="object-cover border-[2px] border-black rounded-xl mx-auto sm:mx-[20px] mediaImage xs:w-[300px]"
        />
      </a>
      <a
        href={'//www.instagram.com/p/C1YFj6my8ed/'}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden mb-4 sm:mb-0 hover:scale-105 transition-transform duration-300 hover:opacity-90"
      >
        <Image
          src={pic1}
          alt="image 1"
          className="object-cover border-[2px] border-black rounded-xl mx-auto sm:mx-[20px] mediaImage xs:w-[300px]"
        />
      </a>
      <a
        href={'https://www.instagram.com/p/C1SZuIyyMUe/'}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden mb-4 sm:mb-0 hover:scale-105 transition-transform duration-300 hover:opacity-90"
      >
        <Image
          src={pic2}
          alt="image 2"
          className="object-cover border-[2px] border-black rounded-xl mx-auto sm:mx-[20px] mediaImage xs:w-[300px]"
        />
      </a>
    </div>
  );
}

export default CarouselDefault;
