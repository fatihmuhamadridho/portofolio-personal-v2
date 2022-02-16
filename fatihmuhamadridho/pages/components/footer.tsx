import styles from '../../styles/Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWhatsapp,
    faInstagram,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.footer_socialmedia}>
                <FontAwesomeIcon icon={faWhatsapp} style={{ width: "30px", height: "30px", margin: "0px 10px" }} />
                <FontAwesomeIcon icon={faInstagram} style={{ width: "30px", height: "30px", margin: "0px 10px" }} />
                <FontAwesomeIcon icon={faLinkedin} style={{ width: "30px", height: "30px", margin: "0px 10px" }} />
            </div>
            <p>Copyright @2020 All rights reserved</p>
        </div>
    )
}