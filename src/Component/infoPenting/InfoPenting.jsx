import React from 'react'
import styles from "./infoPenting.module.css"

function InfoPenting() {
    return (
        <div className={styles["container"]}>
            <div className={styles["header"]}>
                <img className={styles["bunga"]} src="./Assets/Home3Agu/Bunga-top.svg" alt="" />
                <h1 className={styles["title"]}>Informasi Penting & Wajib!</h1>
                <img className={styles["bunga"]} src="./Assets/Home3Agu/Bunga-top.svg" alt="" />
            </div>
            <div className={styles["box-content"]}>
                <div className={styles["content"]}>
                    <div className={styles["number"]}>
                        <h1 className={styles["num"]}>1</h1>
                    </div>
                    <div className={styles["textbox"]}>
                        <h3 className={styles["heading"]}>Mengisi Surat Edaran Rektorat</h3>
                        <p className={styles["text"]}><b>Surat Edaran Rektorat</b> merupakan surat yang berisikan
                            tentang pelaksanaan kegiatan OMB UMN 2023 secara menyeluruh. Seluruh
                            calon peserta wajib untuk membaca dan memahami dengan baik.
                        </p>
                    </div>
                </div>
                <div className={styles["line"]}></div>
                <div className={styles["content"]}>
                    <div className={styles["number"]}>
                        <h1 className={styles["num"]}>2</h1>
                    </div>
                    <div className={styles["textbox"]}>
                        <h3 className={styles["heading"]}>Mengisi Lembar Persetujuan</h3>
                        <p className={styles["text"]}><b>Lembar Persetujuan Keikutsertaan OMB UMN 2023 </b>
                            merupakan salah satu syarat untuk mengikuti OMB UMN 2023. Seluruh calon
                            peserta wajib untuk memeriksa kembali dokumen yang perlu disiapkan.
                        </p>
                    </div>
                </div>
                <div className={styles["line"]}></div>
                <div className={styles["dashed-gradient-line"]}></div>
                <div className={styles["content"]}>
                    <div className={styles["number"]}>
                        <h1 className={styles["num"]}>3</h1>
                    </div>
                    <div className={styles["textbox"]}>
                        <h3 className={styles["heading"]}>Mengumpulkan Lembar Persetujuan</h3>
                        <p className={styles["text"]}>Setelah mengisi Lembar Persetujuan Keikutsertaan
                            OMB UMN 2023, calon peserta OMB UMN 2023 wajib mengumpulkan dokumen tersebut
                            melalui formulir yang ada di bawah ini.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPenting