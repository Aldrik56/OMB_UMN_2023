import styles from "./Heading.module.css";
const Heading = (props) => {
  return (
    <div className={styles.section1}>
      <p className={styles.headline}>{props.title}</p>
      <img
        className={styles.ombakAtas}
        src="./Assets/Home/ombakAtas.svg"
        alt=""
      />
      {props.children}
    </div>
  );
};

export { Heading as Heading };
