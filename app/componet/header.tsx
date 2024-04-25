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
  
  const links = [ { href: "#home", name: "About Me"},{ href: "#skills", name: "Skills" }, { href: "#projects", name: "Projects" }, { href: "/contact", name: "Contact" }]
  return (
    <header className="w-full py-12 px-6 md:px-24 flex flex-col h-30">
      <div className='flex flex-col lg:hidden'>
        {/* Assuming Button and Nav components are defined elsewhere */}
        <Button isOpen={isOpen} handleClick={handleClick} />
        <Nav isOpen={isOpen} handleClick={handleClick} />
      </div>
      <div className='hidden lg:flex justify-center items-center'>
        <ul className='flex items-center text-xl lg:text-2xl overflow-hidden'>
          {
            links.map((linkItem, index) => (
              <li key={index} className='w-full md:w-40 text-center mb-2 md:mb-0'>
              {linkItem.href.startsWith("#") ? (
                  <Link   className="text-white b hover:border-white " onClick={(event) => handleSmoothScroll(event, linkItem.href.substring(1))} href={linkItem.href}>
                    <span className="hover:text-black border-white">{linkItem.name}</span>                
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
        <button>
          
        </button>
      </div>
    </header>
  );
}

export default Header
