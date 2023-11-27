import { Input } from '@material-tailwind/react';

export default function ContactForm () {
    return (
        <div className="max-w-[50%] mt-3">
                <div>
                    <Input type="text" variant="outlined" label="Name" size="md" color="purple" crossOrigin="anonymous"/>
                </div>
                <div>
                    <Input type="email" variant="outlined" label="Email" size="md" color="purple" crossOrigin="anonymous"/>
                </div>
                <div>
                    <Input type="text" variant="outlined" label="Message" size="lg" color="purple" crossOrigin="anonymous"/>
                </div>
        </div>
    )
}