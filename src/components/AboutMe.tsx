import { Avatar } from "@nextui-org/avatar";
import { Card } from "@nextui-org/card";

export default function AboutMe(){
    return(
        <Card
          isFooterBlurred
          className="w-full h-[320px] col-span-12 sm:col-span-7 bg-gradient-to-l from-[#1ED760]-200 via-fuchsia-200 to-stone-100 p-8 flex-col justify-evenly hover:transform hover:scale-105 hover:z-10 transition duration-400 overflow-scroll"
        >
          <div className="w-[100%] h-[50px] flex flex-row justify-between items-center">
            <Avatar isBordered color="success" src="/yeabsira.jpg" size="lg"/>
            <h4 className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500 text-5xl">
              About me
            </h4>
          </div>
          <p className="text-base opacity-80 mt-2">
            My name is Yeabsira and I am passionate about tech, math, and engineering. I have experience in programming and cloud computing. Currently working around <span className="font-semibold">Firebase</span>, <span className="font-semibold">Next.js</span>, and <span className="font-semibold">Tailwind</span>.
          </p>
        </Card>
    )
}
