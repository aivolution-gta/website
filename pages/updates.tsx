import React from "react";
import ShiftingCountdown from "@/components/countdown";
import { CarouselDefault } from "@/components/carousel";
import { Reveal } from "@/components/reveal";

export default function Updates() {
    return (
        <div className="w-full text-center">
            <Reveal>
                <h1 className="flex justify-center place-center my-5">Updates</h1>
            </Reveal>
            <Reveal>
                <div>
                    <h2 className="flex justify-center place-center">Time Until Next Event</h2>
                    <div className="flex flex-col justify-center py-32">
                        <ShiftingCountdown /> 
                    </div>
                </div>
            </Reveal>
            
            <Reveal>
            <h3 className="mb-20">Follow our Instagram page to get notified on when the next event will be!</h3>
            </Reveal>

            <Reveal>
                <h2 className="flex justify-center place-center mt-32 mb-16">Latest Instagram Posts!</h2>
            </Reveal>

            <Reveal>
                <CarouselDefault />
            </Reveal>
        </div>
    );
}