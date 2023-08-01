import styles from "./header.module.css"
const Header2 = () => {
    return (
        <div className="header">
            <p className="headline">DIVISI</p>
            <img className="snowflake_atas" src="./Assets/Mars/Snowflake1.svg" alt="logo" />
            <img className="snowflake_bawah" src="./Assets/Mars/Snowflake_2.svg" alt="logo" />
            {/* <img className="wave_1" src="./Assets/Mars/Wave_1.svg" alt="logo" />
            <img className="wave_2" src="./Assets/Mars/Wave_2.svg" alt="logo" />
            <img className="wave_shadow" src="./Assets/Mars/Wave_Shadow.svg" alt="logo" /> */}
            <img className="ombakAtas" src="./Assets/Home/ombakAtas.svg" alt="" />
        </div>
    );
}

const Header = (props)=> {
    return (
        <div className={styles.section1}>
            <p className={styles.headline}>{props.title}</p>
            <img className={styles.bunga1} src="./Assets/Home/bunga.svg" alt="" />
            <img className={styles.bunga2} src="./Assets/Home/bunga2.svg" alt="" />
            <img className={styles.bunga3} src="./Assets/Home/bunga3.svg" alt="" />
            <img className={styles.awan1} src="./Assets/Home/awanAtas.svg" alt="" />
            <img className={styles.awan2} src="./Assets/Home/awanAtas.svg" alt="" />
            <img className={styles.awan3} src="./Assets/Home/awanAtas2.svg" alt="" />
            <img
                className={styles.ombakAtas}
                src="./Assets/Home/ombakAtas.svg"
                alt=""
            />
        </div>
    );
}
export default Header;