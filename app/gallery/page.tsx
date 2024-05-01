import Image from 'next/image';
import { gallery } from '@/constants/constant';
import '../style/gallery.css';

const Page = () => {
  return (
    <div className="main">
       {gallery.map((image, index) => (
           <Image
            key={index}
             src={image.img}
             alt="Image"
             layout="intrinsic"
             width={400}
             height={300}
             className="hover:scale-110 transition ease-in-out delay-150"
           />
       ))}
    </div>
  )
}


export default Page;
