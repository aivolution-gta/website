import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import transporter from "../../../lib/nodemailer";
import { sha512 } from "js-sha512";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const email = req.body.email;
        const data = req.body;
        req.body.password = sha512(req.body.password);
        console.log(req.body.password);

        try {
            const client = await clientPromise;
            const db = client.db("aivolution");

            const existingEmail = await db.collection("user_accounts").findOne({ email });
            
            if (existingEmail) {
                return res.status(409).json({ error: "Email is already in use."})
            }

            await db.collection("user_accounts").insertOne({ data });
            await transporter.sendMail({
                from: "AiVolution <aivolutionteam@gmail.com>",
                to: email,
                subject: 'Welcome to the AiVolution Community!',
                html: `<h2>Welcome!</h2><p>We're so happy that you registered for AiVolution!</p>`
            });

            return res.status(201).json({ message: "Account created!" })
        } catch (err) {
            console.error("Error handling request:", err);
            return res.status(500).json({ message: "Internal Server Error" })
        }
    } else {
        return res.status(405).json({ error: "Method Not Allowed"});
    }
}

export default handler;