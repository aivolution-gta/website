import React from 'react';
import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import ContactForm from '@/components/contact/contact-form';
import { Reveal } from "@/components/reveal";

export default function Contact() {
    return (
        <div className="w-screen flex flex-col min-h-screen">
            <Reveal>
                <h1 className="flex justify-center place-center my-2 xs:text-[3em] sm:text-[3em]">Contact</h1>
            </Reveal>

            <Reveal>
                <div>
                    <div className="flex justify-center">
                        <h3 className="text-center mb-12 w-7/12 xs:w-[80%] xs:text-[0.85em] ">If you have a request, feedback, or business inquiry, feel free to send a message through the contact form, and our team will reach out to you!</h3>
                    </div>
                    <ContactForm />
                    
                </div>
            </Reveal>

            <div className="flex items-center justify-center flex grow xs:mt-20">
                <div className="flex items-center justify-center flex-col md:w-[939px] xs:h-[100px] mx-10 my-8 xs:my-2">
                    <Reveal>
                        <h2 className="font-bold text-gray-950 text-lg mb-3 text-center xs:text-[1em]">
                            Other ways you can contact us:
                        </h2>
                    </Reveal>

                    <Reveal>
                        <div className="flex flex-wrap gap-4 mb-3 items-center justify-center border-dark-purple border-2 rounded-lg bg-dark-purple px-16 py-4 xs:py-2 xs:px-8">
                            <a href="mailto:AiVolutionteam@gmail.com" target="_blank">
                                <p className="text-md font-bold">
                                    <IoMdMail className="inline" size={28} />
                                </p>
                            </a>
                            <a href="https://www.instagram.com/aivolutiongta/" target="_blank">
                                <p className="text-md font-bold">
                                    <FaInstagram className="inline" size={28} />
                                </p>
                            </a>
                            <a href="https://www.linkedin.com/company/aivolutiongta/mycompany/" target="_blank" rel="noopener noreferrer">
                                <p className="text-md font-bold">
                                    <FaLinkedin className="inline" size={28} />
                                </p>
                            </a>
                            <a href="https://www.tiktok.com/@aivolutiongta" target="_blank" rel="noopener noreferrer">
                                <p className="text-md font-bold">
                                    <FaTiktok className="inline" size={28} />
                                </p>
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}


      
      
   