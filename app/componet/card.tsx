'use client'
import Image from 'next/image'; // Import Image component from next/image
import '../style/card.css';

type skill = {
  skill: string;
  proficiency: string;
}
interface CardProps {
  icon: string;
  title: string;
  description: string;
  proficiency: skill[]
}

const Card = ({ icon, title, description, proficiency}: CardProps) => {

  return (
    <div className="flip-card skill-card w-full h-96 flex flex-col border bg-white text-black border-gray-300 shadow-md rounded-lg p-3">
      <div className="flip-card-inner">
        <div className='flip-card-front p-2'>
          <div className="skill-icon flex justify-center items-center pt-5">
            <i className={`icon ${icon} fa-2x`}></i>
          </div>
          <h3 className="skill-title h-16 flex justify-center items-center mb-3">{title}</h3>
          <div className="skill-description text-sm ">
            {description}
          </div>
        </div>
        <div className='flip-card-back'>
        <h2 className='font-bold text-2xl mb-6'>Proficiency</h2>
        <ul className='flex flex-col items-center text-base'>
          {proficiency.map((skill, index) => (
            <li key={index}>
              {skill.skill}: {skill.proficiency}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};


export default Card;