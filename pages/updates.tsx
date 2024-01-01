import React from "react";
import ShiftingCountdown from "@/components/countdown";
import { CarouselDefault } from "@/components/carousel";

export default function Updates() {
  return (
    <div className="w-full h-[2000px]">
      <h1 className="flex justify-center place-center my-5">Updates</h1>
      <h2 className="flex justify-center place-center">Days Till Next Summit</h2>
      <ShiftingCountdown /> 
      <h2 className="flex justify-center place-center my-[30px]">Latest Instagram Posts!</h2>
      <CarouselDefault />
      </div>
  );
}
