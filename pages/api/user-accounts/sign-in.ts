import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import { sha512 } from "js-sha512";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        const email = req.body.email;
        const password = req.body.password;

        try {
            const client = await clientPromise;
            const db = client.db("aivolution");

            const user = await db.collection("user_accounts").findOne({ email }, { projection: { password: 1, _id: 0 }});

            if (!user) {
                return res.status(404).json({ error: "Email does not exist"});
            }

            if (sha512(password) === user.password) {
                return res.status(200).json({ message: "User successfully authenticated" })
            } else {
                return res.status(401).json({ error: "Password is incorrect"})
            }

        } catch (err) {
            console.error("Error handling request:", err);
            return res.status(500).json({ message: "Internal Server Error" })
        }
    } else {
        return res.status(405).json({ error: "Method Not Allowed"});
    }
}

export default handler;