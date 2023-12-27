import { Reveal } from "@/components/reveal";

export default function Home () {
    return (
        <div className="w-full">
            {/* Section 1 */}
            <Reveal>
                <h1 className="flex justify-center place-center mt-20 mb-40 opacity-100">AiVolution</h1>
            </Reveal>

            {/* Section 2 */}
            
            <div className="py-20">
                <div className="w-full">
                    <Reveal>
                        <h1 className="flex justify-center place-center mt-96 opacity-100">About Us</h1>
                    </Reveal>
                </div>
                <div className="w-full">
                    <Reveal>
                    <h3 className="flex text-center justify-center place-center my-20 opacity-75 text-3xl mx-36 ">
                        A non-profit organization focused around informing people about our AI driven future.
                    </h3>
                    </Reveal>
                </div>
                <div>
                    <Reveal>
                    <p className="flex text-center justify-center place-center my-20 opacity-75 mx-96">
                        At AiVolution, we are passionate about the infinite possibilities that technology offers and are dedicated to fostering a community that shares this enthusiasm. We are a non-profit organization, and our mission is clear: to be at the forefront of the ever-evolving world of technology by bringing people together through a series of exceptional events and conferences.
                    </p>
                    </Reveal>
                </div>
            </div>
            

            {/* Section 3 */}
            <div className="py-20">
                <div className="w-full">
                    <Reveal>
                    <h1 className="flex justify-center place-center mt-60 opacity-100 my-0">Who Are We</h1>
                    </Reveal>
                </div>  
            </div>
        </div>
    );
}
