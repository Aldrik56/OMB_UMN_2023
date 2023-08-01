import { Card } from "../../Component/card/Card";
import ApaItuOMB from "../../Component/apaItuOMB/3Agu/ApaItuOMB";
import InfoPenting from "../../Component/infoPenting/InfoPenting";
import { Navbar } from "../../Component/navbar";
import { SelamatDatang } from "../../Component/selamatDatang/header3Agu";
import { Footer } from "../../Component/footer";
import { BgArt } from "../../Component/background/BgArt";
import { SwaraBestari } from "../../Component/SwaraBestari";
import { GroupAngkatan } from "../../Component/groupAngkatan/groupAngkatan";
import styles from "./home3Agu.module.css"

const Home3Agu = () => {
    return (
        <div className={styles["Home3Agu"]}>
            <Navbar />
            <SelamatDatang />
            <BgArt height="600vh" />
            <img className={styles["wave-atas"]} src="./Assets/Home3Agu/Wave-atas.svg" alt="" />
            <div className={styles["info"]}>
                <img className={styles["kupu"]} src="./Assets/Home3Agu/kupu-outline-gradien.svg" alt="" />
                <InfoPenting />
                <Card />
                <GroupAngkatan />
                <img className={styles["putik"]} src="./Assets/Home3Agu/Putik-solid-sepi.svg" alt="" />
            </div>
            <img className={styles["wave-tengah"]} src="./Assets/Home3Agu/Wave-tengah.svg" alt="" />
            <div className={styles["apa"]}>
                <img className={styles["bunga"]} src="./Assets/Home3Agu/Putik-solid-top.svg" alt="" />
                <ApaItuOMB />
                <img className={styles["pohon"]} src="./Assets/Home3Agu/Pohon.svg" alt="" />
            </div>
            <div className={styles["swara"]}>
                <SwaraBestari />
            </div>
            <Footer />
        </div>
    );
}

export { Home3Agu };