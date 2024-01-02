import Link from "next/link";
import Logo from "../public/aivolution-logo.png";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

const links = [
    {
        name: "Home",
        link: "/",
        id: "0",
    },
    {
        name: "Updates",
        link: "/updates",
        id: "2",
    },
    {
        name: "Contact",
        link: "/contact",
        id: "1",
    },
    // {
    //     name: "past events",
    //     link: "/past-events",
    //     id: "3",
    // }
];

export default function Navbar () {
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    return (
        <div className="font-bold flex justify-between w-screen bg-dark-purple xs:py-4">
            <div className="m-2">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="logo"
                        height={60}
                        className="rounded-full"
                    />
                </Link>
                
            </div>
            <div className="my-auto xs:hidden">
                {links.map(({ name, link, id }) => 
                    <Link
                        key={id}
                        href={link}
                        className="hover:bg-white/75 text-white mx-4 px-4 py-4 my-auto transition-all rounded-lg hover:text-dark-purple duration-300"
                    >
                        {name}
                    </Link>
                )}
            </div>
            
            <div className="my-auto mx-2 hidden xs:block text-beige rounded-xl">
                <IoIosMenu className="inline m-2" size={40} onClick={() => {setDropdownIsOpen(!dropdownIsOpen)}}/>

                {dropdownIsOpen &&
                    <div className="flex flex-col absolute top-[5.5rem] right-[0.5rem] w-[120px] rounded-lg bg-white border-light-purple text-right"
                    >
                        <ul className="flex flex-col">
                            {links.map(({name, link, id}) => 
                                <li key={id} className="hover:bg-[#AAAAAA] py-4 pr-6"><Link href={link}>{name}</Link></li>
                            )}
                        </ul>
                    </div>
                }
                
            </div>
        </div>
    );
}