import styles from './socialMedia.module.scss';

function SocialMedia(){
    return(
    <div className={styles.social_media}>
        <div className={styles.social_media_icon} data-title="Vk.com">
            <a href="https://vk.com/gliphbird">
            <img
                src="/img/icons/Vk_black.png"
                className={styles.minimize_icon}
                alt="Vk_black.png"
            />
            </a>
        </div>
        <div className={styles.social_media_icon} data-title="Telegram">
            <a href="https://t.me/alemastas">
            <img
                src="/img/icons/Telegram.png"
                className={styles.minimize_icon}
                alt="telegram.png"
            />
            </a>
        </div>
        <div className={styles.social_media_icon} data-title="Github">
            <a href="https://github.com/alemastas/test-task-neoflex-react">
            <img
                src="/img/icons/Git.png"
                className={styles.minimize_icon}
                alt="my_git.png"
            />
            </a>
        </div>
    </div>

    )
}
export default SocialMedia;