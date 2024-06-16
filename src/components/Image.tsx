import Image from 'next/image';
import Img1 from '@/../public/pawel-czerwinski-CL3orMYdm-I-unsplash.jpg';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ImageComponent() {
    const [opct, setOpct] = useState(0);
    const [height, setHeight] = useState(0);
    const [scale, setScale] = useState(1);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/') {
            const handleScroll = () => {
                if (window.scrollY <= 672) {
                    const newOpacity = Math.min(100, window.scrollY / 10);
                    setHeight(newOpacity * 8.5 + 18);
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
        }
    }, [pathname]);

    const overlayStyle = pathname === '/' 
        ? { 
            backgroundColor: `rgba(0, 0, 0, ${(opct / 100) + 0.2})`, 
            transition: 'background-color 0.5s ease' 
          }
        : { 
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            opacity: 0.7, 
          };

    const titleColor = pathname === '/' 
        ? { 
            color: `rgba(255, 255, 255, ${(opct / 100) + 0.5})`, 
            transition: 'color 0.5s ease' 
          }
        : { 
            color: 'rgba(255, 255, 255, 0.7)' 
          };

    const finalHeight = pathname === '/' ? height : 585;
    const finalWidth = pathname === '/' ? height / 1.6 : 755 / 1.6;

    return (
        <div className="flex-[0.33] h-screen sticky top-0 overflow-hidden">
            <Image
                src={Img1}
                alt="Alexis Larten"
                layout="fill"
                objectFit="cover"
                className="w-auto h-full transform transition-transform duration-500"
                style={{ transform: `scale(${scale})` }}
            />
            <div 
                style={overlayStyle} 
                className="absolute inset-0">
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-4 flex flex-col items-center justify-center">
                    <div
                        style={{ minHeight: `${finalHeight}px` }}
                        className="bg-white w-[2px] rounded-full"
                    ></div>
                    <h1 style={titleColor} className="text-4xl font-semibold mb-4">
                        {pathname === '/' && window.scrollY>50 ? 'ABOUT ME' : pathname.toUpperCase()}
                    </h1>
                    <div style={{ width: `${finalWidth}px` }} className="text-xl h-[2px] bg-white rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
