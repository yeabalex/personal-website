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
      // Assuming params.name and params.email are functions passed in correctly
      params.name(name);
      params.email(input);
      params.message(message)
     // Call the sendEmail function from params
    }
  
    return (
      <div className="flex items-center justify-center min-h-screen w-full">
        <div className="w-full max-w-4xl p-8">
          <h1 className="text-3xl font-bold mb-4">Contact</h1>
          <p className="mb-6">Let's chat!</p>
          <form onSubmit={params.sendEmail}>
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
                onValueChange={setMessage} // Assuming you want to capture message input
              />
            </div>
            <div className="flex items-center justify-between">
              <Button
                type="submit" // Change type to submit to trigger form submission
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
  