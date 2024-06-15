'use client'

import Image from 'next/image';
import yeab from '@/../public/yeabsira.jpg'
import { useState, useEffect } from 'react';
import NavBar from '@/components/Nav';
import NavBar2 from '@/components/Nav2';
import ImageComp from '@/components/Image';
import ResumePage from '@/components/Resume'

export default function Resume() {
  const [clicked, setClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function toggleClicked() {
    setClicked(prev => !prev);
    window.scrollTo(0,0)
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
  <div className="flex-[0.64] pl-14">
        <ResumePage/>
    </div>
    </div>
   </div> 
  );
}
