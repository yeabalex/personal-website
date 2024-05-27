'use client';

import Image from "next/image";
import Photo from "../../public/memoji1.webp";
import { Button } from "@nextui-org/react";
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from "react";
import Loading from "./load";


export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(prev=>!prev)
    },1000)

    return ()=>clearTimeout(timer)
  },[])

if(!loading){
  return (
    <main className="flex flex-col justify-between mt-[80px] ml-[19%] w-[70%] h-[400px]">
      <div className="flex flex-row justify-evenly">
        <div className="w-[50%]">
          <h1 className="font-black text-5xl text-customColor leading-tight">
            Hey there, I am a
            <br />
            <div className="w-[415px] h-[62px]">
              <Typewriter
                words={['Software Engineer', 'Solution Architect', 'Tech Enthusiast', 'Programmer']}
                typeSpeed={200}
                deleteSpeed={150}
                delaySpeed={2000}
                loop={0}
                cursor={true}
              />
            </div>
          </h1>
          <div>
            <p className="text-base text-p mt-4 font-black">
              Solving problems is my speciality :)
            </p>
            <p className="mt-6 text-p2 leading-relaxed">
              I am a software engineer
              based in the <br/> beautiful city of Brasov, Romania 🇷🇴.
              <br />
              I am currently working around <strong>Firebase</strong>,
              <br />
              <strong>Tailwind-css</strong> and <strong>NextJS</strong>.
            </p>
            <p className="mt-6 text-p2 leading-relaxed">
              I am available to work.
            </p>
          </div>
        </div>
        <div className="w-[50%] h-80 relative top-8 left-10">
          <Image src={Photo} alt="yeabsira" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="w-[150px] mt-7">
        <Button color="warning" size="lg">
          Hire Me
        </Button>
      </div>
     
      
    </main>
  );
}else{
  return <Loading/>
}
}
