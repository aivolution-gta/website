import React, { useState, FormEvent } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Reveal } from '../reveal';
import axios from "axios";
import Link from 'next/link';
import { useRouter } from 'next/router';


const LogInForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Check if inputs not empty
        if (!email|| !password) {
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        // Validate email
        const validateEmail = (email: string) => {
            // Use a regex to validate the email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        if (!validateEmail(email)) {
            setEmailError('Invalid email address.');
            return;
        } else {
            setEmailError('');
        }

        //
        try {
            const response = await axios.post('/api/user-accounts/register', { email: email, password: password });

            if (response.status === 200) {
                setEmail('');
                setPassword('');
                router.push("/dashboard")
            }
            
        } catch (error: any) {
            console.log(error.message);
        }
    }

    return (
        <div className="w-full">
            <form className="flex items-center justify-center">
                <div className="items-center flex-col border-2 border-dark-purple rounded-lg w-1/2 xs:w-5/6 sm:w-5/6">

                    <div className="flex justify-center">
                        <div className="flex flex-col w-5/6 mt-4">
                            <h2 className="font-bold text-[#1B1541] text-[1.5em] xs:text-[1em] xs:my-[5px] mb-2">
                                Email:
                            </h2>

                            {emailError && (
                            <div className="text[#FF0000] mt-2">
                                {emailError}
                            </div>
                            )}
                            
                            <input
                                className="w-1/2 outline-0 mb-[10px] xs:h-[35px] xs:mr-[15px] xs:w-full xs:text-[0.85em] h-[50px] bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 hover:border-black p-3 font-['poppins']"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex-col w-5/6 mt-4">
                            <h3 className="font-bold w  text-[#1B1541] text-[1.5em] xs:text-[1em] xs:mb-[10px] mb-2">
                                Password:
                            </h3>

                            <input
                                className="w-1/2 outline-0 mb-[10px] xs:h-[35px] xs:mr-[15px] xs:w-full xs:text-[0.85em] h-[50px] bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 hover:border-black p-3 font-['poppins']"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={handleSubmit}
                            className="mt-[30px] mb-[20px] h-[60px] w-1/2 xs:w-[65%] xs:h-[40px] xs:text-[1em] bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 text-xl hover:bg-dark-purple hover:text-white transition-all ease-in-out duration-500"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </form>

            {errorMessage && (
                <div className="fixed md:bottom-20 md:left-20 lg:bottom-20 lg:left-20 xl:bottom-20 xl:left-20 sm:top-20 sm:left-20 m-4 h-[55px] w-[1255px]">
                    <Reveal>
                        <div className="text-center p-5 bg-dark-purple w-1/3 xs:w-1/4 xs:text-[0.85em] rounded-lg text-white relative">
                            <p>{errorMessage}</p>
                            <button 
                              className="absolute top-2 right-2 cursor-pointer h-[25px]"
                              onClick={() => setErrorMessage('')}
                            >
                              <IoMdClose size={30} className="hover:bg-light-purple/75 rounded-md" />
                            </button>
                            
                        </div>
                    </Reveal>
                </div>
            )}
        </div>
    );
}

export default LogInForm;
