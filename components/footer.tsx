import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
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
        <div className="mt-20 text-white bottom-0 w-screen bg-dark-purple min-h-[4em] flex justify-center xs:py-6">
            <div className="w-full flex flex-col justify-center">
                <div className="w-full flex xs:flex-col justify-evenly text-center">
                    <div className="w-1/3 xs:hidden"></div>
                    <p>Made with ❤️ by the <br className="hidden xs:block"/><a href="https://github.com/padhyeSohum/aivolution-website" target="_blank" className="">AiVolution Dev Team</a></p>
                    <div className="flex justify-end w-1/3 xs:w-full xs:justify-center xs:mt-4">
                        <a href="mailto:AiVolutionteam@gmail.com" target="_blank">
                            <p className="text-md font-bold">
                                <IoMdMail className="inline mx-1" size={28} />
                            </p>
                        </a>
                        <a href="https://www.instagram.com/aivolutiongta/" target="_blank">
                            <p className="text-md font-bold">
                                <FaInstagram className="inline mx-1" size={28} />
                            </p>
                        </a>
                        <a href="https://www.linkedin.com/company/aivolutiongta/mycompany/" target="_blank" rel="noopener noreferrer">
                            <p className="text-md font-bold">
                                <FaLinkedin className="inline mx-1" size={28} />
                            </p>
                        </a>
                        <a href="https://www.tiktok.com/@aivolutiongta" target="_blank" rel="noopener noreferrer">
                            <p className="text-md font-bold">
                                <FaTiktok className="inline mx-1" size={28} />
                            </p>
                        </a>
                    </div>
                </div>
            </div>
                
        </div>
    )
}