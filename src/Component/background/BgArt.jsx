import styles from "./bgArt.module.css";

const BgArt = (props) => {
  // const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
  // const isiOS = !!navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/);
  // const isMac = !!navigator.userAgent.match(/(macintosh|macintel|macppc|mac68k|macos)/i);

  function detectIos() {
    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
    var isiOS = !!navigator.userAgent.match(/(iPod|iPhone|iPad)/i);
    var isMac = !!navigator.userAgent.match(
      /(macintosh|macintel|macppc|mac68k|macos)/i
    );
    console.log(props.height);
    if (isiOS || isMac) {
      return (
        <div className={styles.bgArt__section} style={{ height: props.height }}>
          <div className={styles.backgroundiOS}></div>
        </div>
      );
    } else {
      return (
        <div className={styles.bgArt__section} style={{ height: props.height }}>
          <div className={[styles.circle2, styles.z_3].join(" ")}></div>
          <div className={[styles.circle1, styles.z_3].join(" ")}></div>
          <div className={[styles.circle3, styles.z_3].join(" ")}></div>
        </div>
      );
    }
  }
  // return <>{detectIos()}</>;
  return(
    <div>
      <div className={styles.bgArt__section} style={{ height: props.height }}></div>
    </div>
  );
};

export default BgArt;
export { BgArt };
