import React from "react";
import { Reveal } from "@/components/reveal";
import LogInForm from "@/components/register/sign-in-form";
import Link from "next/link";

export default function SignIn() {
    return (
        <div className="w-screen flex flex-col min-h-screen">
            {/* <Reveal>
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
            </Reveal> */}
            <Reveal>
                <div className="flex w-full justify-center place-items-center">
                    <h2>At the moment, our sign-in is under maintenance. Feel free to register and visit the other pages of the website!</h2>
                </div>
            </Reveal>
        </div>
    )
}