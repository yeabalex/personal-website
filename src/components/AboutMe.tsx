import { Avatar } from "@nextui-org/avatar";
import { Card } from "@nextui-org/card";

export default function AboutMe(){
    return(
        <Card
          isFooterBlurred
          className="w-full h-[280px] col-span-12 sm:col-span-7 bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 p-8 flex-col justify-evenly hover:transform hover:scale-105 hover:z-10 transition duration-400"
        >
          <div className="flex flex-row justify-between w-[150px] items-center">
            <Avatar isBordered color="warning" src="/yeabsira.jpg" />
            <h4 className="text-customColor font-semibold text-xl">About me</h4>
          </div>
          <p className="text-sm opacity-80">
            My name is Yeabsira and I am passionate about tech, math, and engineering. I have experience in programming and cloud computing. Eager to learn and grow, I seize every opportunity to expand my knowledge and skill set. I am looking forward to joining the tech and engineering industry.
          </p>
        </Card>
    )
}