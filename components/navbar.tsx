import Link from "next/link";
import Logo from "../public/aivolution-logo.png";
import Image from "next/image";

const links = [
    {
        name: "home",
        link: "/",
        id: "0",
    },
    {
        name: "contact",
        link: "/contact",
        id: "1",
    },
    {
        name: "updates",
        link: "/updates",
        id: "2",
    },
    {
        name: "past events",
        link: "/past-events",
        id: "3",
    }
];

export default function Navbar () {
    return (
        <div className="font-bold flex justify-between z-20 w-full bg-dark-purple/95">
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
            <div className="my-auto">
                {links.map(({ name, link, id }) => 
                    <Link
                        key={id}
                        href={link}
                        className="hover:bg-white/75 text-white mx-4 px-4 py-4 my-auto transition-all rounded-lg hover:text-dark-purple"
                    >
                        {name}
                    </Link>
                )}
            </div>
            
        </div>
    );
}