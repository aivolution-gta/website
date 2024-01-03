import React, { useState, FormEvent } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [isMessageSent, setMessageSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Validate inputs
        if (!name || !email || !subject || !message) {
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        // Validate email
        if (!validateEmail(email)) {
            setEmailError('Invalid email address.');
            return;
        } else {
            setEmailError('');
        }

        // Send email using Nodemailer
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message, phone, company }),
        });

        if (response.ok) {
            console.log(`SUCCESS.\nNAME: ${name}\nEMAIL: ${email}\nSUBJECT: ${subject}\nMESSAGE: ${message}\nPHONE: ${phone}\nCOMPANY: ${company}`);
            setMessageSent(true);
            // Clear user inputs
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setPhone('');
            setCompany('');
        } else {
            console.log('ERROR OCCURRED');
            setErrorMessage('Error sending message. Please try again.');
        }
    }

    const validateEmail = (email: string) => {
        // Use a regex to validate the email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const closeMessage = () => {
        setMessageSent(false);
        setErrorMessage('');
    }

    return (
        <div className="w-screen">
            <form className="flex items-center justify-center mb-[11px] mt-[1px]">
                <div className="flex-col md:w-[939px] border-2 border-dark-purple/95 rounded-lg p-[40px] w-2/3">
                    <h3 className="font-bold text-[#1B1541] text-[1.5em]">
                        Name:
                    </h3>
                    <input
                        className="outline-0 w-1/4 mb-[10px] h-[50px] bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 hover:border-black p-3 font-['poppins']"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <h2 className="font-bold text-[#1B1541] text-[1.5em] ">
                        Email:
                    </h2>
                    {emailError && (
                    <div className="text-red-500 mt-2">
                        {emailError}
                    </div>
                )}
                    <input
                        className="outline-0 w-1/4 mb-[10px] h-[50px] bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 hover:border-black p-3 font-['poppins']"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h2 className="font-bold text-[#1B1541] text-[1.5em] ">
                        Subject:
                    </h2>
                    <input
                        className="outline-0 w-1/4 mb-[10px] h-[50px] bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 hover:border-black p-3 font-['poppins']"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />

                    <h2 className="font-bold text-[#1B1541] text-[1.5em] ">
                        Message:
                    </h2>
                    <textarea
                        className="outline-0 w-full h-auto min-h-[150px] max-h-[400px] bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 hover:border-black p-3 font-['poppins']"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                <button
                    onClick={handleSubmit}
                    className="mt-[10px] w-full h-[60px] bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 text-xl hover:bg-dark-purple hover:text-white transition-all ease-in-out duration-500"
                    type="submit"
                >
                    Send
                </button>
                </div>
            </form>

            {isMessageSent && (
                <div className="fixed bottom-0 left-0 m-4 h-[60px] w-[1255px]">
                    <div className="text-center p-5 bg-dark-purple w-1/3 rounded-lg text-white relative">
                        <p>Message sent</p>
                        <button
                            className="absolute top-2 right-2 cursor-pointer h-[25px]"
                            onClick={closeMessage}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}

            {errorMessage && (
                <div className="fixed bottom-0 left-0 m-4 h-[60px] w-[1255px]">
                    <div className="text-center p-5 bg-dark-purple w-1/3 rounded-lg text-white relative">
                        <p>{errorMessage}</p>
                        <button
                            className="absolute top-2 right-2 cursor-pointer h-[25px]"
                            onClick={() => setErrorMessage('')}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContactForm;
