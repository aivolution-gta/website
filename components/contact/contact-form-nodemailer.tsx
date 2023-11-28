import { sendContactForm } from '@/lib/api';
import { Input, Typography, Button } from '@material-tailwind/react';
import { useState } from 'react';

const initValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
};
const initState = {values: initValues};

export default function ContactForm () {
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});

    const { values } = state;

    const onBlur = ({ target }: any) =>
        setTouched((prev) => ({ ...prev, [target.name]: true }));

    const handleChange = ({target}: any) => 
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value
            }
    }));

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true
        }));
        await sendContactForm(values);
    }

    return (
        <div className="flex flex-col grid grid-rows-4 gap-4">
            <div>
                <Input 
                    type="text" 
                    name="name" 
                    variant="standard" 
                    label="Name" 
                    size="md" 
                    color="purple" 
                    crossOrigin="anonymous" 
                    value={values.name} 
                    onChange={handleChange}
                    error={touched.name && !values.name}
                    onBlur={onBlur}
                />
                <Typography
                    variant="small"
                    color="red"
                    className="mt-2 flex items-center gap-1 font-normal font-['poppins']"
                >
                    {(touched.name && !values.name) ? "This field is required." : ""}
                </Typography>
            </div>
            <div>
                <Input 
                    type="email" 
                    name="email" 
                    variant="standard" 
                    label="Email" 
                    size="md" 
                    color="purple" 
                    crossOrigin="anonymous" 
                    value={values.email} 
                    onChange={handleChange}
                    error={touched.email && !values.email}
                    onBlur={onBlur}
                />
                <Typography
                    variant="small"
                    color="red"
                    className="mt-2 flex items-center gap-1 font-normal font-['poppins']"
                >
                    {(touched.email && !values.email) ? "This field is required." : ""}
                </Typography>
            </div>
            <div>
                <Input 
                    type="text" 
                    name="subject" 
                    variant="standard" 
                    label="Subject" 
                    size="md" 
                    color="purple" 
                    crossOrigin="anonymous" 
                    value={values.subject} 
                    onChange={handleChange}
                    error={touched.subject && !values.subject}
                    onBlur={onBlur}
                />
                <Typography
                    variant="small"
                    color="red"
                    className="mt-2 flex items-center gap-1 font-['poppins'] font-normal"
                >
                    {(touched.subject && !values.subject) ? "This field is required." : ""}
                </Typography>
            </div>
            <div>
                <Input 
                    type="text" 
                    name="message" 
                    variant="standard" 
                    label="Message" 
                    size="lg"
                    color="purple" 
                    crossOrigin="anonymous" 
                    value={values.message} 
                    onChange={handleChange}
                    error={touched.message && !values.message}
                    onBlur={onBlur}
                />
                <Typography
                    variant="small"
                    color="red"
                    className="mt-2 flex items-center gap-1 font-normal font-['poppins']"
                >
                    {(touched.message && !values.message) ? "This field is required." : ""}
                </Typography>
            </div>
            <div>
                <Button
                    disabled={!values.name || !values.email || !values.subject || !values.message}
                    onClick={onSubmit}
                >Submit</Button>
            </div>
        </div>
    )
}