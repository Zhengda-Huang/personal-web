"use client";
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button, Nav } from '.';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  };

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  
  const links = [ { href: "#home", name: "About Me"},{ href: "#skills", name: "Skills" }, { href: "#projects", name: "Projects" }, { href: "#contact", name: "Contact" }, { href: "/gallery", name: "Pictures" }]
  return (

    <header className="w-full py-12 px-6 md:px-24 flex flex-row h-30 items-center justify-between">
      <div>
        <Link href="/">
          <Image
            src='/zlogo.png'
            width={50}
            height={50}
            alt="logo">
          </Image>
        </Link>
      </div>
      <div className='flex flex-col lg:hidden'>
        <Button isOpen={isOpen} handleClick={handleClick} />
        <Nav isOpen={isOpen} handleClick={handleClick} />
      </div>
      <div className='hidden lg:flex justify-center items-center me-7'>
        <ul className='flex items-center text-base lg:text-xl overflow-hidden'>
          {
            links.map((linkItem, index) => (
              <li key={index} className='w-full md:w-40 text-center mb-2 md:mb-0'>
              {linkItem.href.startsWith("#") ? (
                  <Link className="text-white b hover:border-white " onClick={(event) => handleSmoothScroll(event, linkItem.href.substring(1))} href={linkItem.href}>
                    <span>{linkItem.name}</span>                
                    </Link>
              ) : (
                <Link href={linkItem.href}>
                  {linkItem.name}
                </Link>
              )}
            </li>
            ))
          }
        </ul>
        <Link href={"/Huang_David.pdf"} target="_blank">
          <button className='m-6 w-32 h-12 text-white border border-white rounded hover:bg-white hover:text-black'>
              Resume
            </button>
          </Link>
      </div>
    </header>
  );
}

export default Header
