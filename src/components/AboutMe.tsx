
import styled from 'styled-components';
import Image from 'next/image';
import yeabsira from '@/../public/yeabsira.jpg'
import Hobbies from './Hobbies';
const AboutMe = () => {

  const ResponsiveResume = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;

    @media(min-width: 751px){
      flex-direction: row;
    }
  `;

  const StyledImageWrapper = styled.div`
    width: 100%;
    margin-bottom: 50px;
    margin-left: 24px;

    @media(min-width: 751px){
      width: 50%;
      margin-left: 0px;
    }

    img {
      filter: grayscale(100%);
      transition: filter 0.3s ease-in-out;
    }

    &:hover img {
      filter: grayscale(0%);
    }
  `;

  
  return (
    <div className="overflow-x-hidden w-[100%]">
      <div className="max-w-4xl mx-auto bg-white rounded-lg">
        <div className="py-4 flex flex-col gap-1 justify-center">
          <h1 className="text-4xl font-extrabold mt-1 text-customColor">ABOUT ME</h1>
          <div className='bg-[#1DB954] w-[50px] h-[10px] rounded-full mt-2'></div>
        </div>
        <ResponsiveResume className="py-4">
          <StyledImageWrapper>
            <Image alt='yeabsira' objectFit='contain' src={yeabsira} />
          </StyledImageWrapper>
          <div className='w-[100%] pl-8'>
          <h2 className="text-2xl font-bold mb-4">I am Yeabsira Alemu</h2>
<p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

            <Hobbies/>
          </div>
        </ResponsiveResume>
      </div>
    </div>
  );
};

export default AboutMe;
