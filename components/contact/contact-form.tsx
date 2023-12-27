import { useState, FormEvent } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Send email using Nodemailer
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message }),
        });

        if (response.ok) {
            console.log(`SUCCESS.\nNAME: ${name}\nEMAIL: ${email}\nSUBJECT: ${subject}\nMESSAGE: ${message}`);
        } else {
            console.log('ERROR OCCURRED');
        }
    }

    return(
        <div className="flex flex-col grid grid-rows-4 gap-4">
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        className="font-['poppins']"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className="font-['poppins']"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className="font-['poppins']"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className="font-['poppins']"
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;