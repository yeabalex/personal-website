'use client'
import React, { useEffect, useState } from 'react';
import { Button } from "@nextui-org/button";
import Image from 'next/image';
import { docs } from '@/app/works/api/firebase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure} from "@nextui-org/modal";
import Topography from '@/../public/Topographic 6.png'

export default function Projects() {
  interface Docs {
    name:string,
    tools:[],
    id:string
  }

  const [projects, setProjects] = useState<Docs[]>([]);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const catagory = ['All', 'Web', 'Cloud', 'Tools']

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedDocs = await docs();
      
        const projectsWithJoinedTools = fetchedDocs.map(project => ({
          ...project,
          tools: project.tools.join(', '), 
        }));
        setProjects(projectsWithJoinedTools);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='relative'>

      <header className="mb-8">
      <div className='mb-8 bg-gradient-to-br from-yellow-400 via-deep-pink-500 to-cyan-500 w-[168px] flex justify-center rounded-lg p-1'>
        <p className="text-white font-semibold text-sm">VISIT MY PORTFOLIO</p>
        </div>
        <h1 className="text-4xl font-extrabold">WORKS</h1>
        <div className='bg-[#FFC815] w-[50px] h-[10px] mt-2'></div>
        <div className='flex gap-5 w-[100%] justify-center mt-9'>
        {catagory.map(cat=>(<Button>{cat}</Button>))}
        </div>
      </header>
      <main>
        <div className="grid grid-cols-2 gap-4 -mt-3 mb-10">
          {projects.map((project, index) => (
            <div key={index} className="flex items-center justify-between bg-white border-small border-customColor p-4 rounded-lg shadow-lg hover:shadow-xl hover:transform hover:scale-105 hover:z-10 transition duration-400 cursor-pointer">
              <div className="relative">
                <Image src={'/logos/aws.svg'} alt={project.name} className="rounded-md object-cover" width={200} height={200} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded-md">
                  <Button 
                    radius="full"
                    variant="light"
                    size="lg"
                    onPress={onOpen}                  
                  >
                    <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",}} size="7x" />
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Github
                </Button>
                <Button color="primary" onPress={onClose}>
                  Visit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
                  </Button>
                </div>
              </div>
             <div> 
              <h2 className="mt-4 text-lg font-bold">{project.name}</h2>
              <p className="text-gray-600">{project.tools}</p>
             </div> 
            </div>
          ))}
        </div>
      </main>
      </div>
  );
}

