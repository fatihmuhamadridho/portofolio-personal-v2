import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from './components/layout'
import Swal from 'sweetalert2'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='content'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <title>Landing Page</title>
        </Head>
        <div className='main-content'>
          <div className='content-fill'>
            <div className='fill-header'>
              <h1>Save time</h1>
              <h1>managing social</h1>
              <h1>media for your</h1>
              <h1>business</h1>
            </div>
            <div className='fill-subHeader'>
              <p>Webflow empowers designers to build</p>
              <p>professional, custom websites in a completely</p>
              <p>visual canvas with no code.</p>
            </div>
            <button type='button' onClick={() => Swal.fire("Sorry this function still can't be used.")}>
              Get started <span>- it&apos;s free</span>
            </button>
          </div>
          <div className='content-supported'>
            <span className='brand'>Supported</span>
            <span className='brand'>
              <Image
                src={'/adobe_logo.png'}
                alt=''
                width={15}
                height={15} />
                <span style={{ marginLeft: "5px" }}>Adobe</span>
            </span>
            <span className='brand'>
              <Image
                src={'/rakuten_logo.png'}
                alt=''
                width={50}
                height={15} />
            </span>
            <span className='brand'>
              <Image
                src={'/google_logo.png'}
                alt=''
                width={50}
                height={15} />
            </span>
          </div>
        </div>
        <div className='banner'>
          <Image
            src={'/background.png'}
            alt=''
            width={'1780px'}
            height={'1600px'} />
        </div>
      </div>
    </Layout>
  )
}

export default Home
