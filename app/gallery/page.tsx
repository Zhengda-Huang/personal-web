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
            width={400}
            height={300}
            className="hover:scale-110 transition ease-in-out delay-150"
          />
        </div>
      ))}

      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <Image
              src={selectedImage}
              alt="Selected Image"
              className="modal-image"
              width={400}
              height={300}
            />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-black text-white rounded hover:bg-white hover:text-black hover:border hover:border-black md:text-sm text-base"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
