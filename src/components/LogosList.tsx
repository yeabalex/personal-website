import Image from "next/image";

export default function Logos() {
  const logos = [
    { name: "react", src: "/logos/react.svg" },
    { name: "nextjs", src: "/logos/next.svg" },
    { name: "js", src: "/logos/javascript.svg" },
    { name: "ts", src: "/logos/typescript.png" },
    { name: "tailwind", src: "/logos/tailwind.svg" },
    { name: "vscode", src: "/logos/vscode.svg" },
    { name: "git", src: "/logos/git.svg" },
    { name: "firebase", src: "/logos/firebase.svg" },
    { name: "aws", src: "/logos/aws.svg" },
    { name: "bash", src: "/logos/bash.png" },
    { name: "python", src: "/logos/python-5.svg" },
    { name: "C++", src: "/logos/c.svg" }
  ];
  

  return (
    <div className="flex flex-row bg-[#FFF] justify-between overflow-hidden items-center p-5 rounded-full h-[70px] shadow-xl w-[100%] mt-10">
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.name}
          width={40} 
          height={40}
          objectFit="contain"
           
        />
      ))}
    </div>
  );
}
