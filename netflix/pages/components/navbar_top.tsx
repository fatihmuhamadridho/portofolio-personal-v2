import styles from '../../styles/components/NavbarTop.module.scss';
import Image from 'next/image';

export default function NavbarTop() {
    return (
        <>
            <div className={styles.navbarTop_laptop}>
                <div className={styles.logo_laptop}>
                    <h1>Netflix</h1>
                </div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">TV Shows</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">News And Populer</a></li>
                    <li><a href="">My List</a></li>
                </ul>
            </div>
            <div className={styles.navbarTop_handphone}>
                <div className={styles.nav_header}>
                    <div className={styles.nav_headerTop}>
                        <div className={styles.nav_icon}>
                            <Image 
                                src={'/netflix-icon.png'} 
                                alt='' 
                                width={'100%'} 
                                height={'100%'} />
                        </div>
                        <div className={styles.nav_search}>
                            <input type="search" placeholder='Search' />
                        </div>
                        <div className={styles.nav_profile}>
                            <Image 
                                src={'/tirtaps.jpeg'}
                                alt=''
                                width={'100%'}
                                height={'100%'}
                            />
                        </div>
                    </div>
                    <div className={styles.nav_headerBottom}>
                        <ul>
                            <li><a href="">TV Shows</a></li>
                            <li><a href="">Movies</a></li>
                            <li><a href="">Categories V</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}