import Image from 'next/image';
import Img1 from '@/../public/pawel-czerwinski-CL3orMYdm-I-unsplash.jpg';

export default function Imagecomponent(){
    return (
        <div className="flex-[0.33] h-screen sticky top-0">
            <Image
                src={Img1}
                alt="Alexis Larten"
                layout="fill"
                objectFit="cover"
                className="w-auto h-full"
            />
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-4">
                    <h1 className="text-4xl font-bold mb-4">Overlay Title</h1>
                    <p className="text-xl">Some additional text goes here.</p>
                </div>
            </div>
        </div>
    );
}
