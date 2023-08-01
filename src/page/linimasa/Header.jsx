import styles from "./header.module.css";

const Header = (props) => {
  return (
    <div className={styles.section1}>
      <p className={styles.headline}>{props.title}</p>
      <img className={styles.bunga1} src="./Assets/Home/bunga.svg" alt="" />
      <img className={styles.bunga2} src="./Assets/Home/bunga2.svg" alt="" />
      <img className={styles.bunga3} src="./Assets/Home/bunga3.svg" alt="" />
      <img className={styles.awan1} src="./Assets/Home/awanAtas.svg" alt="" />
      <img className={styles.awan2} src="./Assets/Home/awanAtas.svg" alt="" />
      <img className={styles.awan3} src="./Assets/Home/awanAtas2.svg" alt="" />
      <img className={styles.ombakAtas} src="./Assets/Home/ombakAtas.svg" alt="" />
    </div>
  );
};
export default Header;
