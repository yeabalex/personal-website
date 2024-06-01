import { useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Slider } from "@nextui-org/slider";
import HeartIcon from "@/../public/icons/Like.svg";
import PauseCircleIcon from "@/../public/icons/Pause.svg";
import NextIcon from "@/../public/icons/Next.svg";
import PreviousIcon from "@/../public/icons/Previous.svg";
import RepeatOneIcon from "@/../public/icons/Repeat.svg";
import ShuffleIcon from "@/../public/icons/Shuffle.svg";

export default function MusicPlayer() {
  const [liked, setLiked] = useState(false);

  return (
    <Card
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
      style={{ maxWidth: "580px", height: "230px" }}
    >
      <CardBody>
        <div className="flex items-center gap-36">
          <div className="flex flex-row">
          <div className="relative w-24 h-24">
            <Image
              alt="Album cover"
              objectFit="cover"
              src="/yeab.png"
              layout="fill"
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Daily Mix
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">12 Tracks</p>
            <h1 className="text-lg font-bold mt-2">Frontend Radio</h1>
          </div>
        </div>
          <Button
            className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            onPress={() => setLiked((v) => !v)}
          >
            <Image
              alt="Heart"
              src={HeartIcon}
              width={24}
              height={24}
            />
          </Button>
        </div>

        <Slider
          aria-label="Music progress"
          classNames={{
            track: "bg-gray-300 dark:bg-gray-600 rounded-full",
            thumb: "w-3 h-3 bg-gray-800 dark:bg-white border-2 border-white rounded-full",
          }}
          defaultValue={33}
          size="sm"
        />
        <div className="flex justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">1:23</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">4:32</p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-4">
          <Button
            className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <Image alt="Repeat" src={RepeatOneIcon} width={20} height={20}/>
          </Button>
          <Button
            className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <Image alt="Prev" src={PreviousIcon} width={20} height={20}/>
          </Button>
          <Button
            className="flex items-center justify-center w-12 h-12 rounded-full text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <Image
              alt="Pause"
              src={PauseCircleIcon}
              width={32}
              height={32}
            />
          </Button>
          <Button
            className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <Image alt="Next" src={NextIcon} width={20} height={20}/>
          </Button>
          <Button
            className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <Image alt="Shuffle" src={ShuffleIcon} width={20} height={20}/>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
