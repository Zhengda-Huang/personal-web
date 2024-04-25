import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  projectLink: string;
}

const ProjectCard = ({ imageUrl, title, description, projectLink }: ProjectCardProps) => {

  return (
    <div className="w-full h-72 flex justify-center items-center border rounded overflow-hidden cursor-pointer">
      <div className="relative w-full h-full">
        <Link href={projectLink} target="_blank">
            <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            className="object-cover"
            />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
