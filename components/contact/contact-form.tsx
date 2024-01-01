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

    return (
        <div className="w-full">
          <form className="flex items-center justify-center mb-[11px] mt-[1px]">
            <div className="flex-col md:w-[939px] border-2 border-dark-purple/95 rounded-lg p-[40px]">
              <h3 className="font-bold text-[#1B1541] text-[1.5em]">
                Name:
              </h3>
              <input
                className="outline-0 mb-[10px] h-[50px] bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 hover:border-black p-3 font-['poppins']"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
      
              <h2 className="font-bold text-[#1B1541] text-[1.5em] ">
                Email:
              </h2>
              <input
                className="outline-0 mb-[10px] h-[50px] bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 hover:border-black p-3 font-['poppins']"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
      
              <h2 className="font-bold text-[#1B1541] text-[1.5em] ">
                Subject:
              </h2>
              <input
                className="outline-0 mb-[10px] h-[50px] bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 hover:border-black p-3 font-['poppins']"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
      
              <h2 className="font-bold text-[#1B1541] text-[1.5em] ">
                Message:
              </h2>
              <textarea
                className="outline-0 h-auto min-h-[150px] max-h-[400px] w-full bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 hover:border-black p-3 font-['poppins']"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
      
              <button
                onClick={handleSubmit}
                className="mt-[10px] h-[60px] w-[855px] bg-[#1B1541]/20 rounded-lg border-2 border-dark-purple/95 text-xl hover:bg-dark-purple hover:text-white transition-all ease-in-out duration-500"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      );
      
}

export default ContactForm;