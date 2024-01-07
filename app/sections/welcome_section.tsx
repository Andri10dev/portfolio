'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Profile2 from '../images/profile_2.png'
import Image from "next/image"
import Link from "next/link"
import { url } from "inspector"

const WelcomeSection = () => {


    const handleRedirect = (url: string) => {
        const newTab = window.open(url, '_blank');
        newTab?.focus()
    };

    return (
        <div id="welcomeSection" className='w-full h-screen bg-gray-900 relative text-white md:px-10 px-5 flex flex-col lg:flex-row items-center md:pt-16 justify-center lg:justify-start'>
            <div className="w-full lg:w-1/2 md:pt-16 order-2 lg:order-1 text-center lg:text-start">
                <h1 className="text-xl font-semibold">Hello, I'm</h1>
                <p className="text-3xl md:text-6xl font-bold">Andri Ardiansyah</p>
                <p className="text-sm md:text-base">Software Engineer</p>
                <div className="flex justify-center lg:justify-start space-x-3 mt-8 lg:mt-16 ">
                    <button type="button" className="w-48 md:w-72 lg:w-48 py-2 bg-blue-500  rounded-md">
                        Call Me
                    </button>
                </div>
                <div className="flex items-center justify-evenly w-48 md:w-72 lg:w-48 mt-5 text-2xl md:text-4xl lg:text-2xl mx-auto lg:mx-0">

                    <FontAwesomeIcon onClick={() => handleRedirect('https://wa.me/62859113487778')} icon={faWhatsapp} className=" transition-all duration-300 hover:scale-125 cursor-pointer" />

                    <FontAwesomeIcon icon={faFacebook} className=" transition-all duration-300 hover:scale-125 cursor-pointer" />

                    <FontAwesomeIcon onClick={() => handleRedirect('https://www.instagram.com/andri.story_10/')} icon={faInstagram} className="text-2xl md:text-4xl lg:text-2xl transition-all duration-300 hover:scale-125 cursor-pointer" />

                    <FontAwesomeIcon icon={faTwitter} className=" transition-all duration-300 hover:scale-125 cursor-pointer" />

                    <FontAwesomeIcon onClick={() => handleRedirect('https://github.com/Andri10dev')} icon={faGithub} className=" transition-all duration-300 hover:scale-125 cursor-pointer" />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-end order-1 lg:order-2 mb-10 md:mb-0">
                <Image src={Profile2} alt="Andri Ardiansyah" className="w-[300px] md:w-[1200px] lg:w-[500px] aspect-square object-contain mx-auto md:mx-0"></Image>
            </div>
        </div>
    )
}

export default WelcomeSection