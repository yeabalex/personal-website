
import Image from 'next/image';
import Img1 from '@/../public/lea-l-q--99IzY8Lw-unsplash.jpg';

export default function Imagecomponent(){
    return (
        <div className="flex-[0.33] h-screen sticky top-0">
        <Image
          src={Img1}
          alt="Alexis Larten"
          width={432}
          height={1000}
          className="w-auto h-full"
        />
      </div>
    )
}