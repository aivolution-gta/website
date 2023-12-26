import { Carousel } from "@material-tailwind/react";
import Image from "next/image"
import Placeholder from "../public/background-images/wood-blog-placeholder.png"
import Team from "@/components/team/team";

export default function Home () {
    return (
        <div className="w-full">
            {/* Section 1 */}
            <h1 className="flex justify-center place-center mt-20 mb-40 opacity-100">AiVolution</h1>

            {/* Section 2 */}
            <div className="py-20">
                <div className="w-full">
                    <h1 className="flex justify-center place-center mt-96 opacity-100">About Us</h1>
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

            {/* Section 3 */}
            <div className="py-20">
                <div className="w-full">
                    <h1 className="flex justify-center place-center my-20 opacity-100 my-0">Who Are We</h1>
                </div>
                <Team />
            </div>
        </div>
    )
}
