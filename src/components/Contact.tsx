import { useState, useMemo } from "react";
import { Input,Textarea, Button } from "@nextui-org/react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Contact(params: Params){
    const [input, setInput] = useState("a@b.com");
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
  
    function isValid(input: string){
      return input.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) !== null;
    }
  
    useMemo(()=>{
        setName(name)
    },[name])
    
    let checkEmail = useMemo(()=>{
        return isValid(input)
    },[input])
    
    useMemo(()=>{
        setMessage(message)
    },[message])


    function setInfo() {
      params.name(name);
      params.email(input);
      params.message(message)
    }
  
    return (
      <div className="flex items-center justify-center w-full">
        <div className="w-full max-w-4xl">
        <div className='mb-8 bg-gradient-to-br from-yellow-400 via-deep-pink-500 to-cyan-500 w-[168px] flex justify-center rounded-lg p-1'>
        <p className="font-semibold">Lets chat!</p>
        </div>
          <h1 className="text-5xl font-extrabold">CONTACT ME</h1>
          <div className='bg-[#FFC815] w-[50px] h-[10px] mt-2'></div>
          <form onSubmit={params.sendEmail} className="mt-20">
            <div className="grid grid-cols-2 gap-6">
              <div className="mb-4">
                <Input type="text" label="Name" placeholder="Enter your name" onValueChange={setName} />
              </div>
              <div className="mb-4">
                <Input
                  type="email"
                  label="Email"
                  defaultValue="username@domain.extension"
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
            <div className="flex items-center justify-between">
              <Button
                type="submit" 
                className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onPress={setInfo}
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  