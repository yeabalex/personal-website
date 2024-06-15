import { useState, useMemo } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact(params: Params) {
  const [input, setInput] = useState("");
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState("Send");
  const [buttonDisabled, setButtonDisabled] = useState(false);

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
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold">CONTACT ME</h1>
        <div className='bg-[#1DB954] w-[50px] h-[10px] mt-2 rounded-full'></div>
        <form onSubmit={params.sendEmail} className="mt-14">
          <div className="grid grid-cols-2 gap-6">
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
                className="max-w-[404px]"
              />
            </div>
          </div>
          <div className="mb-4">
            <Textarea
              label="Query"
              placeholder="Enter your description"
              className="max-w-[832px]"
              onValueChange={setMessage}
            />
          </div>
          <div className="flex items-center justify-between w-[450px]">
            <Button
              type="submit"
              className="bg-[#1DB954] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onPress={setInfo}
              disabled={buttonDisabled}
            >
              {buttonText}
            </Button>
            <div>{params.finalMessage}</div>
          </div>
          <div className="flex gap-5 my-10 items-center">
            <div className="w-[230px] h-[170px] shadow-md border-customColor flex flex-col justify-around items-center">
              <div className="flex items-center "><FontAwesomeIcon icon={faLocationDot} style={{ color: "#1DB954" }} size="2x" /></div>
              <div>
                <h1>Address</h1>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className="w-[230px] h-[170px] shadow-md border-customColor flex flex-col justify-around items-center">
              <div className="flex items-center "><FontAwesomeIcon icon={faPhone} style={{ color: "#1DB954" }} size="2x" /></div>
              <div>
                <h1>Phone</h1>
                <p>+123456789</p>
              </div>
            </div>
            <div className="w-[230px] h-[170px] shadow-md border-customColor flex flex-col justify-around items-center">
              <div className="flex items-center "><FontAwesomeIcon icon={faEnvelope} style={{ color: "#1DB954" }} size="2x" /></div>
              <div>
                <h1>Email</h1>
                <p>example@example.com</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
