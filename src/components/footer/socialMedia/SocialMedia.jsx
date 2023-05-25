import styles from './socialMedia.module.scss';
import vkblack from "../../../img/icons/Vk_black.png";
import tlgrm from "../../../img/icons/Telegram.png";
import gthb from "../../../img/icons/Git.png";

function SocialMedia(){
    return(
    <div className={styles.social_media}>
        <div className={styles.social_media_icon} data-title="Vk.com">
            <a href="https://vk.com/gliphbird">
            <img
                src={vkblack}
                className={styles.minimize_icon}
                alt="vk_com.png"
            />
            </a>
        </div>
        <div className={styles.social_media_icon} data-title="Telegram">
            <a href="https://t.me/alemastas">
            <img
                src={tlgrm}
                className={styles.minimize_icon}
                alt="telegram.png"
            />
            </a>
        </div>
        <div className={styles.social_media_icon} data-title="Github">
            <a href="https://github.com/alemastas/test-task-neoflex">
            <img
                src={gthb}
                className={styles.minimize_icon}
                alt="my_git.png"
            />
            </a>
        </div>
    </div>

    )
}
export default SocialMedia;