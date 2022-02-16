import Image from "next/image"
import styles from '../../styles/Navbar.module.scss'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><a href="">Works</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}