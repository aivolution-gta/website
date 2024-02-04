import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const email = req.body.email;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' })
        }

        try {
            const client = await clientPromise;
            const db = client.db("aivolution");

            await db.collection("newsletter_emails").insertOne({ email })

            return res.status(201).json({ message: 'Email added to the database' });
                
        } catch (err) {
            console.error('Error adding email to the database:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}