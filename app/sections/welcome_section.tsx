import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Profile2 from '../images/profile_2.png'
import Image from "next/image"

const WelcomeSection = () => {
    return (
        <>
            <div id="welcomeSection" className='w-full h-screen bg-gray-900 relative text-white md:px-10 px-5 flex flex-col md:flex-row items-center md:pt-16 justify-center md:justify-start'>
                <div className="w-full md:w-1/2 md:pt-16 order-2 md:order-1 text-center md:text-start">
                    <h1 className="text-xl font-semibold">Hello, I'm</h1>
                    <p className="text-3xl md:text-6xl font-bold">Andri Ardiansyah</p>
                    <p className="text-sm md:text-base">Software Engineer</p>
                    <div className="flex justify-center md:justify-start space-x-3 mt-8 md:mt-16">
                        <button type="button" className="w-48 py-2 bg-blue-500  rounded-md">
                            Call Me
                        </button>
                        {/* <button type="button" className="w-48 py-2 bg-blue-500  rounded-md">
                            Download CSV
                        </button> */}
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-3 mt-5 ">
                        <FontAwesomeIcon icon={faWhatsapp} className="w-8" />
                        <FontAwesomeIcon icon={faFacebook} className="w-8" />
                        <FontAwesomeIcon icon={faInstagram} className="w-8" />
                        <FontAwesomeIcon icon={faTwitter} className="w-8" />
                        <FontAwesomeIcon icon={faGithub} className="w-8" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-end order-1 md:order-2 mb-10 md:mb-0">
                    <Image src={Profile2} alt="Andri Ardiansyah" className="w-[300px] md:w-[500px] aspect-square object-contain mx-auto md:mx-0"></Image>
                </div>

                {/* 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="">
                    <path fill="#ffffff" fill-opacity="1" d="M0,0L34.3,32C68.6,64,137,128,206,138.7C274.3,149,343,107,411,106.7C480,107,549,149,617,176C685.7,203,754,213,823,197.3C891.4,181,960,139,1029,138.7C1097.1,139,1166,181,1234,176C1302.9,171,1371,117,1406,90.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                    </path>
                </svg> */}
            </div>
        </>
    )
}

export default WelcomeSection