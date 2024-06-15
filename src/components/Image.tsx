import Image from 'next/image';
import Img1 from '@/../public/pawel-czerwinski-CL3orMYdm-I-unsplash.jpg';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ImageComponent() {
    const [opct, setOpct] = useState(0);
    const [height, setHeight] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/') {
            const setOpacity = () => {
                if (window.scrollY <= 672) {
                    const newOpacity = Math.min(100, window.scrollY / 10);
                    setHeight(newOpacity * 28);
                    setOpct(newOpacity);
                }
                if (window.scrollY === 0) {
                    setHeight(0);
                    setOpct(0);
                }
            };

            window.addEventListener('scroll', setOpacity);
            return () => window.removeEventListener('scroll', setOpacity);
        }
    }, [pathname]);

    const overlayStyle = pathname === '/' 
        ? { 
            backgroundColor: `rgba(0, 0, 0, ${(opct / 100)})`, 
            transition: 'background-color 0.5s ease' 
          }
        : { 
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            opacity: 0.7, 
          };

    const titleColor = pathname === '/' 
        ? { 
            color: `rgba(255, 255, 255, ${(opct / 100) + 0.5})`, 
            transition: 'color 0.5s ease' 
          }
        : { 
            color: 'rgba(255, 255, 255, 1)' 
          };

    const finalHeight = pathname === '/' ? height : 1900;
    const finalWidth = pathname === '/' ? height / 1.5 : 755 / 1.6;

    return (
        <div className="flex-[0.33] h-screen sticky top-0">
            <Image
                src={Img1}
                alt="Alexis Larten"
                layout="fill"
                objectFit="cover"
                className="w-auto h-full"
            />
            <div 
                style={overlayStyle} 
                className="absolute inset-0">
            </div>
            <div className="relative inset-0 flex items-center justify-center">
                <div className="text-white text-center p-4">
                    <div
                        style={{ height: `${finalHeight}%` }}
                        className="absolute bg-white top-12 left-12 w-[2px] rounded-full"
                    ></div>
                    <h1 style={titleColor} className="text-4xl font-semibold mb-4 absolute left-16 top-[530px]">
                        {pathname === '/' ? 'ABOUT ME' : pathname.toUpperCase()}
                    </h1>
                    <div style={{ width: `${finalWidth}px` }} className="text-xl absolute h-[2px] bg-white rounded-full top-[580px] right-10"></div>
                </div>
            </div>
        </div>
    );
}
