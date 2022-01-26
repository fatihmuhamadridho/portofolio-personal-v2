import styles from '../../styles/components/NavbarTop.module.scss';

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
                        <h1>N</h1>
                        <div className={styles.nav_search}>
                            <input type="search" placeholder='Search' />
                        </div>
                        <h1>O</h1>
                    </div>
                    <div className={styles.nav_headerBottom}>
                        <ul>
                            <li><a href="">TV Shows</a></li>
                            <li><a href="">Movies</a></li>
                            <li><a href="">Categories</a></li>
                            <li><a href="">V</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}