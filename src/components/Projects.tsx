import React from 'react';
import {Button, ButtonGroup} from "@nextui-org/button";

const projects = [
  { src: 'path/to/image1.jpg', alt: 'Project 1' },
  { src: 'path/to/image2.jpg', alt: 'Project 2' },
  { src: 'path/to/image3.jpg', alt: 'Project 3' },
  { src: 'path/to/image4.jpg', alt: 'Project 4' },
  { src: 'path/to/image5.jpg', alt: 'Project 5' },
  { src: 'path/to/image6.jpg', alt: 'Project 6' },
  { src: 'path/to/image7.jpg', alt: 'Project 7' },
  { src: 'path/to/image8.jpg', alt: 'Project 8' },
  { src: 'path/to/image9.jpg', alt: 'Project 9' },
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
              <Button><li key={category} className="text-gray-700 cursor-pointer">{category}</li></Button>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <div className="grid grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <img src={project.src} alt={project.alt} className="rounded-md object-cover" />
            </div>
          ))}
        </div>
        <iframe className="border-radius:12px" src="https://open.spotify.com/embed/track/6tSnClpLp6lQ68y4hb2dbp?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager"></iframe>
      </main>
    </div>
  );
}

export default App;
