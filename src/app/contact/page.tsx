'use client'
import React, { useRef, useState } from 'react';
import Contact from '@/components/Contact';
import emailjs from '@emailjs/browser';

const ContactMe: React.FC = () => {
  
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

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
        console.log('Email sent successfully!');
      },
      (error: string) => {
        console.error('Email sending failed:', error);
      }
    );
};


  return (
<>
      <Contact 
        name={setN}
        email={setEmail}
        message={setM}
        sendEmail={sendEmail}
      />
</>      
  );
};

export default ContactMe;
