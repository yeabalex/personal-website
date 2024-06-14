'use client'

import {docs} from './api/firebase.js'
import { Suspense, lazy } from "react"
import { Spinner } from '@nextui-org/spinner'
import ImageComp from '@/components/Image'
import NavBar from '@/components/Nav'
import { useState, useEffect } from 'react'
import NavBar2 from '@/components/Nav2'

export default function Works(){
    const works = docs()
    const Projects = lazy(()=>import('@/components/Projects'))
    const [clicked, setClicked] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    function toggleClicked() {
      setClicked(prev => !prev);
      return clicked;
    }
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0 && clicked) {
          setIsScrolled(true);
          setClicked(false);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [clicked]);


    return (
    <div
      className={`bg-white flex flex-row justify-center items-center transition-all duration-500 ${
        clicked && !isScrolled ? 'w-[88%] mt-80' : 'w-[100%]'
      }`}
    >
      <NavBar toggle={toggleClicked} />
      <NavBar2 clicked={clicked}/>
      <div className="w-[100%] flex">
            <ImageComp/>
        <div className="flex-[0.64] mt-16 pl-14">
        <Suspense fallback={<Spinner label="" color="default"/>}> 
                <Projects/>
        </Suspense>
        </div>
      </div>
    </div>
    )
}
