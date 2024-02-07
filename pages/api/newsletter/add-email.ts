import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import transporter from "../../../lib/nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const email = req.body.email;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' })
        }

        try {
            const client = await clientPromise;
            const db = client.db("aivolution");

            const existingEmail = await db.collection("newsletter_emails").findOne({ email: email })

            if (existingEmail) {
                return res.status(200).json({ message: 'This email already exists'});
            }

            await db.collection("newsletter_emails").insertOne({ email });
            await transporter.sendMail({
                from: "AiVolution <aivolutionteam@gmail.com>",
                to: email,
                subject: 'Welcome to the AiVolution Newsletter!',
                html: `<h2>Hi There!</h2><p>We're glad to see that you signed up for our newsletter! Stay tuned for the next one and always remember you can reach out to us at AivolutionTeam@gmail.com if you have any questions!</p>`
            });

            return res.status(201).json({ message: 'Email added to the database' });
                
        } catch (err) {
            console.error('Error adding email to the database:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}

export default handler;