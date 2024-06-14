import Image from "next/image";
import { Tooltip } from "@nextui-org/react";

export default function Logos() {
  const logos = [
    { name: "React", src: "/logos/react.svg" },
    { name: "Next js", src: "/logos/next.svg" },
    { name: "Javascript", src: "/logos/javascript.svg" },
    //{ name: "Typescript", src: "/logos/typescript.png" },
    { name: "Tailwind", src: "/logos/tailwind.svg" },
    //{ name: "VS Code", src: "/logos/vscode.svg" },
    //{ name: "Git", src: "/logos/git.svg" },
    { name: "Firebase", src: "/logos/firebase.svg" },
    { name: "AWS", src: "/logos/aws.svg" },
    //{ name: "Bash", src: "/logos/bash.png" },
    { name: "Python", src: "/logos/python-5.svg" },
    //{ name: "C++", src: "/logos/c.svg" },
    { name: "Mongo DB", src: "/logos/mongodb.svg" },
    { name: "SQL", src: "/logos/sql.svg" }
  ];
  
  return (
    <div className="max-w-[550px] flex flex-row gap-9 absolute top-64" id="logo-wrapper"> 
      {logos.map((logo, index) => (
        <Tooltip key={index} content={logo.name}>
          <div className="flex justify-center items-center">
            <Image
              src={logo.src}
              alt={logo.name}
              width={35} 
              height={35}
              objectFit="cover"
            />
          </div>
        </Tooltip>
      ))}
    </div>
  );
}
