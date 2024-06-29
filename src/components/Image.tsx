'use client'
import Image from 'next/image';
import Img1 from '@/../public/riccardo-oliva-C5DLhUkEWfM-unsplash(1).jpg';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ImageComponent() {
    const [opct, setOpct] = useState(0);
    const [height, setHeight] = useState(0);
    const [scale, setScale] = useState(1);
    const [layout, setLayout] = useState("");
    const [contStyle, setContStyle] = useState("");
    const [isSmallScreen, setIsSmallScreen] = useState(false);



    const pathname = usePathname();

    useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth <= 1001);
        };
    
     
        handleResize();
    
      
        window.addEventListener('resize', handleResize);
    
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    useEffect(()=>{
        function applyStyle(){ 
            setLayout(window.innerWidth < 1001 ? "" : "fill")
            setContStyle(window.innerWidth < 1001 ? "relative h-[100%] top-0 overflow-hidden" : "flex-[0.33] h-screen sticky top-0 overflow-hidden")
        }

        applyStyle()
        window.addEventListener('resize', applyStyle)

        return ()=>{
            window.removeEventListener('resize', applyStyle)
        }
    },[])


    useEffect(() => { 
        const handleResize = () => {
            setLayout(window.innerWidth < 1001 ? "" : "fill");
            setContStyle(window.innerWidth < 1001 ? "relative h-[100%] top-0 overflow-hidden" : "flex-[0.33] h-screen sticky top-0 overflow-hidden");
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY <= 672) {
                const newOpacity = Math.min(100, window.scrollY / 10);
                setHeight(newOpacity * 9 + 18);
                setOpct(newOpacity);
                const newScale = 1 + (window.scrollY / 1000);
                setScale(newScale);
            } else if (window.scrollY === 0) {
                setHeight(0);
                setOpct(0);
                setScale(1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const overlayStyle = {
        backgroundColor: `rgba(0, 0, 0, ${(opct / 100) + 0.2})`,
        transition: 'background-color 0.5s ease'
    };

    const titleColor = {
        color: `rgba(255, 255, 255, ${(opct / 100) + 0.5})`,
        transition: 'color 0.5s ease'
    };

    const finalHeight = height;
    const finalWidth = height / 1.6;

    return (
        <div className={contStyle}>
        
           {pathname==='/' && isSmallScreen?
            <div className={`flex flex-col absolute top-[50%] inset-0 gap-3 items-center`} style={{opacity: 1-opct}}> 
            <FontAwesomeIcon icon={faComputerMouse} style={{color: "#ffffff", zIndex: 50}} size='2xl' />
            <p className='z-50 text-white'>Scroll a little!</p>
            </div>:null}
        
            <Image
                src={Img1}
                alt="Alexis Larten"
                layout={layout}
                style={{ objectFit: 'cover', transform: `scale(${scale})` }}
                className="transition-transform duration-500 h-[100vh]"
            />
            <div
                style={overlayStyle}
                className="absolute inset-0">
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-4 flex flex-col items-center justify-center">
                    <div
                        style={{ minHeight: `${finalHeight}px` }}
                        className="bg-white opacity-0 w-[1.5px] rounded-full"
                    ></div>
                    <h1 style={titleColor} className="text-4xl font-semibold mb-4">
                        {typeof window !== 'undefined' && window.scrollY > 50 ? pathname.toUpperCase()==='/'?"</>":pathname.toUpperCase() : ""}
                    </h1>
                    <div style={{ width: `${finalWidth}px` }} className="text-xl h-[2px] bg-white rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
