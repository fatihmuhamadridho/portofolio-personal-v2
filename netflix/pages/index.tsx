import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.scss';
import Swal from 'sweetalert2';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const [bind, setBind] = useState(false);

  const test = () => {
    setTimeout(() => router.push('/identifier'), 3700)
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image 
          src={"/netflix-intro.gif"} 
          alt='' 
          // width={"100%"} 
          // height={"100%"} 
          layout='fill' 
        />
      </div>
      {test()}
    </div>
  )
}