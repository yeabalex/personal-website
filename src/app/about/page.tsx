'use client'

import { useState, useEffect } from "react";
import "../globals.css";
import { auth } from "./token";
import axios from 'axios';
import MusicPlayer from "@/components/MusicPlayer";
import AboutMe from "@/components/AboutMe";
import Hobbies from "@/components/Hobbies";
import Twitter from "@/components/Twitter";
import Load from "../load";

async function fetchData() {
  const res = await axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/playlists/2T186Dbx0iUPTLaxxZiuzg/tracks',
    headers: {
      Authorization: `${auth[0].token_type} ${auth[0].access_token}`,
    },
  });
  return res.data.items;
}

export default function About() {
  const [playlistInfo, setPlayListInfo] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setPlayListInfo(data);
    };
    getData();
  }, []); 
  
  interface Song {
    track: {
      name: string,
      preview_url: string,
      duration_ms: number,
      artists: [{
        name: string
      }],
      album: {
        images: [
          {
            url: string
          }
        ]
      }
    }
  }

  const songs: Song[] = playlistInfo;

  if (!songs.length) {
    return <div>Loading...</div>;
  }

  const artwork: string = songs[2].track.album.images[0].url;
  const songName: string = songs[2].track.name;
  let artistsArray: string[] = []; 

  for (let i = 0; i < songs[2].track.artists.length; i++) {
    artistsArray.push(songs[2].track.artists[i].name);
  }

  return (
    <div className="w-[100%] flex flex-row justify-center">
      <div className="max-w-[800px] min-h-[400px] gap-5 grid grid-cols-12 grid-rows-2 mt-20">
        <AboutMe />
        <Hobbies />
        <div className="w-[800px] flex flex-row justify-between">
          <Twitter />
          <MusicPlayer
            songName={songName}
            artistName={artistsArray.join(", ")}
            albumCover={artwork}
          />
        </div>
      </div>
    </div>
  );
}
