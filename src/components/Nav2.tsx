import Link from "next/link";
import { usePathname } from "next/navigation";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBriefcase, faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function NavBar2(params: Params) {
    const ResponsiveNav = styled.div`
        @media (max-width: 700px) {
            flex-direction: column;
            top: 90px;
            gap: 24px;
            width: 19%;
           
        }
    `;

    const links = [
        { name: "home", href: "/", icon: faHome },
        { name: "about", href: "/about", icon: faHome },
        { name: "works", href: "/works", icon: faBriefcase },
        { name: "resume", href: "/resume", icon: faFileAlt },
        { name: "contact", href: "/contact", icon: faEnvelope }
    ];

    const pathname = usePathname();

    const filteredLinks = links.filter(el => pathname !== el.href);

    const mappedLinks = filteredLinks.map((el, index) => {
        return (
            <Link
                href={el.href}
                key={index}
                className="relative text-white transition-colors duration-300 hover:text-[#1DB954] after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-[-5px] after:transition-all after:duration-300 hover:after:w-full flex items-center gap-4 text-2xl"
            >
               {el.name}
            </Link>
        );
    });

    return (
        <ResponsiveNav className={`flex text-white fixed top-40 w-[60%] justify-between text-3xl animate-slide-in ${params.clicked ? "" : "hidden duration-300"} justify-center`}>
            {mappedLinks}
        </ResponsiveNav>
    );
}
