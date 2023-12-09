import React from "react";
import ShiftingCountdown from "../components/countdown";


export default function Updates() {
  return (
    <div className="w-full">
      <h1 className="flex justify-center place-center my-5">Updates</h1>
      <h2 className="flex justify-center place-center">Days Till Next Summit</h2>
      <ShiftingCountdown /> 
      
    </div>
  );
}
