import styles from '../../styles/components/NavbarBottom.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome
} from '@fortawesome/free-solid-svg-icons'

export default function NavbarBottom() {
    return (
        <div className={styles.navbar_handphone}>
            <ul>
                <li><a href="">
                    <FontAwesomeIcon icon={faHome} size='2x' />
                    <p>Home</p>
                </a></li>
                <li><a href="">Games</a></li>
                <li><a href="">Coming Soon</a></li>
                <li><a href="">Downloads</a></li>
            </ul>
        </div>
    )
}