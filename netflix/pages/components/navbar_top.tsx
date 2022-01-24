import styles from '../../styles/components/NavbarTop.module.scss';

export default function NavbarTop() {
    return (
        <div className={styles.navbar_laptop}>
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
    )
}