import React from "react";
import styles from "./ApaItuOMB.module.css";

function ApaItuOMB() {
    return (
        <div className={styles["container"]}>
            <div className={styles["deskripsi"]}>
                <div className={styles["header"]}>
                    <img className={styles["bunga"]} src="./Assets/Home3Agu/Bunga-top.svg" alt="" />
                    <h1 className={styles["title"]}>Apa itu OMB ?</h1>
                    <img className={styles["bunga"]} src="./Assets/Home3Agu/Bunga-top.svg" alt="" />
                </div>
                <p className={styles["text"]}>
                    Orientasi Mahasiswa Baru (OMB) merupakan sebuah proses seremonial penyambutan mahasiswa baru di Universitas Multimedia Nusantara (UMN).
                    OMB UMN mengajarkan para mahasiswa untuk beradaptasi terhadap lingkungan kampus dan sekitarnya. Melalui kegiatan ini, peserta dapat
                    menerapkan nilai-nilai penting sebagai bekal dalam menghadapi perkuliahan.
                    <br />
                    <br />
                    {/* </p>
                <p> */}
                    Sesuai dengan logo OMB UMN 2023, yaitu Kupu-kupu Bidadari, para peserta diharapkan dapat bermetamorfosis dengan sempurna melalui rangkaian kegiatan OMB UMN 2023.
                </p>
                <button className={styles["redirect"]}>
                    <a className={styles["button-text"]} href="/tentang-omb">
                        Tentang OMB
                        <img className={styles["button-icon"]} src="./Assets/Home3Agu/Right-arrow.svg" alt="" />
                    </a>
                </button>
                <div className={styles["pantun"]}>
                    <img className={styles["angin"]} src="./Assets/Home3Agu/Udara.svg" alt="" />
                    <i>Kupu-kupu Bidadari terbang di langit biru,<br />Siapkah kamu mencetak sejarah baru?</i>
                    <img className={styles["angin"]} src="./Assets/Home3Agu/Udara-2.svg" alt="" />
                </div>
            </div>
            <div className={styles["video"]}>
                <iframe
                    className={styles["asset"]}
                    src="https://www.youtube.com/embed/5x4np0U4zhY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen="true"
                ></iframe>
            </div>
        </div>
    );
}

export default ApaItuOMB;
