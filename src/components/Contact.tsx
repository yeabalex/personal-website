import { useState, useMemo, useEffect } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export default function Contact(params: Params) {

  const ResponsiveContact = styled.div`
    @media(max-width: 1200px){
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  `;
  const ResponsiveInfo = styled.div`
    @media(max-width: 700px){
      flex-direction: column;
    }
  `;

  const [input, setInput] = useState("");
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState("Send");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
  
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 1200);
    };

    
    handleResize();

    
    window.addEventListener('resize', handleResize);

    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function isValid(input: string) {
    return input.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) !== null;
  }

  useMemo(() => {
    setName(name);
  }, [name]);

  useMemo(() => {
    setInput(input);
  }, [input]);

  useMemo(() => {
    setMessage(message);
  }, [message]);

  useMemo(() => {
    if (params.finalMessage === "Email sent successfully! I will contact you soon.") {
      setButtonText("Sent");
      setButtonDisabled(true);
    }
  }, [params.finalMessage]);

  function setInfo() {
    params.name(name);
    params.email(input);
    params.message(message);
  }

  return (
    <div className="flex items-center justify-center w-full overflow-x-hidden">
      <div className="w-full max-w-4xl px-4">
        <h1 className="text-4xl font-extrabold">CONTACT ME</h1>
        <div className='bg-[#1DB954] w-[50px] h-[10px] mt-2 rounded-full'></div>
        <form onSubmit={params.sendEmail} className="mt-14">
        <div className={`grid grid-cols-${isResponsive ? '1' : '2'} gap-6 pr-4`}>
            <div className="mb-4">
              <Input type="text" label="Name" placeholder="Enter your name" onValueChange={setName} />
            </div>
            <div className="mb-4">
              <Input
                type="email"
                label="Email"
                isInvalid={!isValid(input)}
                errorMessage="Please enter a valid email"
                onValueChange={setInput}
                className="w-full"
              />
            </div>
          </div>
          <div className="mb-4 pr-4">
            <Textarea
              label="Query"
              placeholder="Enter your description"
              className="w-full"
              onValueChange={setMessage}
            />
          </div>
          <div className="flex flex-col justify-between min-w-5">
            <Button
              type="submit"
              className="bg-[#1DB954] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-5"
              onPress={setInfo}
              disabled={buttonDisabled}
            >
              {buttonText}
            </Button>
            <div>{params.finalMessage}</div>
          </div>
          <ResponsiveInfo className="flex flex-wrap gap-5 my-10 items-center pr-5">
            <div className="w-[230px] h-[170px] shadow-md border-customColor flex flex-col justify-around items-center">
              <div className="flex items-center"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#1DB954" }} size="2x" /></div>
              <div>
                <h1>Address</h1>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className="w-[230px] h-[170px] shadow-md border-customColor flex flex-col justify-around items-center">
              <div className="flex items-center"><FontAwesomeIcon icon={faPhone} style={{ color: "#1DB954" }} size="2x" /></div>
              <div>
                <h1>Phone</h1>
                <p>+123456789</p>
              </div>
            </div>
            <div className="w-[230px] h-[170px] shadow-md border-customColor flex flex-col justify-around items-center">
              <div className="flex items-center"><FontAwesomeIcon icon={faEnvelope} style={{ color: "#1DB954" }} size="2x" /></div>
              <div>
                <h1>Email</h1>
                <p>example@example.com</p>
              </div>
            </div>
          </ResponsiveInfo>
        </form>
      </div>
    </div>
  );
}
