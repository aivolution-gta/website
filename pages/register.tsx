import React from "react";
import { Reveal } from "@/components/reveal";
import RegistrationForm from "@/components/register/registration-form";
import Link from "next/link";

export default function Register() {
    return (
        <div className="w-screen flex flex-col min-h-screen">
            <Reveal>
                <h1 className="flex justify-center place-center my-2 xs:text-[3em] sm:text-[3em]">Register</h1>
                <RegistrationForm />
            </Reveal>
        </div>
    )
}