import { NextApiRequest, NextApiResponse } from "next";
import transporter from "../../../lib/nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const {name, email, subject, message} = req.body;

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: 'Website Feedback Form',
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
        });

        res.status(200).json({ success: true })
    } else {
        res.status(405).json({ message: 'Method Not Allowed'});
    }
}

export default handler;