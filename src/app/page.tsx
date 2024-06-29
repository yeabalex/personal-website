'use client';


import { Button } from '@nextui-org/react';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NavBar from '@/components/Nav';
import ImageComp from '@/components/Image';
import NavBar2 from '@/components/Nav2';
import styled from 'styled-components'
import Dots from '@/../public/Dots.png'
import Outline from '@/../public/Style=Outline.svg'
import Image from 'next/image';
import { GlowingStarsBackgroundCard } from '@/components/ui/glowing-stars';

export default function Home() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    function toggleLoading() {
      setLoading(false);
    }

    const timeoutId = setTimeout(toggleLoading, 3000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1001);
    };

 
    handleResize();

  
    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const H1 = styled.h1
  `
    @media(min-width: 1400px){
      font-size: 70px;
    }
    @media(min-width: 1700px){
      font-size: 90px;
    }
    @media(max-width: 1096px){
      font-size: 50px;
    }
    @media(max-width: 576px){
      font-size: 45px
    }
    @media(max-width: 450px){
      font-size: 40px
    }
  `



  const ResponsivePadding = styled.div
  `
    padding-left: 90px;
    @media(max-width: 1000px){
      padding-left: 0px;
    }
    @media(max-width: 630px){
      padding-left: 30px;
    }
     @media(max-width: 576px){
    
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
      className={`bg-white mb-10 flex flex-row justify-center items-center transition-all duration-500 relative ${
        clicked && !isScrolled ? 'w-[88%] mt-80' : 'w-[100%]'
      }`}
    >

      <NavBar2 clicked={clicked}/>
      <NavBar toggle={toggleClicked} />
      <div className={`w-[100%] flex ${isSmallScreen?"flex-col h-full":""} items-center justify-start`}>
        <ImageComp />
        <div className={`flex-[0.64] ${isSmallScreen?"mt-20":null}`}>
        
         
          <ResponsivePadding className={`min-h-[240px] flex flex-col justify-between relative ${isSmallScreen?"mb-32":""}`}>
            <div className="absolute w-[36px] h-[36px] -top-2 left-[80px] rounded-full bg-[#D6DAD4] z-0"></div>
            <div className="absolute w-[45px] h-[45px] top-[55px] right-[144px] rounded-full bg-[#D6DAD4]"></div>
            <p className="font-bold text-[#14242E] z-10">HELLO, THERE</p>
            <H1 className="text-6xl m-0 font-black text-[#14242E] z-10">I&apos;M YEABSIRA ALEMU</H1>
            <div className="text-xl opacity-70 text-[#14242E] mb-3">
              <Typewriter
                words={['SOFTWARE ENGINEER', 'SOLUTION ARCHITECT', 'TECH ENTHUSIAST', 'PROGRAMMER']}
                typeSpeed={200}
                deleteSpeed={150}
                delaySpeed={2000}
                loop={0}
                cursor={true}
              />
            </div>
          <a
              href="https://drive.google.com/file/d/10DkZ_odP6KIQPS8uAsEiyB3RwEb7JBrV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
          <div className='relative z-10'> 
            <Button
              color="warning"
              variant="solid"
              className="w-[163px] h-[45px] bg-[#14242E]"
              radius='sm'
            >
              <p className="text-white font-bold">RESUME/CV</p>
            </Button>
            </div>
            </a>
          </ResponsivePadding>
        </div>
      </div>
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
    </div>
  );
}
