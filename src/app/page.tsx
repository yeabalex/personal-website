'use client';

import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';
import About from './(about)/about';
import Logos from '@/components/LogosList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NavBar from '@/components/Nav';
import ImageComp from '@/components/Image';
import NavBar2 from '@/components/Nav2';
import styled from 'styled-components'

export default function Home() {

  const H1 = styled.h1
  `
    @media(max-width: 1096px){
      font-size: 50px;
    }
    @media(max-width: 576px){
      font-size: 40px
    }
    @media(max-width: 450px){
      font-size: 35px
    }
  `

  const ResponsiveContainer = styled.div
  `
    @media(max-width: 1001px){
      flex-direction: column;
    }
  `

  const ResponsivePadding = styled.div
  `
    @media(max-width: 630px){
      padding-left: 50px;
    }
    @media(max-width: 450px){
      padding-left: 40px
    }  
  `


  const [clicked, setClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function toggleClicked() {
    window.scrollTo(0,0)
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
      className={`bg-white flex flex-row justify-center items-center transition-all duration-500 relative ${
        clicked && !isScrolled ? 'w-[88%] mt-80' : 'w-[100%]'
      }`}
    >
                  <div className="flex items-center space-x-5 social-links mt-5 absolute bottom-5 right-10">
              <a
                href="https://github.com/yeabsira-alemu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ width: '35px', color: '#000' }}
                  size="1x"
                />
              </a>
              <a
                href="https://linkedin.com/in/yeabsira-alemu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ width: '35px', color: '#0762C8' }}
                  size="1x"
                />
              </a>
              <a
                href="https://x.com/yeabalex_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  style={{ width: '35px', color: '#000' }}
                  size="1x"
                />
              </a>
              <a href="mailto:yeabalex18@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} style={{ width: '35px' }} size="1x" />
              </a>
            </div>
      <NavBar2 clicked={clicked}/>
      <NavBar toggle={toggleClicked} />
      <ResponsiveContainer className="w-[100%] flex">
        <ImageComp />
        <div className="flex-[0.64] mt-52">
          <ResponsivePadding className="h-[210px] flex flex-col justify-between pl-24 relative">
            <div className="absolute w-[36px] h-[36px] -top-2 left-[80px] rounded-full bg-[#1DB954] z-0"></div>
            <div className="absolute w-[45px] h-[45px] top-[55px] right-[144px] rounded-full bg-[#1DB954]"></div>
            <p className="font-bold text-customColor z-10">HELLO, THERE</p>
            <H1 className="text-6xl m-0 font-extrabold text-customColor z-10">I&apos;M YEABSIRA ALEMU</H1>
            <div className="text-2xl opacity-70">
              <Typewriter
                words={['SOFTWARE ENGINEER', 'SOLUTION ARCHITECT', 'TECH ENTHUSIAST', 'PROGRAMMER']}
                typeSpeed={200}
                deleteSpeed={150}
                delaySpeed={2000}
                loop={0}
                cursor={true}
              />
            </div>
            <Button
              color="warning"
              variant="solid"
              className="w-[163px] bg-[#1DB954]"
            >
              <p className="text-white font-bold">DOWNLOAD CV</p>
            </Button>
            <Logos />

          </ResponsivePadding>
          <About />
        </div>
      </ResponsiveContainer>
    </div>
  );
}
