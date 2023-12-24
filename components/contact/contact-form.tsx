// import sendContactForm  from '@/pages/api/contact';
import { Input, Typography, Button } from '@material-tailwind/react';
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
                    <Input
                        className="font-['poppins']"
                        type="text"
                        variant="standard"
                        label="Name"
                        size="md"
                        color="purple"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        crossOrigin="anonymous"
                    />
                </div>
                <div>
                    <Input
                        className="font-['poppins']"
                        type="email"
                        variant="standard"
                        label="Email"
                        size="md"
                        color="purple"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        crossOrigin="anonymous"
                    />
                </div>
                <div>
                    <Input
                        className="font-['poppins']"
                        type="text"
                        variant="standard"
                        label="Subject"
                        size="md"
                        color="purple"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        crossOrigin="anonymous"
                    />
                </div>
                <div>
                    <Input
                        className="font-['poppins']"
                        type="text"
                        variant="standard"
                        label="Message"
                        size="md"
                        color="purple"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        crossOrigin="anonymous"
                    />
                </div>
                <div>
                    <Button type="submit">Send</Button>
                </div>
            </form>
        </div>
    );

    // const onSubmit = async () => {
    //     sendContactForm(state.name, state.email, state.subject, state.message).catch(e => console.log(e));
}

export default ContactForm;