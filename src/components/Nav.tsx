import Link from "next/link"
import {Button} from '@nextui-org/button';

export default function NavBar(){

    const links = [
        {name: "home", href: "#"},
        {name: "about", href: "/about"},
        {name: "works", href: "/works"},
        {name: "resume", href: "/resume"},
        {name: "contact", href: "/contact"}
    ]


    return (
        <nav className="flex flex-col h-96 justify-between mt-4 fixed">
            <Link href="#" className="font-bold -ml-3 text-2xl text-black">yeabsira.</Link>
            
            <div className="flex flex-col font-normal h-56 justify-between text-lg text-black">
            {links.map((link)=>{
                return <Link href={link.href}>{link.name}</Link>
            })}
            </div>
        </nav>
    )
}