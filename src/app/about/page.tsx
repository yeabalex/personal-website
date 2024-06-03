'use client'

import { useState, useEffect } from "react";
import "../globals.css";
import axios from 'axios';
import MusicPlayer from "@/components/MusicPlayer";
import AboutMe from "@/components/AboutMe";
import Hobbies from "@/components/Hobbies";
import Twitter from "@/components/Twitter";

export default function About() {
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

  const [playlistInfo, setPlayListInfo] = useState([]);
  const [token, setToken] = useState('');
  const [index, setIndex] = useState(0);

  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

  useEffect(() => {
    const getToken = async () => {
      try {
        const res = await axios({
          method: 'post',
          url: 'https://accounts.spotify.com/api/token',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`)
          },
          data: "grant_type=client_credentials"
        });
        setToken(res.data.access_token);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    getToken();

    const intervalId = setInterval(getToken, 60 * 60 * 1000); 
    return () => clearInterval(intervalId);
  }, [clientId, clientSecret]);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) return;

      try {
        const res = await axios({
          method: 'get',
          url: 'https://api.spotify.com/v1/playlists/2T186Dbx0iUPTLaxxZiuzg/tracks',
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPlayListInfo(res.data.items);
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (playlistInfo.length || 1));
    }, 90000);

    return () => clearInterval(intervalId);
  }, [playlistInfo.length]);

  const songs: Song[] = playlistInfo;

  if (!songs.length) {
    return <div>Loading...</div>;
  }

  const artwork: string = songs[index].track.album.images[0].url;
  const songName: string = songs[index].track.name;
  const artistsArray: string[] = songs[index].track.artists.map(artist => artist.name);

  return (
    <div className="w-[100%] flex flex-col justify-center"> 
      <div className="w-[100%] flex flex-row justify-center">
        <div className="max-w-[800px] min-h-[400px] gap-5 grid grid-cols-12 grid-rows-2 mt-20">
          <AboutMe />
          <Hobbies />
          <div className="w-[800px] flex flex-row gap-5 justify-between">
            <Twitter />
            <MusicPlayer
              songName={songName}
              artistName={artistsArray.join(", ")}
              albumCover={artwork}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
