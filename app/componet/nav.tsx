'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { Button } from '.';
interface NavProps {
    isOpen: boolean;
    handleClick: () => void
}

const Nav = ({ isOpen, handleClick }: NavProps) => {
    const links = [ { href: "#home", name: "About Me"},{ href: "#skills", name: "Skills" }, { href: "#projects", name: "Projects" }, { href: "#contact", name: "Contact" }, { href: "/gallery", name: "Gallery" }]

    return (
        isOpen &&
        <div className='flex flex-col fixed top-0 left-0 w-full h-full bg-black z-50'>
            <div className='flex justify-end p-8'>
                <Button isOpen={isOpen} handleClick={handleClick} />
            </div>
            <div className='flex flex-col justify-center items-center h-full'>
                <ul className='flex flex-col justify-center items-center text-2xl overflow-hidden'>
                    {links.map((linkItem, index) => (
                        <li key={index} className='w-full md:w-48 text-center mb-2 md:mb-0  py-5'>
                            <Link onClick={handleClick} href={linkItem.href}>{linkItem.name}</Link>
                        </li>
                    ))}
                  
                </ul>
            </div>
        </div>


    )
};

export default Nav