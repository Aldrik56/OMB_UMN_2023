import styles from './logoAndTagline.module.css';

const LogoAndTagline = () => {
    return (
        <div className={styles.logo}>
            <img className={styles.logoPutih} src="./Assets/Home/Logo Putih Outer Glow 1.png" />
            <img className={styles.taglinePutih} src="./Assets/Home/Tagline.png" />
        </div>
    )
}

export {LogoAndTagline};
