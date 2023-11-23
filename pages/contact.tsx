import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export default function Contact() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <h1 className="flex justify-center place-center my-10 opacity-75">Contact</h1>

      <div className="flex items-center justify-center pr-5 pl-5 flex-grow">
        <div className="flex items-center justify-center flex-col md:w-[939px] border-2 border-dark-purple/95 rounded-lg px-10 py-8">
          <h2 className="font-bold text-gray-950 text-lg mb-3">
            Have any questions?
          </h2>

          <div className="flex flex-wrap gap-4 mb-3 items-center justify-center">
            <a href="https://www.instagram.com/aivolutiongta/" target="_blank">
              <p className="text-md font-bold text-dark-purple/95">
                <FaInstagram className="inline mr-1" size={28} /> Instagram
              </p>
            </a>
            <a href="mailto:AiVolutionteam@gmail.com" target="_blank">
              <p className="text-md font-bold text-dark-purple/95">
                <IoMdMail className="inline mr-1" size={28} /> Email
              </p>
            </a>
          </div>
        </div>
      </div>


      
      
    </div>
  );
  }