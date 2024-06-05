'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Switch } from "@nextui-org/switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    const links = [
        { name: "works", href: "/works" },
        { name: "resume", href: "/resume" },
        { name: "contact", href: "/contact" }
    ];

    const pathname = usePathname();

    return (
        <nav className="flex flex-row justify-evenly fixed top-0 w-full z-50 h-20 items-center bg-white">
            <div className="w-11/12 flex flex-row justify-between items-center">
                <Link href="/" className="font-bold text-2xl text-black transform transition-transform duration-500 hover:scale-110">
                    yeabsira.
                </Link>
                
                <div className="flex flex-row font-normal space-x-20 text-lg text-black">
                    {links.map((link) => {
                        const isActive = (pathname === link.href);
                        return (
                            <Link 
                                href={link.href} 
                                key={link.name} 
                                className={`relative transition duration-300 ${
                                    isActive ? "font-bold underline" : "text-gray-700"
                                } hover:font-bold hover:text-black`}
                            >
                                {link.name}
                                <span className={`absolute left-0 -bottom-1 w-full h-[2px] bg-black transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'} origin-left hover:scale-x-100`}></span>
                            </Link>
                        );
                    })}
                </div>
                
                <Switch
                    defaultSelected
                    size="lg"
                    color="success"
                    startContent={<FontAwesomeIcon icon={faSun} style={{ width: "20px" }} />}
                    endContent={<FontAwesomeIcon icon={faMoon} style={{ width: "20px" }} />}
                    className="transform transition-transform duration-500 hover:scale-110"
                />
            </div>
        </nav>
    );
}
