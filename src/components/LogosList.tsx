import Image from "next/image";
import { Tooltip } from "@nextui-org/react";

export default function Logos() {
  const logos = [
    { name: "React", src: "/logos/react.svg" },
    { name: "Next js", src: "/logos/next.svg" },
    { name: "Javascript", src: "/logos/javascript.svg" },
    { name: "Typescript", src: "/logos/typescript.png" },
    { name: "Tailwind", src: "/logos/tailwind.svg" },
    { name: "VS Code", src: "/logos/vscode.svg" },
    { name: "Git", src: "/logos/git.svg" },
    { name: "Firebase", src: "/logos/firebase.svg" },
    { name: "AWS", src: "/logos/aws.svg" },
    { name: "Bash", src: "/logos/bash.png" },
    { name: "Python", src: "/logos/python-5.svg" },
    { name: "C++", src: "/logos/c.svg" },
    { name: "Mongo DB", src: "/logos/mongodb.svg" },
    { name: "SQL", src: "/logos/sql.svg" }
  ];
  

  return (
    <div className="flex flex-row bg-[#FFF] justify-between overflow-hidden items-center p-5 rounded-full h-[65px] shadow-xl w-[100%] mt-10"> 
      {logos.map((logo, index) => (
        <Tooltip key={index} content={logo.name}>
        <Image
          key={index}
          src={logo.src}
          alt={logo.name}
          width={40} 
          height={40}
          objectFit="contain"
           
        />
        </Tooltip>
      ))}
    </div>
  );
}
