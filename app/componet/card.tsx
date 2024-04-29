'use client'
import Image from 'next/image'; // Import Image component from next/image
import '../style/card.css';


interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Card = ({ imageUrl, title, description }: CardProps) => {

  return (
    <div className="flip-card skill-card w-full h-96 flex flex-col border bg-white text-black border-gray-300 shadow-md rounded-lg p-3">
      <div className="flip-card-inner">
        <div className='flip-card-front'>
          <div className="skill-icon flex justify-center items-center pt-5">
            <Image
              src={imageUrl}
              width={75}
              height={75}
              alt="Skill Image"
              style={{ objectFit: 'cover' }} // Ensure image covers the container
            />      
          </div>
          <h3 className="skill-title h-16 flex justify-center items-center">{title}</h3>
          <div className="skill-description text-base ">
            {description}
          </div>
        </div>
        <div className='flip-card-back'>
          test
        </div>
      </div>
    </div>
  );
};


export default Card;