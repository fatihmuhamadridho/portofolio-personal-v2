import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from './components/navbar'
import Image from 'next/image'
import Footer from './components/footer'
import styles from '../styles/Home.module.scss';
import FeaturedWorks from './components/home/featured_works'
import RecentPosts from './components/home/recent_posts'

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
        <div className={styles.section2} style={{ width: "100%", backgroundColor: "#EDF7FA", display: "flex", flexDirection: "column"}}>
          <div className={styles.section2_header} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2 style={{ fontSize: "22px", fontWeight: "400", lineHeight: "60px"}}>Recent posts</h2>
            <p style={{ fontSize: "16px", fontWeight: "normal", lineHeight: "23px"}}>View all</p>
          </div>
          <div className={styles.section2_cards} style={{ display: "flex", justifyContent: "space-between" }}>
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
