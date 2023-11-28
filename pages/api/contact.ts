import { mailOptions, transporter } from "@/config/nodemailer";

const handler = async (req: any, res: any) => {
    if (req.method === "POST") {
        const data = req.body;
        if (!data.name || !data.email || !data.subject || !data.message) {
            return res.status(400).json({message: "Bad request"});
        }

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: data.subject,
                text: "This is a test string",
                html: "<h1>Test Title</h1><p>Some body text</p>"
            });

            return res.status(200).json({ success: true });
        } catch (error) {
            console.log(error);
            return res.status(400).json({message: "Bad request"});
        }
    }

};

export default handler;