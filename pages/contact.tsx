import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import ContactForm from '@/components/contact/contact-form';


export default function Contact() {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <h1 className="flex justify-center place-center my-2 opacity-75">Contact</h1>
            <h3 className="text-center mb-4">If you have a request, feedback, or business inquiry, feel free to send a message <br />through the contact form, and our team will reach out to you!</h3>

            <ContactForm />

            <div className="flex items-center justify-center pr-5 pl-5 flex-grow">
                <div className="flex items-center justify-center flex-col md:w-[939px] px-10 py-8">
                    <h2 className="font-bold text-gray-950 text-lg mb-3">
                        Other ways you can contact us:
                    </h2>

                    <div className="flex flex-wrap gap-4 mb-3 items-center justify-center border-dark-purple border-2 rounded-lg bg-dark-purple px-16 py-4">
                        <a href="mailto:AiVolutionteam@gmail.com" target="_blank">
                            <p className="text-md font-bold">
                                <IoMdMail className="inline mr-1" size={28} />
                            </p>
                        </a>
                        <a href="https://www.instagram.com/aivolutiongta/" target="_blank">
                            <p className="text-md font-bold">
                                <FaInstagram className="inline mr-1" size={28} />
                            </p>
                        </a>
                        <a href="https://www.linkedin.com/company/aivolutiongta/mycompany/" target="_blank" rel="noopener noreferrer">
                            <p className="text-md font-bold">
                                <FaLinkedin className="inline mr-1" size={28} />
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


      
      
   