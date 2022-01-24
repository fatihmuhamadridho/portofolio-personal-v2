import styles from '../../styles/components/NavbarBottom.module.scss';

export default function NavbarBottom() {
    return (
        <div className={styles.navbar_handphone}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Games</a></li>
                <li><a href="">Coming Soon</a></li>
                <li><a href="">Downloads</a></li>
            </ul>
        </div>
    )
}