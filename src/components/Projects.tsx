import React from 'react';
import { Button, ButtonGroup } from "@nextui-org/button";
import Image from 'next/image';

const projects = [
  { src: '/logos/aws.svg', alt: 'Project 1' },
  { src: '/logos/aws.svg', alt: 'Project 2' },
  { src: '/logos/aws.svg', alt: 'Project 3' },
  { src: '/logos/aws.svg', alt: 'Project 4' },
  { src: '/logos/aws.svg', alt: 'Project 5' },
  { src: '/logos/aws.svg', alt: 'Project 6' },
  { src: '/logos/aws.svg', alt: 'Project 7' },
  { src: '/logos/aws.svg', alt: 'Project 8' },
  { src: '/logos/aws.svg', alt: 'Project 9' },
];

function App() {
  return (
    <div className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Works</h1>
        <p className="text-gray-600">Repository of projects that I worked before.</p>
        <nav className="mt-4">
          <ul className="flex space-x-4">
            {['All', 'Product Design', 'UX Research', 'Logo', 'Desk Design', 'Webflow', 'Social Media', 'Video Effect', 'Non Profit'].map((category) => (
              <Button key={category}>
                <li className="text-gray-700 cursor-pointer">{category}</li>
              </Button>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <div className="grid grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <Image src={project.src} alt={project.alt} className="rounded-md object-cover" width={500} height={300} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
