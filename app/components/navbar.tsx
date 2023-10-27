'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
// import Link from "next/link"
import React, { useEffect, useState } from 'react'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';

const Navbar = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const [isCollapse, setIsCollapse] = useState(true);
    const toggleCollapse = () => {
        setIsCollapse(!isCollapse)
    }
    return (
        <>
            <nav className="w-full text-white fixed z-50">
                <div className="bg-black/50 backdrop-blur-sm w-full h-16 flex items-center justify-between px-5 lg:px-10">
                    <div className="font-semibold">
                        Andri Ardiansyah
                    </div>
                    <div className="hidden lg:flex space-x-3 items-center font-semibold">
                        <Link href="#welcomeSection" onClick={handleScroll}>Home</Link>
                        <Link href="#aboutSection" onClick={handleScroll}>About</Link>
                        <Link href="#serviceSection" onClick={handleScroll}>Service</Link>
                        <Link href="#personalSkillSection" onClick={handleScroll}>Personal Skill</Link>
                        <Link href="#portfolioSection" onClick={handleScroll}>Portfolio</Link>
                        <Link href="#blogSection" onClick={handleScroll}>Blog</Link>
                        <Link href="#footer" onClick={handleScroll}>Contact</Link>
                    </div>
                    <button type='button' onClick={toggleCollapse} className='lg:hidden flex items-center justify-center text-2xl relative'>
                        <FontAwesomeIcon icon={faBars} className={isCollapse ? 'scale-100 rotate-0 transition-all duration-500' : 'scale-0 rotate-180 transition-all duration-300'} />
                        <FontAwesomeIcon icon={faClose} className={isCollapse ? 'absolute scale-0 -rotate-180 transition-all duration-300' : 'absolute scale-100 text-red-500 rotate-0 transition-all duration-500'} />
                    </button>
                </div>
                <div className={isCollapse ? 'w-full h-0 px-5 flex flex-col items-center space-y-3 overflow-hidden transition-all duration-700 rounded-b-2xl bg-black/50 backdrop-blur-sm' : 'lg:hidden w-full px-5 flex flex-col items-center space-y-3 h-72 transition-all duration-700 overflow-hidden rounded-b-2xl bg-black/50 backdrop-blur-sm'}>
                    <div className='w-full h-1 bg-white rounded-full mb-3'></div>
                    <Link href="#welcomeSection" onClick={handleScroll}>Home</Link>
                    <Link href="#aboutSection" onClick={handleScroll}>About</Link>
                    <Link href="#serviceSection" onClick={handleScroll}>Service</Link>
                    <Link href="#personalSkillSection" onClick={handleScroll}>Personal Skill</Link>
                    <Link href="#portfolioSection" onClick={handleScroll}>Portfolio</Link>
                    <Link href="#blogSection" onClick={handleScroll}>Blog</Link>
                    <Link href="#footer" onClick={handleScroll}>Contact</Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar