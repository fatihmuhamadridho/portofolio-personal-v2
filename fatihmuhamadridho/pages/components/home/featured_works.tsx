import styles from '../../../styles/Works.module.scss';
import Image from 'next/image';

export default function FeaturedWorks(props: any) {
    return (
        <div className={styles.featured_works}>
            <div className={styles.featured_works_image}>
                <Image
                    src={"/fw1.png"}
                    alt=""
                    width={"200%"}
                    height={"200%"}
                />
            </div>
            <div className={styles.featured_works_content}>
                <h2>Designing Dashboards</h2>
                <div className={styles.featured_works_content_detail}>
                    <p className={styles.featured_works_content_detail_tahun}>{props.years}</p>
                    <p style={{ fontSize: "16px", fontWeight: "400", lineHeight: "30px" }}>{props.detail}</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
    )
}