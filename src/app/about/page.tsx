'use client'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import {  Listbox,  ListboxSection,  ListboxItem } from "@nextui-org/listbox";
import "../globals.css"


export default function About() {

    const hobbies = [
      {name: "Fred again....", id: "1", icon: "/logos/drum-machine.png"},
      {name: "Geoguesser", id: "2", icon: "/logos/country-location-icon.svg"},
      {name: "Cycling", id: "3", icon: "/logos/bike-svgrepo-com.svg"}
    ]

    return (   
      <div className="w-[100%] flex flex-row justify-center">     
      <div className="max-w-[800px] min-h-[400px] gap-5 grid grid-cols-12 grid-rows-2 mt-20">   
      <Card isFooterBlurred className="w-full h-[280px] col-span-12 sm:col-span-7 bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 p-8 flex-col justify-evenly hover:transform hover:scale-105 hover:z-10 transition duration-400">
         <div className="flex flex-row justify-between w-[150px] items-center"> 
          <Avatar isBordered color="warning" src="/yeabsira.jpg" />
          <h4 className="text-customColor font-semibold text-xl">About me</h4>
        </div>
          <p className="text-sm opacity-80">My name is Yeabsira and I am passionate about tech, math, and engineering. I have experience in programming and cloud computing. Eager to learn and grow, I seize every opportunity to expand my knowledge and skill set. I am looking forward to joining the tech and engineering industry. My name is Yeabsira and I am passionate about tech, math, and engineering.</p>
      </Card>  
      <Card isFooterBlurred className="w-full h-[280px] col-span-12 sm:col-span-5 hover:transform hover:scale-105 hover:z-10 transition duration-400" id="hobbies">
      <div className="w-full h-[240px] flex flex-col justify-evenly p-5 pl-8 items-center">
        <h4 className="text-customColor font-semibold text-xl">Hobbies</h4>

        <div className="flex flex-col justify-evenly h-[150px]">
         {hobbies.map((hobby)=>{
          return (
          <div className="flex flex-row items-center gap-5 w-40 h-10">
              <Image src={hobby.icon} alt={hobby.name} key={hobby.id} width={30} height={30}/>
              <div>{hobby.name}</div> 
          </div>    
        )
         })}
        </div> 
      </div>   
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available on.</p>
            <p className="text-black text-tiny">Soundcloud.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Check out
          </Button>
        </CardFooter>
      </Card>     
      <Card className="col-span-12 sm:col-span-4 h-[230px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
          <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
        </CardHeader>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[230px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
          <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
        </CardHeader>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[230px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
          <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
        </CardHeader>
      </Card>
    </div>
    </div>
    );
  }