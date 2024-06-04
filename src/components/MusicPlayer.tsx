import React, { useState, useRef } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Load from "@/app/load";
import Lottie from 'lottie-react';
import waves from "@/../public/icons/waves.json"
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@nextui-org/react";

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
      className="border-none w-[550px] h-[250px] relative bg-white hover:transform hover:scale-105 hover:z-10 transition duration-400 cursor-pointer"
      shadow="sm"
    >
      <CardBody className="bg-white/70 p-4 rounded-lg">
        <div className="flex flex-row justify-evenly gap-16 items-center min-h-[215px]">
         <div className="relative"> 
          <Image
            alt="Album cover"
            className="object-cover h-[200px] rounded-lg"
            shadow="md"
            src={params.albumCover}
            width="100%"
          />
          <div className="w-[200px] h-[200px] bg-black absolute top-0 z-10 opacity-0 rounded hover:opacity-70 transition duration-400 flex flex-row justify-center items-center">
           <div className="w-[210px] flex flex-row justify-evenly transition duration-400"> 

            <Button
            isIconOnly
            radius="full"
            variant="light"
            onPress={params.prevSong}
            >
              <FontAwesomeIcon icon={faBackward} style={{color:"#fff"}} size="2x"/>
            </Button>  
            
            <Button
            isIconOnly
            onPress={togglePlay}
            radius="full"
            variant="light"
            >
            {play?<FontAwesomeIcon icon={faPause} style={{color: "#ffffff",}} size="3x"/>:<FontAwesomeIcon icon={faPlay} style={{color: "#ffffff",}} size="3x"/>}
            </Button>  
        
            <Button
            isIconOnly
            onPress={params.nextSong}
            radius="full"
            variant="light"
            >
              <FontAwesomeIcon icon={faForward} style={{color:"#fff"}} size="2x"/>
            </Button>

           </div>
          </div>
          </div>
          <div className="flex flex-col w-[40%]">
            <div>
              <FontAwesomeIcon icon={faSpotify} style={{ color: "#1ed760" }} size="2xl" />
            </div>
            <div className="flex justify-between items-start mt-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-start -ml-[12px]">
                  <div className="w-[50px] h-[50px]">
                  <Lottie animationData={waves}/>
                  </div>
                  <p className="text-base text-[#1ED760] font-semibold">Now playing</p>
                </div>
                <h1 className="text-xl font-bold leading-5">{params.songName}</h1>
                <p className="text-sm opacity-50">{params.artistName}</p>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2 absolute top-4 right-4"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                {liked ? (
                  <FontAwesomeIcon icon={faHeart} style={{ color: "#1ed760" }} size="2x" />
                ) : (
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{
                      "--fa-secondary-color": "#000000",
                      "--fa-primary-color": "#000000",
                      "--fa-primary-opacity": ".1",
                    } as React.CSSProperties}
                    size="2x"
                  />
                )}
              </Button>
            </div>
          </div>
        </div>
        <audio ref={audioPlayer} src={params.preview}/>
      </CardBody>
    </Card>
  );
}
