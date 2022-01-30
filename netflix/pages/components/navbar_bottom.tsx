import styles from '../../styles/components/NavbarBottom.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faGamepad,
    faPhotoVideo,
    faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons'

export default function NavbarBottom() {
    return (
        <div className={styles.navbarBottom_handphone}>
            <ul>
                <li><a href="">
                    <FontAwesomeIcon icon={faHome} className={styles.icon} />
                    <p>Home</p>
                </a></li>
                <li><a href="">
                    <FontAwesomeIcon icon={faGamepad} className={styles.icon} />
                    <p>Games</p>
                </a></li>
                <li><a href="">
                    <FontAwesomeIcon icon={faPhotoVideo} className={styles.icon} />
                    <p>Coming Soon</p>
                </a></li>
                <li><a href="">
                    <FontAwesomeIcon icon={faArrowCircleDown} className={styles.icon} />
                    <p>Downloads</p>
                </a></li>
            </ul>
        </div>
    )
}