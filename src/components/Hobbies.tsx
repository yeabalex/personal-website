import { Card, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Hobbies(){
    const hobbies = [
        { name: "Drum Machine", id: "1", icon: "/logos/drum-machine.png" },
        { name: "Geoguesser", id: "2", icon: "/logos/country-location-icon.svg" },
        { name: "Cycling", id: "3", icon: "/logos/bike-svgrepo-com.svg" },
      ];
    return(
        <Card
          isFooterBlurred
          className="w-full h-[280px] hover:transform hover:scale-105 hover:z-10 transition duration-400"
          id="hobbies"
        >
          <div className="w-full h-[240px] flex flex-col justify-evenly p-5 pl-8 items-center">
            <h4 className="text-customColor font-semibold text-xl">Hobbies</h4>

            <div className="flex flex-col justify-evenly h-[150px]">
              {hobbies.map((hobby) => (
                <div className="flex flex-row items-center gap-5 w-40 h-10" key={hobby.id}>
                  <Image src={hobby.icon} alt={hobby.name} width={30} height={30} />
                  <div>{hobby.name}</div>
                </div>
              ))}
            </div>
          </div>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available on.</p>
              <p className="text-black text-tiny">Soundcloud.</p>
            </div>
            <Button className="text-tiny bg-[#1DB954] text-white"  radius="full" size="sm">
              Check out
            </Button>
          </CardFooter>
        </Card>
    )
}