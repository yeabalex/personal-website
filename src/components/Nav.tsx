'use client'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@nextui-org/react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { usePathname } from "next/navigation";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function NavBar(params: Params) {
   
  
    const [icon,setIcon] = useState(null)

    useEffect(()=>{
        setIcon(params.toggle)
    },[params.toggle])

    const pathname = usePathname()
    

    return (
        <nav className="flex flex-row justify-end fixed top-0 right-0 w-[23.5%] h-[60px] z-50 items-center bg-[#1DB954] duration-300">
            <div className="w-[94%] flex flex-row justify-between items-center">
            <div>
                <Link href="/" className="font-bold text-xl text-white transform transition-transform duration-500 hover:scale-110 hover:text-gray-700">
                    {`yeabsira${pathname}`}
                </Link>
            </div>    
            <div className="bg-customColor w-[80px] h-[60px] flex items-center justify-center">
                <Button onPress={params.toggle} radius="full"
            variant="light">{!icon?<FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}}  size="2x"/>:<FontAwesomeIcon icon={faX} style={{color: "#ffffff",}} size="2x"/>}</Button>
            </div>
            </div>
        </nav>
    );
}
