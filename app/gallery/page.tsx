'use client'
import { useState } from 'react';
import Image from 'next/image';
import { gallery } from '@/constants/constant';
import '../style/gallery.css';

const Page = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: { img: string }) => { // Specify the type for the image parameter
    setSelectedImage(image.img);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="main">
      {gallery.map((image, index) => (
        <div key={index} onClick={() => handleImageClick(image)}>
          <Image
            src={image.img}
            alt="Image"
            layout="intrinsic"
            width={400}
            height={300}
            className="hover:scale-110 transition ease-in-out delay-150"
          />
        </div>
      ))}
      {selectedImage && (
        <div className="modal">
            <Image src={selectedImage} alt="Selected Image" className="modal-image"   width={400}
            height={300}/>
        </div>
      )}
    </div>
  );
}

export default Page;
