'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../style/projectCard.css';
import '../../public/vendor/fontawesome-free-5.15.4-web/css/all.css'
interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  projectLink: string;
  github: string;
}

const ProjectCard = ({ imageUrl, title, description, projectLink, github}: ProjectCardProps) => {

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full h-72 flex justify-center items-center border rounded overflow-hidden cursor-pointer">
      <div className="relative w-full h-full">
        {/* <Link href={projectLink} target="_blank"> */}
            <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            className="object-cover"
            onClick={handleModalOpen}
            />
        {/* </Link> */}
      </div>

      {showModal && (
        <div className="flex text-black fixed top-0 left-0 h-full justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <div className="w-1/2 bg-white p-8 rounded shadow-lg">
            <h2 className="md:text-base text-xl mb-4">{title}</h2>
            <p className="md:text-sm text-base mb-4">{description}</p>
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-white hover:text-black hover:border hover:border-black md:text-sm text-base" onClick={handleModalClose}>Close</button>
            <div className='text-black mt-6 flex justify-start'>
              <Link href={github} target="_blank"> 
                <i className="fab fa-github mr-2"></i>
              </Link>
              <Link href={projectLink} target="_blank"> 
                <i className="fas fa-globe"></i>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
