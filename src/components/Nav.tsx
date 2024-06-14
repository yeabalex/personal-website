
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@nextui-org/react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { usePathname } from "next/navigation";

export default function NavBar(params: Params) {
   
  



    const pathname = usePathname()
    

    return (
        <nav className="flex flex-row justify-end fixed top-0 right-0 w-[23.5%] h-[60px] z-50 items-center bg-[#FFC815] transition-shadow duration-300">
            <div className="w-[94%] flex flex-row justify-between items-center">
            <div>
                <Link href="/" className="font-bold text-2xl text-white transform transition-transform duration-500 hover:scale-110 hover:text-gray-700">
                    {`yeabsira${pathname}`}
                </Link>
            </div>    
            <div className="bg-customColor w-[80px] h-[60px] flex items-center justify-center">
                <Button onPress={params.toggle} radius="full"
            variant="light"><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}}  size="2x"/></Button>
            </div>
            </div>
        </nav>
    );
}
