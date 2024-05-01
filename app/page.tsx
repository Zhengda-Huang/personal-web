"use client";
import Image from 'next/image'
import Card from './componet/card';
import ProjectCard from './componet/projectCard';
import {skills, projects, contacts} from '../constants/constant';
import ContactCard from './componet/contactCard';
import Link from 'next/link';
import '../app/style/page.css';
import { useRef } from 'react';
import { useIsVisible } from './hooks/visible';

export default function Home() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);
  
  const duration = 1000; // ms
  const delay = 500; // ms

  return (
    <div className='flex flex-col justify-center items-center'>
      <section className='w-full flex flex-col justify-center items-center h-screen py-8 bg-gradient-to-b from-black to-gray-900'>
      <Image
        className="jumping-image"
        src="/pic.png"
        width={300}
        height={200}
        alt="instagram logo"
      />
        <div ref={ref2} className='text-center w-full md:w-1/2 pt-12 h-screen px-2 md:px-0' style={{ transition: 'transform 1.5s ease', transform: isVisible2 ? 'translateX(0)' : 'translateX(-100%)' }}>
          <h1 className='text-2xl md:text-2xl lg:text-3xl xl:text-4xl'>Hi, &apos;I&apos;m Zhengda&quot;David&quot; Huang</h1>
          <hr className="mx-auto my-4 border-gray-300"/>
          <h1 className='text-md md:text-xl lg:text-2xl xl:text-3xl pb-8'>Senior At Northeastern University Pursing A Career as Fullstack Developer</h1>
          <h1 className='text-md md:text-md lg:text-lg xl:text-xl'>More in backend development, that&apos;s why this frontend design isn&apos;t as good!</h1>
          <Link href={"https://www.linkedin.com/in/zhengda-huang/"} target="_blank">
          <button className='connect-button m-6 w-48 h-12 text-white border border-white rounded hover:bg-white hover:text-black'>
              Connect With Me
            </button>
          </Link>
        </div>
      </section>
      <section id="home" className='flex flex-col items-center py-8 h-auto'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl pb-12'>About me</h1>
        <p className='w-full md:w-1/2 text-base md:text-base lg:text-lg xl:text-xl text-center'>
          My name is Zhengda “David” Huang, I’m currently a senior at Northeastern University pursuing a degree in Computer Science and Business Administration. I have co-oped at two phenomenal companies, Zipcar and Tram Global Inc, as a Backend Software Engineer. The experience has truly helped me develop an interest in problem-solving and software development. When I’m not working or studying, I enjoy skateboarding, mixed martial arts, reading a book, or enjoying a movie.
        </p>
        <div className='w-full flex flex-row flex-wrap mt-12 items-center justify-center px-6'>
          <div className='h-auto  w-full md:w-1/4 flex flex-col justify-center items-center border rounded overflow-hidden cursor-pointer bg-gray-300 text-black md:me-6 p-8'>
              <Link href={'https://tram.global/'} target="_blank"><h1 className='text-2xl underline'>Tram Global Inc</h1></Link>
              <h1>Backend Software Engineer Co-op</h1>
              <ul className='text-black list-disc pl-4'>
                <li className="py-2">Designed and deployed scalable Node.js API-driven architectures, crafting RESTful APIs for seamless feature integration, resulting in an 18% increase in user engagement among a growing member base</li>
                <li className="py-2">Revamped PostgreSQL and Firebase databases to facilitate the transition from B2C to B2B business model</li>
                <li className="py-2">Led an agile team working towards decarbonization by promoting positive behaviors in everyday travel</li>
                <li className="py-2">Developed SaaS admin portal enabling businesses to monitor daily travel metrics using React, Tailwind, and Next.js</li>
            </ul>
          </div>
          <div className='h-auto mt-4 md:mt-0 w-full md:w-1/4 flex flex-col justify-center items-center border rounded overflow-hidden cursor-pointer bg-gray-300 text-black md:me-6 p-8'>
              <Link href={'https://tram.global/'} target="_blank"><h1 className='text-2xl underline'>Zipcar</h1></Link>
              <h1>Backend Software Engineer Co-op</h1>
              <hr></hr>
              <ul className='text-black list-disc pl-4'>
                <li className="py-2">Utilized microservice architectures to build RESTful APIs for web, mobile, and external teams</li>
                <li className="py-2">Designed and executed SQL scripts to perform CRUD operations and account migration of over 5000 users and generate 23% in membership revenue increase</li>
                <li className="py-2">Teamed with a dynamic agile scrum team focused on growing and retaining user memberships for vehicle rentals</li>
                <li className="py-2">Constructed and maintained a large scale PostgreSQL database, serving over one million customers</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="skills" className='py-8 w-full text-center mt-12 lg:px-32 bg-gradient-to-b from-gray-950 to-black'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl pb-12'>Skills</h1>
        <div className='w-full px-8'>
          <ul className='flex flex-wrap justify-center items-center text-xl lg:text-2xl overflow-hidden'>
            {
              skills.map((skill, index) => (
                <li key={index} className='w-full lg:w-1/3 xl:w-1/4 px-4 mb-8'>
                  <Card icon={skill.icon} title={skill.title} description={skill.description}  proficiency={skill.proficiency}/>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
      <section id="projects" className='py-8 w-full text-center px-2 lg:px-32'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Projects</h1>
        <h3 className=' pb-12'>Check out some of my personal projects</h3>
        <div ref={ref1} className={`w-full h-full transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <ul className='flex flex-wrap justify-center items-center text-xl lg:text-2xl overflow-hidden'>
            {
              projects.map((project, index) => (
                
                <li key={index} className='w-full lg:w-1/2 xl:w-1/2 px-4 mb-8 h-full' >
                  <ProjectCard  imageUrl={project.imageUrl} projectLink={project.projectLink} description={project.description} github={project.github} title={project.title}/>
                </li>
              ))
            }
          </ul>
        </div>
      </section>

      <section id="contact" className='py-8 w-full text-center px-6 lg:px-32'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Contacts</h1>
        <div className='w-full h-full px-8 mt-8'>
          <ul className='flex flex-wrap justify-center items-center text-xl lg:text-2xl overflow-hidden'>
            {
              contacts.map((contact, index) => (
                <li key={index} className='w-full lg:w-1/3 xl:w-1/3 px-4 mb-8 h-full'>
                  <ContactCard type={contact.type} data={contact.data}/>
                </li>
              ))
            }
          </ul>
        </div>

        <div className='flex flex-col items-center justify-center'>
    
          <div className='flex flex-row justify-between items-center'>
            <Link  className="px-4 text-2xl" href={"https://github.com/Zhengda-Huang?tab=repositories"} target="_blank">
              <i className="fab fa-github mr-2"></i>
            </Link>
            <a href="mailto:huangzhengda1314@gmail.com" className="text-2xl px-4">
              <i className="fas fa-envelope mr-2"></i>
            </a>
            <Link className='px-4 text-2xl' href={"https://www.linkedin.com/in/zhengda-huang/"} target="_blank">
              <i className="fab fa-linkedin-in mr-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
