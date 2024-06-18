import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


const App = () => {

    const ResponsiveResume = styled.div
    `
      @media(max-width: 700px){
        flex-direction: column;
      }
    `

    interface ExperienceItem {
        company: string;
        duration: string;
        description: string;
        icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
      }
      
      interface EducationItem {
        institution: string;
        duration: string;
        description: string;
        icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
      }
      
      interface Section {
        title: string;
        items: (ExperienceItem | EducationItem)[];
      }
      
      const sections: Section[] = [
        {
            title: 'Education',
            items: [
              {
                institution: 'University',
                duration: 'OCT 2015 - JUNE 2016',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
                icon: (
                    <FontAwesomeIcon icon={faGraduationCap} style={{color: "#000000",}} size='1x'/>
                )
              },
              {
                institution: 'Design and Art',
                duration: 'OCT 2015 - JUNE 2016',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
                icon: (
                    <FontAwesomeIcon icon={faGraduationCap} style={{color: "#000000",}} size='1x'/>
                )
              }
            ]
          },

        {
          title: 'Experience',
          items: [
            {
              company: 'Google',
              duration: 'OCT 2015 - JUNE 2016',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
              icon: (
                <FontAwesomeIcon icon={faBriefcase} style={{color: "#000000",}} size='1x'/>
              )
            },
            {
              company: 'Apple',
              duration: 'OCT 2015 - JUNE 2016',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
              icon: (
                <FontAwesomeIcon icon={faBriefcase} style={{color: "#000000",}} size='1x'/>
              )
            }
          ]
        }
        
      ];

  return (
    <div className="min-h-screen p-8 overflow-x-hidden">
      <div className="max-w-4xl mx-auto bg-white rounded-lg">
        <div className="px-6 py-4">

          <h1 className="text-4xl font-extrabold mt-1 text-customColor">MY RESUME</h1>
          <div className='bg-[#1DB954] w-[50px] h-[10px] rounded-full mt-2'></div>
        </div>
        <ResponsiveResume className="px-4 py-4 flex gap-16">
          {sections.map((section) => (
            <div key={section.title} className="mb-8">
             <div className='flex items-center mb-4 gap-4 -ml-9'> 
              <div className='bg-[#1DB954] w-[20px] h-[20px] rounded-full'></div>
              <h3 className="text-2xl font-bold text-customColor">{section.title}</h3>
              </div>
              <div className="space-y-4">
                {section.items.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg shadow border-customColor">
                    <div className="flex items-center mb-2">
                      <div className="flex-shrink-0">
                        <div className="bg-[#1DB954] p-2 rounded-full w-[35px] h-[35px] flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-bold text-customColor">
                          Company name
                        </h4>
                        <p className="text-sm text-gray-500">{item.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ResponsiveResume>
      </div>
    </div>
  );
};

export default App;
