import { Card, CardHeader } from "@nextui-org/card";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@nextui-org/react";

export default function Twitt(){
   return(
   <Card className="w-[full] h-[280px] bg-black hover:transform hover:scale-105 hover:z-10 transition duration-400 flex flex-row items-center justify-center relative cursor-pointer">
        <FontAwesomeIcon icon={faGithub} style={{color: "#fff",}} size="10x" />
        <div className="absolute w-[100%] h-[100%] z-50 bg-black opacity-0 hover:bg-black hover:opacity-80 flex flex-row justify-center items-center">
      <a href="https://github.com/yeabalex" target="_blank" rel="noopener noreferrer">
        <Button
            radius="full"
            variant="light"
            size="lg"
            >   
            <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",}} size="7x" />  
         </Button>
      </a>      
        </div>
    </Card>
   )
}