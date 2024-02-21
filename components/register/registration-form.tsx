import React, { useState, FormEvent, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Reveal } from '../reveal';
import axios from "axios";
import { Checkbox } from "@mui/material";


const RegistrationForm: React.FC = () => {
    const [hostName, setHostName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [termsAndConditions, setTermsAndConditions] = useState(false);
    const [newsletterEmails, setNewsletterEmails] = useState(false);
    const [referenceCode, setReferenceCode] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Check if inputs not empty
        if (!firstName || !lastName || !email || termsAndConditions == false) {
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

        // Api
        try {
            const registrationResponse = await axios.post(`/api/conference/register`, { firstName: firstName, lastName: lastName, email: email, termsAndConditions: termsAndConditions, referenceCode: referenceCode }, { timeout: 10000 });

            if (registrationResponse.status === 201) {
                // Clear user inputs
                setFirstName('');
                setLastName('');
                setEmail('');
                setTermsAndConditions(false);
                setNewsletterEmails(false);
                setReferenceCode('');
            }

            if (newsletterEmails) {
                const newsletterResponse = await axios.post(`/api/newsletter/add-email`, { email: email }, { timeout: 10000 })

                if (newsletterResponse.status === 201) {
                    setSuccessMessage('Newsletter email added successfully.')
                }
            }

        } catch (error: any) {
            setErrorMessage(error.message);
            console.log(error.message);
        }
    }

    useEffect(() => {
        setHostName(window.location.hostname);
    }, []);

    return (
        <div className="w-full">
            <form className="flex items-center justify-center">
                <div className="items-center flex-col border-2 border-dark-purple rounded-lg w-1/2 xs:w-5/6 sm:w-5/6 bg-light-purple/[15%]">

                    <div className="flex justify-center">
                        <div className="flex flex-col w-5/6 mt-4 place-items-center">
                            <h3 className="font-bold text-[#1B1541] text-[1.5em] xs:text-[1em] xs:mb-[10px] mb-2">
                                First Name: *
                            </h3>

                            <input
                                className="w-1/2 outline-0 mb-[10px] xs:h-[35px] xs:mr-[15px] xs:w-full xs:text-[0.85em] h-[50px] bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 hover:border-black p-3 font-['poppins']"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col w-5/6 mt-4 place-items-center">
                            <h3 className="font-bold text-[#1B1541] text-[1.5em] xs:text-[1em] xs:mb-[10px] mb-2">
                                Last Name: *
                            </h3>

                            <input
                                className="w-1/2 outline-0 mb-[10px] xs:h-[35px] xs:mr-[15px] xs:w-full xs:text-[0.85em] h-[50px] bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 hover:border-black p-3 font-['poppins']"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex flex-col w-5/6 mt-4 place-items-center">
                            <h2 className="font-bold text-[#1B1541] text-[1.5em] xs:text-[1em] xs:my-[5px] mb-2">
                                Email: *
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

                    <div className="flex flex-col place-items-center bg-dark-purple/10 p-4 my-8">
                        <Checkbox sx={{ color: "#554C89", '&.Mui-checked': { color: "#554C89" } }} checked={termsAndConditions} onChange={(e) => {setTermsAndConditions(e.target.checked)}} required/>
                        <p>I agree to AiVolution&apos;s <a href="/registration/terms-of-service.pdf" target="_blank">terms and conditions</a>. *</p>
                    </div>
                    
                    <div className="flex flex-col place-items-center bg-dark-purple/10 p-4 my-8">
                        <Checkbox sx={{ color: "#554C89", '&.Mui-checked': { color: "#554C89" } }} checked={newsletterEmails} onChange={(e) => {setNewsletterEmails(e.target.checked)}}/>
                        <p>I would like to receive monthly newsletters from AiVolution.</p>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex flex-col w-5/6 mt-4 place-items-center gap-2">
                            <h2 className="font-bold text-[#1B1541] text-[1.5em] xs:text-[1em] xs:my-[5px] mb-2">
                                Reference Code (Optional)
                            </h2>
                            <p>If you have someone else&apos;s reference code, enter it here!</p>
                            
                            <input
                                className="w-1/2 outline-0 mb-[10px] xs:h-[35px] xs:mr-[15px] xs:w-full xs:text-[0.85em] h-[50px] bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 hover:border-black p-3 font-['poppins']"
                                type="email"
                                value={referenceCode}
                                onChange={(e) => setReferenceCode(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={handleSubmit}
                            className="mt-[30px] mb-[20px] h-[60px] w-1/2 xs:w-[65%] xs:h-[40px] xs:text-[1em] bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 text-xl hover:bg-dark-purple hover:text-white transition-all ease-in-out duration-500"
                            type="submit"
                        >
                            Register Now!
                        </button>
                    </div>

                    
                </div>
            </form>

            {errorMessage && (
                <div className="fixed md:bottom-20 md:left-20 lg:bottom-20 lg:left-20 xl:bottom-20 xl:left-20 2xl:bottom-20 2xl:left-20 sm:top-20 sm:left-20 m-4 h-[55px] w-[1255px]">
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
            {successMessage && (
                <div className="fixed md:bottom-20 md:left-20 lg:bottom-20 lg:left-20 xl:bottom-20 xl:left-20 2xl:bottom-20 2xl:left-20 sm:top-20 sm:left-20 m-4 h-[55px] w-[1255px]">
                    <Reveal>
                        <div className="text-center p-5 bg-dark-purple w-1/3 xs:w-1/4 xs:text-[0.85em] rounded-lg text-white relative">
                            <p>{successMessage}</p>
                            <button 
                              className="absolute top-2 right-2 cursor-pointer h-[25px]"
                              onClick={() => setSuccessMessage('')}
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

export default RegistrationForm;