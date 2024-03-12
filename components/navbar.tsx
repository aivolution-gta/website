import Link from "next/link";
import Logo from "../public/aivolution-logo.png";
import Banner from "../public/aivolution-banner.png";
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
        id: "1",
    },
    {
        name: "Contact",
        link: "/contact",
        id: "2",
    },
];

export default function Navbar () {
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    return (
        <div className="font-bold flex justify-between w-screen bg-dark-purple xs:py-1">
            <div className="m-2">
                <Link href="/">
                    <Image
                        src={Banner}
                        alt="logo"
                        height={60}
                        className="rounded-lg "
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
                <Link
                        key={"3"}
                        href={"/register"}
                        className="hover:bg-white/75 bg-mid-purple text-white mx-4 px-4 py-4 my-auto transition-all rounded-lg hover:text-mid-purple duration-300"
                >
                    Register
                </Link>
            </div>
            
            <div className="my-auto mx-2 hidden xs:block text-beige rounded-xl z-20">
                <IoIosMenu className="inline m-2 hover:cursor-pointer" size={40} onClick={() => {setDropdownIsOpen(!dropdownIsOpen)}}/>

                {dropdownIsOpen &&
                    <div className="flex flex-col absolute top-[5.5rem] right-[0.5rem] w-[120px] rounded-lg bg-white border-light-purple text-right">
                        {links.map(({name, link, id}) => 
                            <Link key={id} href={link} className={`w-full h-full pr-6 py-2 hover:bg-[#AAAAAA] ${ id == '0' ? 'hover:rounded-t-md' : (id == (links.length - 1).toString() ? "hover:rounded-b-md" : "") }`}>{name}</Link>
                        )}
                        <Link key={"register"} href={"/register"} className={`w-full h-full pr-6 py-2 hover:bg-[#AAAAAA]`}>Register</Link>
                    </div>
                }
                
            </div>
        </div>
    );
}