import React from "react";
import { Reveal } from "@/components/reveal";
import RegistrationForm from "@/components/register/registration-form";
import Link from "next/link";

export default function Registration() {
    return (
        <div className="w-screen flex flex-col min-h-screen">
            <Reveal>
                <h1 className="flex justify-center place-center my-2 xs:text-[3em] sm:text-[3em]">Register Now</h1>
                <RegistrationForm />
                <div className="flex justify-center">
                        <Link
                            className="mt-[30px] mb-[20px]w-1/2 xs:text-[1em] text-black rounded-lg text-xl hover:text-white transition-all ease-in-out duration-500"
                            href={"/sign-in"}
                        >
                            Already have an account?
                        </Link>
                    </div>
            </Reveal>
        </div>
    )
}