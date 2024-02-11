import React from "react";
import { Reveal } from "@/components/reveal";
import LogInForm from "@/components/register/sign-in-form";
import Link from "next/link";

export default function SignIn() {
    return (
        <div className="w-screen flex flex-col min-h-screen">
            <Reveal>
                <h1 className="flex justify-center place-center my-2 xs:text-[3em] sm:text-[3em]">Sign In</h1>
                <LogInForm />
                <div className="flex justify-center">
                        <Link
                            className="mt-[30px] mb-[20px]w-1/2 xs:text-[1em] text-black rounded-lg text-xl hover:text-white transition-all ease-in-out duration-500"
                            href={"/register"}
                        >
                            Dont have an account yet? Register now!
                        </Link>
                    </div>
            </Reveal>
        </div>
    )
}