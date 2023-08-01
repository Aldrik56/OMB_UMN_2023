import { BgArt } from "../../Component/background/BgArt";
import { Navbar } from "../../Component/navbar/Navbar";
import { Section1 } from "../../Component/pelaksanaan/Section1";
import { Section2 } from "../../Component/pelaksanaan/Section2";
import { Footer } from "../../Component/footer/Footer";
import styles from "./pelaksanaan.module.css";
const Pelaksanaan = () => {
  return (
    <div className={styles.Mars}>
      <Navbar />
      <div className= {styles.bg_header}>
        <BgArt height="100vh" />
      </div>
      {/* <BgArt />
      <Navbar /> */}
      <Section1 title="PELAKSANAAN" />
      <Section2 />
      <Footer />
    </div>
  );
};

export { Pelaksanaan as Pelaksanaan };
