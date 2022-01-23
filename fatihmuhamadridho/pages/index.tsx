import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from './components/navbar'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram, faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

const Home: NextPage = () => {
  return (
    <div className='container'>
      <Head>
        <title>Fatih Muhamad Ridho</title>
      </Head>
      <Navbar />
      <div className='container-main'>
        <div className='container-home' id='home'>
          <div className='home-intro'>
            <h1>Hi, I`m</h1>
            <h1>Fatih Muhamad Ridho</h1>
            <h1>Frontend Web</h1>
            <h1>Web Developer</h1>
            <div className='intro-socialmedia'>
              <p>Find me on :</p>
              <a href="https://www.instagram.com/fatihmuhamadridho/" target={"_blank"} rel='noreferrer'>
                <FontAwesomeIcon icon={faInstagram} size='2x' style={{ color: "#AFAFAF", marginRight: "25px" }} />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=%2B6282114751004" target={"_blank"} rel='noreferrer'>
                <FontAwesomeIcon icon={faWhatsapp} size='2x' style={{ color: "#AFAFAF", marginRight: "25px" }} />
              </a>
            </div>
          </div>
          <div className='home-selfImage'>
            <Image 
              src={"/FatihMuhamadRidho.png"} 
              alt=''
              width={"425px"}
              height={"625px"} />
          </div>
          <div className='home-words'>
            <div className='words-myself'>
              <h1>I love programming</h1>
              <h1>and exploring</h1>
              <h1>creative web design</h1>
            </div>
            <div className='words-someone'>
              <h1>&quot;Keep believing in your dream&quot;</h1>
              <p>Elon Musk</p>
            </div>
          </div>
        </div>
        <div className='container-about' id='about'>
          <h1>About Me</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
