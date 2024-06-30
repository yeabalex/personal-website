'use client'
import React, { useRef, useState, useEffect } from 'react';
import Contact from '@/components/Contact';
import emailjs from '@emailjs/browser';
import ImageComp from '@/components/Image';
import NavBar from '@/components/Nav';
import NavBar2 from '@/components/Nav2';
import { useMetaTags } from 'react-metatags-hook';

const ContactMe: React.FC = () => {

  useMetaTags({
    title: 'Yeabsira | Contact',
  },[])
  
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [clicked, setClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [finalMessage, setFianlMessage] = useState<string>("")
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1001);
    };

    // Initial check
    handleResize();

    // Event listener for resize
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);


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

  function setN(n:string){
      setName(n)
  }
  function setE(em: string){
    setEmail(em)
  }
  function setM(m:string){
    setMessage(m)
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const templateParams = {
    to_name: 'Yeabsira',
    from_name: `${name} ${email}`,
    message: message
  };

  emailjs
    .send('service_fi65v96', 'template_cfz7iio', templateParams, 'IjIoRVo3ZyRRuj3NN')
    .then(
      () => {
        setFianlMessage('Email sent successfully! I will contact you soon.');
      },
      (error: string) => {
        setFianlMessage(`Email sending failed: ${error}`);
      }
    );
};


  return (
    <div
      className={`bg-white flex flex-row justify-center items-center transition-all duration-500 ${isSmallScreen?'h-full':''} ${
        clicked && !isScrolled ? 'w-[88%] mt-80' : 'w-[100%]'
      }`}
    >
      <NavBar toggle={toggleClicked} />
      <NavBar2 clicked={clicked}/>
      <div className={`w-[100%] flex ${isSmallScreen ? 'flex-col' : ''}  ${isSmallScreen?'h-full items-center':'items-start'}`}>
            {isSmallScreen?null:<ImageComp/>}
        <div className="flex-[0.64] mt-16 pl-10 pr-5">
      <Contact 
        name={setN}
        email={setEmail}
        message={setM}
        sendEmail={sendEmail}
        finalMessage={finalMessage}
      />
        </div>
      </div>
    </div>     
  );
};

export default ContactMe;
