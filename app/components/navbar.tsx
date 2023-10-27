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

    const [activeLink, setActiveLink] = useState('');
    const scrollToSection = (sectionId: any) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }

        var active = 'font-semibold text-blue-500';
        var inActive = 'font-semibold text-white';

        var btnName = 'btnHome';
        const btnHome = document.getElementById('btnHome');
        const btnAbout = document.getElementById('btnAbout');
        const btnService = document.getElementById('btnService');
        const btnSkill = document.getElementById('btnSkill');
        const btnPortFolio = document.getElementById('btnPortFolio');
        const btnBlog = document.getElementById('btnBlog');
        const btnContact = document.getElementById('btnContact');

        switch (sectionId) {
            case 'welcomeSection':
                btnHome!.className = active;
                btnAbout!.className = inActive;
                btnService!.className = inActive;
                btnSkill!.className = inActive;
                btnPortFolio!.className = inActive;
                btnBlog!.className = inActive;
                btnContact!.className = inActive;
                break;
            case 'aboutSection':
                btnHome!.className = inActive
                btnAbout!.className = active;
                btnService!.className = inActive;
                btnSkill!.className = inActive;
                btnPortFolio!.className = inActive;
                btnBlog!.className = inActive;
                btnContact!.className = inActive;
                break;
            case 'serviceSection':
                btnHome!.className = inActive
                btnAbout!.className = inActive;
                btnService!.className = active
                btnSkill!.className = inActive;
                btnPortFolio!.className = inActive;
                btnBlog!.className = inActive;
                btnContact!.className = inActive;
                break;

            case 'personalSkillSection':
                btnHome!.className = inActive
                btnAbout!.className = inActive;
                btnService!.className = inActive;
                btnSkill!.className = active;
                btnPortFolio!.className = inActive;
                btnBlog!.className = inActive;
                btnContact!.className = inActive;
                break;

            case 'portfolioSection':
                btnHome!.className = inActive
                btnAbout!.className = inActive;
                btnService!.className = inActive;
                btnSkill!.className = inActive;
                btnPortFolio!.className = active;
                btnBlog!.className = inActive;
                btnContact!.className = inActive;
                break;

            case 'blogSection':
                btnHome!.className = inActive
                btnAbout!.className = inActive;
                btnService!.className = inActive;
                btnSkill!.className = inActive;
                btnPortFolio!.className = inActive;
                btnBlog!.className = active;
                btnContact!.className = inActive;
                break;

            case 'footer':
                btnHome!.className = inActive
                btnAbout!.className = inActive;
                btnService!.className = inActive;
                btnSkill!.className = inActive;
                btnPortFolio!.className = inActive;
                btnBlog!.className = inActive;
                btnContact!.className = active;
                break;


            default:
                btnHome!.className = active;
                btnAbout!.className = inActive;
                btnService!.className = inActive;
                btnSkill!.className = inActive;
                btnPortFolio!.className = inActive;
                btnBlog!.className = inActive;
                btnContact!.className = inActive;
                break;

        }
    }

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

    return (
        <>
            <nav className="w-full bg-black/50 backdrop-blur-sm text-white fixed z-50">
                <div className="w-full h-16 flex items-center justify-between px-5 lg:px-10">
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
                    <button type='button' className='w-14 aspect-square bg-black flex items-center justify-center text-2xl'>
                        <FontAwesomeIcon icon={faBars} />
                        <FontAwesomeIcon icon={faClose} className='absolute text-red-500'/>
                    </button>
                </div>
            </nav>

        </>
    )
}

export default Navbar