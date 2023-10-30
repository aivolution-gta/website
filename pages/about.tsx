import { Carousel } from "@material-tailwind/react";
import Image from "next/image"
import Placeholder from "../public/background-images/wood-blog-placeholder.png"

export default function About () {
    return (
        <div className="w-screen">
            {/* Section 1 */}
            <div className="bg-beige py-20">
                <div className="w-full">
                    <h1 className="flex justify-center place-center my-20 opacity-75 my-0 ">About Us</h1>
                </div>
                <div className="w-full">
                    <h3 className="flex text-center justify-center place-center my-20 opacity-75 text-3xl mx-36 ">
                        A non-profit organization focused around informing people about our AI driven future.
                    </h3>
                </div>
                <div>
                    <p className="flex text-center justify-center place-center my-20 opacity-75 mx-96 my-0">
                        At AiVolution, we are passionate about the infinite possibilities that technology offers and are dedicated to fostering a community that shares this enthusiasm. We are a non-profit organization, and our mission is clear: to be at the forefront of the ever-evolving world of technology by bringing people together through a series of exceptional events and conferences.
                    </p>
                </div>
            </div>

            {/* Section 2 */}
            <div className="bg-mid-purple py-20">
                <div className="w-full">
                    <h1 className="flex justify-center place-center my-20 opacity-75 my-0">Who Are We</h1>
                </div>
                <Carousel className="rounded-xl w-1/2">
                    <Image
                        src={Placeholder}
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <Image
                        src={Placeholder}
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <Image
                        src={Placeholder}
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                </Carousel>
            </div>
            
        </div>  
    )   
}

