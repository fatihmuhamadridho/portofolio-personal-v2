import styles from '../../../styles/Posts.module.scss';

export default function RecentPosts() {
    return (
        <div className={styles.recent_posts}>
            <h2>Making a design system from scratch</h2>
            <div className={styles.recent_posts_content}>
                <div className={styles.recent_posts_content_detail}>
                    <p>12 Feb 2020</p>
                    <span className={styles.recent_posts_content_detail_vl}></span>
                    <p>Design, Pattern</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
    )
}