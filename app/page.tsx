import Head from 'next/head'
import Navbar from './components/navbar'

import WelcomeSection from './sections/welcome_section'
import AboutSection from './sections/about_section'
import Service from './sections/service'
import PersonalSkill from './sections/personal_skill'
import Portfolio from './sections/portfolio'
import Testimony from './sections/testimony'
import BlogSection from './sections/blog'
import Footer from './components/footer'



export default function Home() {
  return (
    <>
      <Head>
        <title>Andri Ardiansyah</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <body className='w-full'>
        <Navbar></Navbar>
        <WelcomeSection />
        <AboutSection />
        <Service/>
        <PersonalSkill/>
        <Portfolio/>
        <Testimony/>
        <BlogSection/>
        <Footer />
      </body>
    </>
  )
}
