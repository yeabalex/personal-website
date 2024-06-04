'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar(){

    const links = [
        {name: "yeab", href: "/about"},
        {name: "works", href: "/works"},
        {name: "resume", href: "/resume"},
        {name: "contact", href: "/contact"}
    ]

    const pathname = usePathname()

    return (
        <nav className="flex flex-col h-96 justify-between mt-4 fixed">
            <Link href="#" className="font-bold -ml-3 text-2xl text-black">yeabsira.</Link>
            
            <div className="flex flex-col font-normal h-56 justify-between text-lg text-black">
            {links.map((link)=>{
                const isActive = (pathname === link.href)
                return (
                    <Link 
                        href={link.href} 
                        key={link.name} 
                        className={`${isActive ? "font-bold underline" : "text-[#000201] opacity-70"} hover:font-bold hover:underline transition duration-400`}
                    >
                        {link.name}
                    </Link>
                )
            })}
            </div>
        </nav>
    )
}
