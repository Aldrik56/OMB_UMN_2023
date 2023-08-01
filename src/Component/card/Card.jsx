import React from "react";
import styles from "./card.module.css";
const suratPenting = [
    {
        id: 1,
        front: "Surat Edaran Rektorat",
        link: require("./SURAT EDARAN MAHASISWA BARU 2023.pdf"),
        img: "./Assets/Home3Agu/Surat-edaran.png",
    },
    {
        id: 2,
        front: "Lembar Persetujuan Keikutsertaan OMB UMN 2023",
        link: require("./Lembar Persetujuan Keikutsertaan OMB UMN 2023.docx"),
        img: "./Assets/Home3Agu/Lembar-persetujuan.png",
    },
    {
        id: 3,
        front: "Pengumpulan Lembar Persetujuan Keikutsertaan OMB UMN 2023",
        link: "https://forms.gle/km6oeWbG59oQxgGD8",
        img: "./Assets/Home3Agu/Form-kumpul.png",
    },
];

const Card = () => {
    return (
        <div className={styles["card-container"]}>
            {suratPenting.map((item, index) => (
                <div className={styles["card"]} key={index}>
                    <div className={styles["card-profile"]}>
                        <img className={styles["card-img"]} src={item.img} alt={item.front} />
                        <div className={styles["card-num"]}>{item.id}</div>
                    </div>
                    <h2 className={styles["card-name"]}>{item.front}</h2>
                    {index === 0 ? (
                        <div className={styles["card-bottom"]}>
                            <button className={styles["card-button"]}>
                                <a className={styles["card-link"]} href={item.link} download="SURAT EDARAN MAHASISWA BARU 2023" target="_blank" rel="noopener noreferrer">
                                    Akses
                                    <img className={styles["card-icon"]} src="./Assets/Home3Agu/External-link.svg" alt="" />
                                </a>
                            </button>
                        </div>
                    ) : index === 1 ? (
                        <div className={styles["card-bottom"]}>
                            <button className={styles["card-button"]}>
                                <a className={styles["card-link"]} href={item.link} download="Lembar Persetujuan Keikutsertaan OMB UMN 2023" target="_blank" rel="noopener noreferrer">
                                    Akses
                                    <img className={styles["card-icon"]} src="./Assets/Home3Agu/External-link.svg" alt="" />
                                </a>
                            </button>
                        </div>
                    ) : (
                        <div className={styles["card-bottom"]}>
                            <button className={styles["card-button"]}>
                                <a className={styles["card-link"]} href={item.link} download target="_blank" rel="noopener noreferrer">
                                    Akses
                                    <img className={styles["card-icon"]} src="./Assets/Home3Agu/External-link.svg" alt="" />
                                </a>
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export { Card };
