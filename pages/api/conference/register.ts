import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import transporter from "../../../lib/nodemailer";
import { ObjectId } from "mongodb";
import { sha512 } from "js-sha512";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const data = req.body;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const termsAndConditions = req.body.termsAndConditions;
        const referenceCodeInForm = req.body.referenceCode

        try {
            const client = await clientPromise;
            const db = client.db("aivolution");

            if (!firstName || !lastName || !email || termsAndConditions == false) {
                return res.status(400).json({ error: "Please fill in and check all required fields." })
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ error: "Please use a valid email." })
            }

            const existingEmail = await db.collection("attendees").findOne({ email });
            
            if (existingEmail) {
                return res.status(409).json({ error: "Email is already in use."});
            }

            
            if (referenceCodeInForm != "") {
                let userWithReferenceCode = await db.collection("attendees").findOne({ referenceCode: referenceCodeInForm });

                if (!userWithReferenceCode) {
                    return res.status(404).json({ error: "No reference code found." })
                }

                await db.collection("attendees").updateOne(
                    { _id: new ObjectId(userWithReferenceCode._id) }, 
                    { 
                        $inc: { referenceCodeDiscount: 1 },
                        $push: {
                            referenceCodeUsers: email
                        }
                    }
                );
                
                await transporter.sendMail({
                    from: "AiVolution <aivolutionteam@gmail.com>",
                    to: userWithReferenceCode.email,
                    subject: 'Someone Used Your Reference Code!',
                    html: `
                        <body>
                        <h2>Your Reference Code Was Used!</h2>
                        <p>
                            Hi there! Someone used your reference code during registration, resulting in a dollar off your entrance if they come to the conference!
                        </p>
                        </body>
                    `
                });
                
            }

            const referenceCode = sha512(`${firstName} ${lastName} ${email} ${referenceCodeInForm}`).substring(0, 6).toUpperCase();

            const documentToInsert = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                referenceCodeInForm: referenceCodeInForm,
                referenceCode: referenceCode,
                referenceCodeDiscount: 0,
                referenceCodeUsers: [],
                attendedEvent: false,
            }
            
            await db.collection("attendees").insertOne(documentToInsert);
            await transporter.sendMail({
                from: "AiVolution <aivolutionteam@gmail.com>",
                to: email,
                subject: 'Welcome to the AiVolution Community!',
                html: `
                    <body>
                    <h2>Welcome!</h2>
                    <p>
                        We're so happy that you registered for AiVolution's next event, Innovate!<br /><br />
                        Here is your reference code: ${referenceCode}. Make sure you save this as it will be used to confirm your attendance at the conference. <br /><br />
                        Additionally, you can share it with others to get a discount on your own entrance!<br /><br />
                    </p>
    
                    </body>
                `
            });

            
            return res.status(201).json({ message: "Registered for the event!" })
        } catch (err) {
            console.error("Error handling request:", err);
            return res.status(500).json({ message: "Internal Server Error" })
        }
    } else {
        return res.status(405).json({ error: "Method Not Allowed"});
    }
}

export default handler;