import { Card } from "@nextui-org/card";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";


export default function Hobbies() {
  const StyledGrid = styled.div`
  display: grid;
  grid-gap: 1rem; /* You can adjust the gap as needed */
  grid-template-columns: repeat(2, 1fr); /* Default to 2 columns */

  @media (max-width: 532px) {
    grid-template-columns: 1fr; /* Switch to 1 column on smaller screens */
  }
`;
  const hobbies = [
    { name: "Drum Machine", id: "1", icon: "/logos/drum-machine.png", description: 'Enjoy creating beats and rhythms with virtual or physical drum machines.' },
    { name: "Geoguesser", id: "2", icon: "/logos/country-location-icon.svg", description: 'Guess locations around the world using clues from street views.' },
    { name: "Cycling", id: "3", icon: "/logos/bike-svgrepo-com.svg", description: 'Explore the outdoors and stay fit while cycling through various landscapes.' },
    { name: "Blogging", id: "4", icon: "/logos/blog.png", description: 'Share thoughts, experiences, and expertise on a personal or professional blog.' }
  ];

  return (
    <Card
      isFooterBlurred
      shadow="none"
      className="w-full mt-4"
      id="hobbies"
    >
      <div className="w-full">
        <StyledGrid>
          {hobbies.map((hobby) => (
            <div key={hobby.id} className="flex items-start border rounded-lg p-4 gap-4">
              <Image src={hobby.icon} alt={hobby.name} width={30} height={30} className="mr-2" />
              <div>
                <div className="font-bold">{hobby.name}</div>
                <p className="text-sm text-gray-600">{hobby.description}</p>
              </div>
            </div>
          ))}
        </StyledGrid>
      </div>
    </Card>
  );
}
