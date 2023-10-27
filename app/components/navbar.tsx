'use client';
// import Link from "next/link"
import React, { useEffect, useState } from 'react'

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
    return (
        <>
            <nav className="w-full bg-black/50 backdrop-blur-sm text-white fixed z-50">
                <div className="w-full h-16 flex items-center justify-between px-10">
                    <div className="">
                        Andri Ardiansyah
                    </div>
                    <div className="flex space-x-3 items-center font-semibold">
                        <button id='btnHome' type="button" onClick={() => scrollToSection("welcomeSection")} className='text-blue-500'>Home</button>
                        <button id='btnAbout' type="button" onClick={() => scrollToSection("aboutSection")}>About</button>
                        <button id='btnService' type="button" onClick={() => scrollToSection("serviceSection")}>Service</button>
                        <button id='btnSkill' type="button" onClick={() => scrollToSection("personalSkillSection")}>Personal Skill</button>
                        <button id='btnPortFolio' type="button" onClick={() => scrollToSection("portfolioSection")}>Portfolio</button>
                        {/* <button id='btnTestimony' type="button" onClick={() => scrollToSection("testimonySection")} className={activeLink == "testimonySection" ? active : ''}>Testimony</button> */}
                        <button id='btnBlog' type="button" onClick={() => scrollToSection("blogSection")}>Blog</button>
                        <button id='btnContact' type="button" onClick={() => scrollToSection("footer")}>Contact</button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar