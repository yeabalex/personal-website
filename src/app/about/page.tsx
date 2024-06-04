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

  // Define the structure for song position
  interface SongPosition {
    backward: number,
    forward: number
  }


  const [playlistInfo, setPlayListInfo] = useState<Song[]>([]);
  const [token, setToken] = useState('');
  const [index, setIndex] = useState(0);
  const [songPosition, setSongPosition] = useState<SongPosition>({ backward: 0, forward: 0 });

  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

  // Fetch Spotify token
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

    // Refresh token every hour
    const intervalId = setInterval(getToken, 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [clientId, clientSecret]);


  // Fetch playlist data
  useEffect(() => {
    const fetchData = async () => {
      if (!token) return;

      try {
        const res = await axios({
          method: 'get',
          url: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX4AyFl3yqHeK/tracks',
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


  // Handle song index from localStorage to prevent reseting when refresh
  useEffect(() => {
    const savedIndex = localStorage.getItem('currentSongIndex');
    if (savedIndex !== null) {
      setIndex(parseInt(savedIndex));
    }

    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % (playlistInfo.length || 1);
        localStorage.setItem('currentSongIndex', newIndex.toString());
        return newIndex;
      });
    }, 120000);

    return () => clearInterval(intervalId);
  }, [playlistInfo.length]);


  // Update song position
  useEffect(() => {
    setSongPosition({ backward: index, forward: index });
  }, [index]);


  // Function to play previous song
  const prevSong = () => {
    setSongPosition((prev) => {
      const newIndex = prev.backward > 0 ? prev.backward - 1 : playlistInfo.length - 1;
      setIndex(newIndex);
      localStorage.setItem('currentSongIndex', newIndex.toString());
      return { ...prev, backward: newIndex };
    });
  };


  // Function to play next song
  const nextSong = () => {
    setSongPosition((prev) => {
      const newIndex = (prev.forward + 1) % playlistInfo.length;
      setIndex(newIndex);
      localStorage.setItem('currentSongIndex', newIndex.toString());
      return { ...prev, forward: newIndex };
    });
  };


  if (!playlistInfo.length) {
    return <div>Loading...</div>;
  }
  
  // Get current song information
  const artwork: string = playlistInfo[index].track.album.images[0].url;
  const songName: string = playlistInfo[index].track.name;
  const artistsArray: string[] = playlistInfo[index].track.artists.map(artist => artist.name);
  const preview: string = playlistInfo[index].track.preview_url;

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
              index={index}
              prevSong={prevSong}
              nextSong={nextSong}
              preview={preview}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
