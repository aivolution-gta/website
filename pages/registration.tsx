import React from "react";
import { Reveal } from "@/components/reveal";
import RegistrationForm from "@/components/register/registration-form";

export default function Registration() {
    return (
        <div className="w-screen flex flex-col min-h-screen">
            <Reveal>
                <h1 className="flex justify-center place-center my-2 xs:text-[3em] sm:text-[3em]">Register Now</h1>
            </Reveal>

            <RegistrationForm />
        </div>
    )
}