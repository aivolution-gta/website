import React from "react";
import ShiftingCountdown from "@/components/countdown";


export default function Updates() {
    return (
        <div className="w-full text-center">
            <h1 className="flex justify-center place-center my-5">Updates</h1>
            <h2 className="flex justify-center place-center">Days Till Next Event</h2>
            <div className="flex flex-col justify-center py-32">
                <ShiftingCountdown /> 
            </div>
            
            <h3 className="my-20">Follow our Instagram page to get notified on when the next event will be!</h3>
        </div>
    );
}