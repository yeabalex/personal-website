'use client'

import { useState, useMemo } from "react";
import {Input} from "@nextui-org/input";
import {Textarea} from "@nextui-org/input";
import { Button } from "@nextui-org/react";

export default function Contact() {

    const [input, setInput] = useState("a@b.com")

    function isValid(input: string){
        return input.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)!==null;
    }

    let checkEmail = useMemo(()=>{
        return isValid(input)
    },[input])



  return (
    <div className="flex items-center justify-center min-h-screen w-[91%] mt-5">
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="mb-6">What should I serve?</p>
        <form>
          <div className="grid grid-cols-2 gap-6">
            <div className="mb-4">
                <Input type="name" label="Name" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
            <Input
                type="email"
                label="Email"
                defaultValue="username@domain.extension"
                isInvalid={!checkEmail}
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
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};


