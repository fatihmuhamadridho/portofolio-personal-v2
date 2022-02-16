import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from './components/navbar'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram, faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import Footer from './components/footer'
import styles from '../styles/Home.module.scss';
import RecentPosts from './components/home/recent_posts'
import FeaturedWorks from './components/home/featured_works'

const Home: NextPage = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.section1}>
          <div className={styles.section1_content}>
            <h1>Hi, I am Fatih</h1>
            <h1>Frontend Web Developer</h1>
            <p>Frontend Website Developer who is creative and collaborative and has quite a lot of expertise. Has 6 months experience in developing websites using next.js and also scss. Has a hardworking and unyielding nature. Focus on self-development and achieving goals.</p>
            <button>Download Resume</button>
          </div>
            <div className={styles.section1_image}>
              <Image
                src={"/fatihmuhamadridho.jpeg"}
                alt=""
                width={"243px"}
                height={"243px"}
                layout="responsive"
              />
            </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.section2_header}>
            <h2>Recent posts</h2>
            <p>View all</p>
          </div>
          <div className={styles.section2_cards}>
            <RecentPosts />
            <RecentPosts />
          </div>
        </div>
        <div className={styles.section3}>
          <h2 style={{ fontSize: "22px", fontWeight: "400", lineHeight: "60px" }}>Featured works</h2>
          <div className={styles.section3_cards}>
            <FeaturedWorks years={'2020'} detail={'Dasboard'} />
            <FeaturedWorks years={'2018'} detail={'Illustration'} />
            <FeaturedWorks years={'2017'} detail={'Content Management System'} />
            <FeaturedWorks years={'2015'} detail={'Manage'} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
