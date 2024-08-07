import { FormEvent, useEffect, useState } from 'react';
import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import axios from "axios";

export default function Footer() {
    const [hostName, setHostName] = useState('');
    const [email, setEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [message, setMessage] = useState('');
    const [emailInProgress, setEmailInProgress] = useState(false);

    const handleEmailSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            setEmailInProgress(true);
            const response = await axios.post(`https://${hostName}/api/newsletter/add-email`, { email: email }, { timeout: 10000 });
            setMessage(response.data.message || 'Email added successfully');
            setEmailInProgress(false);
            setEmail('');
        } catch (err) {
            console.error('Error adding email:', err);
            setMessage('Error adding email');
        }
    }

    const handleEmailChange = (email: string) => {
        setEmail(email);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailIsValid(emailRegex.test(email))
    }

    useEffect(() => {
        setHostName(window.location.hostname);
    }, []);

    return(
        <div className="mt-20 xs:mt-0 text-white bottom-0 w-screen">
            <div className="bg-dark-purple/80 p-4 flex justify-center xs:py-6">
                <div className="w-full flex justify-center text-center">
                    <div className="w-1/2 xs:w-5/6 sm:w-1/2 mx-2 flex flex-col justify-center text-center"><a href="https://fm.addxt.com/form/?vf=1FAIpQLSfpgiWRgNzn2t8yADH6-4Rn-2SMBT9dfpIfoEPtOU7ooHEvyA" className="underline text-white hover:text-beige transition-all" target="_blank">Subscribe to our newsletter to get the newest updates!</a></div>
                    {/* <form onSubmit={handleEmailSubmit} className="flex w-full justify-center">
                        <div className="w-1/5 xs:w-1/2 sm:w-1/2 border-l-2 mx-2 px-2 flex flex-col justify-evenly">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {handleEmailChange(e.target.value)}}
                                className="font-bold w-full text-[#1B1541] rounded-md leading-loose px-2 outline-none mb-2"
                                placeholder="Email"
                            />
                            <button type="submit" disabled={emailInProgress || !emailIsValid} className={`w-full rounded-md border-mid-purple bg-light-purple ${emailInProgress || !emailIsValid ? "bg-light-purple/50 hover:cursor-not-allowed" : "hover:bg-mid-purple"} transition duration-200 leading-loose`}>Submit</button>
                        </div>
                    </form> */}
                </div>
            </div>
            <div className="bg-dark-purple p-4 flex justify-center">
                <div className="w-full flex flex-col justify-evenly">
                    <div className="w-full flex xs:flex-col justify-evenly place-items-center text-center">
                        <div className="w-1/3 xs:hidden"></div>
                        <p className = "xs:text-[1em]">Made with ❤️ by the <br className="hidden xs:block"/><a href="https://github.com/padhyeSohum/aivolution-website" target="_blank" className="">AiVolution Dev Team</a></p>
                        <div className="flex justify-end w-1/3 xs:w-full xs:justify-center xs:mt-4">
                            <a href="mailto:AiVolutionteam@gmail.com" target="_blank">
                                <p className="text-md font-bold">
                                    <IoMdMail className="inline mx-1" size={28} />
                                </p>
                            </a>
                            <a href="https://www.instagram.com/aivolutiongta/" target="_blank">
                                <p className="text-md font-bold">
                                    <FaInstagram className="inline mx-1" size={28} />
                                </p>
                            </a>
                            <a href="https://www.linkedin.com/company/aivolutiongta/mycompany/" target="_blank" rel="noopener noreferrer">
                                <p className="text-md font-bold">
                                    <FaLinkedin className="inline mx-1" size={28} />
                                </p>
                            </a>
                            <a href="https://www.tiktok.com/@aivolutiongta" target="_blank" rel="noopener noreferrer">
                                <p className="text-md font-bold">
                                    <FaTiktok className="inline mx-1" size={28} />
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}