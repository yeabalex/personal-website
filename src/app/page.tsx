import Image from "next/image";
import Photo from "../../public/memoji1.webp"
import Logos from "@/components/LogosList";
import {Button} from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex flex-col justify-between mt-[80px] ml-[19%] w-[70%]">
      <div className="flex flex-row justify-evenly">
        <div className="max-w-[50%]">
              <h1 className="font-black text-5xl text text-customColor mb-2 leading-tight">Hey there, I am a<br/>Solution Architect</h1>
              <p className="text-base text-p mt-4 font-black">Solving problems is my speciality :)</p>
              <p className="mt-6 text-p2 leading-relaxed">My name is Yeabsira, I am a software engineer <br/>based in the beautiful city of Addis, Ethiopia. <br/>I am currently working around <strong>Firebase</strong>,<br/> <strong>Tailwind-css</strong> and <strong>NextJS</strong>.</p>
              <p className="mt-6 text-p2 leading-relaxed">I am either smiling or looking super serious.<br/> If it's the latter one, I am probably thinking<br/> about food.</p>
        </div>
        <div className="w-[50%] h-96 relative top-1 left-10">
        <Image 
          src={Photo} 
          alt="yeabsira"
          layout="fill"
          objectFit="contain"
        />
      </div>
      </div>
      <div className="w-[150px] mt-7">
        <Button color="warning" size="lg">Click to hire me</Button>
      </div>
      <div className="mt-9">
        <Logos/>
      </div>
    </main>
  );
}
