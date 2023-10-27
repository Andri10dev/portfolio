import Image from 'next/image'
import Title from '../components/title'

import Profile from '../images/profile.png'


const AboutSection = () => {
    return (
        <>
            <div id='aboutSection' className='w-full pb-10 fill-gray-900'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,160L40,154.7C80,149,160,139,240,133.3C320,128,400,128,480,149.3C560,171,640,213,720,208C800,203,880,149,960,144C1040,139,1120,181,1200,208C1280,235,1360,245,1400,250.7L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                <Title name="About Me" />
                <div className='w-full flex flex-col md:flex-row items-center px-5 md:px-10'>
                    <div className='md:w-1/2'>
                        <Image src={Profile} alt="Andri Ardiansyah" className="w-[300px] aspect-square object-contain"></Image>
                    </div>
                    <div className='md:w-1/2'>
                        <p className='text-justify text-sm md:text-base'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corrupti, quia exercitationem esse atque assumenda laboriosam tempore, magni non facilis provident aliquam laborum explicabo id mollitia perspiciatis debitis pariatur. Aspernatur.
                        </p>
                    </div>
                </div>
         
            </div>
        </>
    )
}

export default AboutSection