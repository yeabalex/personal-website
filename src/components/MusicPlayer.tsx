import React, { useState, useRef } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Lottie from 'lottie-react';
import waves from "@/../public/icons/waves.json"
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@nextui-org/react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function MusicPlayer(params: Params) {
  const [liked, setLiked] = useState(false);
  const [play, setPlay] = useState(false)

  const audioPlayer = useRef<HTMLAudioElement>(null)

  function togglePlay(){
    if(!play){
    audioPlayer.current?.play()
    }else{
      audioPlayer.current?.pause()
    }
    setPlay(prev=>!prev)
  }
  
  return (
    <Card
    isBlurred
    className="flex flex-row items-center justify-center border-none w-[full] h-[320px] col-span-10 sm:col-span-7 relative bg-white hover:transform hover:scale-105 hover:z-10 transition duration-400 cursor-pointer"
    shadow="sm"
  >
  <div className="w-[100%] relative">
  <div className="absolute top-[70%] left-[33%] z-10 opacity-1000 rounded hover:opacity-70 transition duration-400 flex flex-row justify-center items-center">
           <div className="w-[210px] flex flex-row justify-evenly transition duration-400 gap-10"> 

            <Button
            isIconOnly
            radius="full"
            variant="light"
            onPress={params.prevSong}
            >
              <FontAwesomeIcon icon={faBackward} style={{color:"#fff"}} size="2xl"/>
            </Button>  
            
            <Button
            isIconOnly
            onPress={params.nextSong}
            radius="full"
            variant="light"
            >
              <FontAwesomeIcon icon={faForward} style={{color:"#fff"}} size="2xl"/>
            </Button>

           </div>
          </div>  
   <iframe className="border-radius:12px bg-black" src={`https://open.spotify.com/embed/track/${params.id}`} width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div> 
  </Card>
  );
}
