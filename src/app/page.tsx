'use client'

import Image from "next/image";
import Photo from "../../public/memoji1.webp";
import { Button } from "@nextui-org/react";
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from "react";
import About from "./(about)/about";
import Logos from "@/components/LogosList";

export default function Home() {


  return (
    <main className="flex flex-col justify-center items-center w-[85%] mt-[120px]">
        <div className="flex flex-col items-center w-[100%] h-[360px] justify-evenly">
          <h1 className="text-7xl tracking-wider">Hey there,</h1>
          <div className="flex flex-row gap-4 items-center max-h-[96px]">
            <h1 className="text-8xl tracking-wide">I am </h1>
            <h1 className="text-8xl text-[#1ED760] font-bold tracking-wide gradient-text">Yeabsira Alemu</h1>
          </div>
          <div className="text-6xl tracking-wider">
            <Typewriter
                words={['Software Engineer', 'Solution Architect', 'Tech Enthusiast', 'Programmer']}
                typeSpeed={200}
                deleteSpeed={150}
                delaySpeed={2000}
                loop={0}
                cursor={true}
              />
          </div>    
        </div>
        <Logos/>
        <About/>
    </main>
  );
}
