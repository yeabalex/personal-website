import Link from "next/link";
import { usePathname } from "next/navigation";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import styled from "styled-components";

export default function NavBar2(params:Params) {

    const ResponsiveNav = styled.div
    `
        @media(max-width: 700px){
            flex-direction: column;
            top: 112px;
            gap: 32px;
            width: 20%;
        }
    `

    const links = [
        { name: "works", href: "/works" },
        { name: "resume", href: "/resume" },
        { name: "contact", href: "/contact" }
    ];

    const pathname = usePathname();

    const mappedLinks = links.map((el, index) => {
        return (
            <Link
                href={el.href}
                key={index}
                className="relative text-white transition-colors duration-300 hover:text-[#1DB954] after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-[-5px] after:transition-all after:duration-300 hover:after:w-full"
            >
                {el.name}
            </Link>
        );
    });

    return (
        <ResponsiveNav className={`flex text-white fixed top-40 w-[60%] justify-between text-3xl animate-slide-in ${params.clicked?"":"hidden duration-300"}`}>
            {mappedLinks}
        </ResponsiveNav>
    );
}
