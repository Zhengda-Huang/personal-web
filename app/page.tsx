"use client";
import Image from 'next/image'
import Card from './componet/card';
import ProjectCard from './componet/projectCard';
import {skills, projects, contacts} from '../constants/constant';
import ContactCard from './componet/contactCard';
import Link from 'next/link';
import '../app/style/page.css';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center px-6 md:px- lg:px-32'>
      <section className='flex flex-col justify-center items-center h-screen py-8'>
      <Image
        className="jumping-image"
        src="/pic.png"
        width={300}
        height={200}
        alt="instagram logo"
      />
        <div className='text-center w-full md:w-1/2 pt-12 h-screen'>
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
      <section id="home" className='flex flex-col items-center py-8'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl pb-12'>About me</h1>
        <p className='w-full md:w-1/2 text-base md:text-base lg:text-lg xl:text-xl text-center'>
          My name is Zhengda “David” Huang, I’m currently a senior at Northeastern University pursuing a degree in Computer Science and Business Administration. I have co-oped at two phenomenal companies, Zipcar and Tram Global Inc, as a Backend Software Engineer. The experience has truly helped me develop an interest in problem-solving and software development. When I’m not working or studying, I enjoy skateboarding, mixed martial arts, reading a book, or enjoying a movie.
        </p>
      </section>
      <section id="skills" className='py-8 w-full text-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl pb-12'>Skills</h1>
        <div className='w-full px-8'>
          <ul className='flex flex-wrap justify-center items-center text-xl lg:text-2xl overflow-hidden'>
            {
              skills.map((skill, index) => (
                <li key={index} className='w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8'>
                  <Card imageUrl={skill.imageUrl} title={skill.title} description={skill.description} />
                </li>
              ))
            }
          </ul>
        </div>
      </section>
      <section id="projects" className='py-8 w-full text-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Projects</h1>
        <h3 className=' pb-12'>Check out some of my personal projects</h3>
        <div className='w-full h-full px-8'>
          <ul className='flex flex-wrap justify-center items-center text-xl lg:text-2xl overflow-hidden'>
            {
              projects.map((project, index) => (
                <li key={index} className='w-full lg:w-1/2 xl:w-1/2 px-4 mb-8 h-full'>
                  <ProjectCard imageUrl={project.imageUrl} projectLink={project.projectLink} description={project.description} github={project.github} title={project.title}/>
                </li>
              ))
            }
          </ul>
        </div>
      </section>

      <section id="contact" className='py-8 w-full text-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Contacts</h1>
        <h3 className=' pb-12'>Drop me a line</h3>
        <div className='w-full h-full px-8'>
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

            <Link className='px-4 text-2xl' href={"https://www.linkedin.com/in/zhengda-huang/"} target="_blank">
              <i className="fab fa-linkedin-in mr-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
