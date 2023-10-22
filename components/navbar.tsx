import Link from "next/link";
import Logo from "../public/aivolution-logo.png";

const links = [
    {
        name: "home",
        link: "/",
        id: "0",
    },
    {
        name: "about",
        link: "/about",
        id: "1",
    },
    {
        name: "contact",
        link: "/contact",
        id: "2",
    },
];

export default function Navbar () {
    return (
        <div>
            {links.map(({ name, link, id }) => 
                <Link
                    key={name}
                    href={link}
                    className=""
                >
                    {name}
                </Link>
            )}
        </div>
    );
}