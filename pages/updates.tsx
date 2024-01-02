import React from "react";
import ShiftingCountdown from "@/components/countdown";
import { CarouselDefault } from "@/components/carousel";
import { Reveal } from "@/components/reveal";

export default function Updates() {
    return (
        <div className="w-full text-center">
            <Reveal>
                <h1 className="flex justify-center place-center my-5 text-4xl md:text-5xl lg:text-6xl">Updates</h1>
            </Reveal>
            <Reveal>
                <div>
                    <h2 className="flex justify-center place-center text-xl md:text-2xl lg:text-3xl">Time Until Next Event</h2>
                    <div className="flex flex-col justify-center py-8 md:py-16 lg:py-32">
                        <ShiftingCountdown /> 
                    </div>
                </div>
            </Reveal>
            
            <Reveal>
                <h3 className="mb-8 text-lg md:text-xl lg:text-2xl mx-10">Follow our Instagram page to get notified on when the next event will be!</h3>
            </Reveal>

            <Reveal>
                <h2 className="flex justify-center place-center my-8 text-2xl md:text-3xl lg:text-4xl">Latest Instagram Posts!</h2>
            </Reveal>

            <Reveal>
                <CarouselDefault />
            </Reveal>
        </div>
    );
}
