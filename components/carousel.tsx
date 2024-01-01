import React from "react";
import Image from "next/image";
import pic1 from "@/public/ig/1.jpg";
import pic2 from "@/public/ig/2.jpg";
import pic3 from "@/public/ig/3.jpg";

export function CarouselDefault() {
  return (
    <div className="flex rounded-xl justify-center">
      <a href={'//www.instagram.com/p/C1YFj6my8ed/'} target="_blank" rel="noopener noreferrer">
        <Image
          src={pic1}
          alt="image 1"
          className="object-cover border-2 border-black rounded-xl mx-[40px]"
          width={400}
        />
      </a>
      <a href={'https://www.instagram.com/p/C1SZuIyyMUe/'} target="_blank" rel="noopener noreferrer">
        <Image
          src={pic2}
          alt="image 2"
          className="object-cover border-2 border-black rounded-xl mx-[40px]"
          width={400}
        />
      </a>
      <a href={'https://www.instagram.com/p/C00TaHNtj43/'} target="_blank" rel="noopener noreferrer">
        <Image
          src={pic3}
          alt="image 3"
          className="object-cover border-2 border-black rounded-xl mx-[40px]"
          width={400}
        />
      </a>
    </div>
  );
}

export default CarouselDefault;
