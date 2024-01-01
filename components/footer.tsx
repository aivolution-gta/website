import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export default function Footer() {

    // const socials = [
    //     {
    //         link: '',
    //         icon:
    //     },
    //     {
    //         link:,
    //         icon:
    //     },
    //     {
    //         link:,
    //         icon:
    //     }
    // ]

    return(
        <div className="text-white bottom-0 w-full bg-dark-purple min-h-[4em] flex justify-center">
            <div className="w-full flex flex-col justify-center">
                <div className="w-full flex justify-evenly ">
                    <div className="w-1/3"></div>
                    <div>Made with ❤️ by the <a href="https://github.com/padhyeSohum/aivolution-website" target="_blank" className="">AiVolution Dev Team</a></div>
                    <div className="flex justify-end w-1/3">
                        <a href="mailto:AiVolutionteam@gmail.com" target="_blank">
                            <p className="text-md font-bold">
                                <IoMdMail className="inline mr-1" size={28} />
                            </p>
                        </a>
                        <a href="https://www.instagram.com/aivolutiongta/" target="_blank">
                            <p className="text-md font-bold">
                                <FaInstagram className="inline mr-1" size={28} />
                            </p>
                        </a>
                        <a href="https://www.linkedin.com/company/aivolutiongta/mycompany/" target="_blank" rel="noopener noreferrer">
                            <p className="text-md font-bold">
                                <FaLinkedin className="inline mr-1" size={28} />
                            </p>
                        </a>
                    </div>
                </div>
            </div>
                
        </div>
    )
}