import Link from "next/link";
import { usePathname } from "next/navigation";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function NavBar2(params:Params) {
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
                className="relative text-white transition-colors duration-300 hover:text-yellow-400 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-[-5px] after:transition-all after:duration-300 hover:after:w-full"
            >
                {el.name}
            </Link>
        );
    });

    return (
        <div className={`flex text-white fixed top-40 w-[60%] justify-between text-3xl animate-slide-in ${params.clicked?"":"hidden duration-300"}`}>
            {mappedLinks}
        </div>
    );
}
