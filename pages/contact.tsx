import ContactForm from "@/components/contact/contact-form-nodemailer"

export default function Contact () {
    return (
        <div className="w-full">
                <h1 className="flex justify-center place-center my-20 opacity-75">Contact</h1>
                <div>
                    <ContactForm />
                </div>
        </div>
    )
}