import React from "react";
import "./ApaItuOMB.scss";

function ApaItuOMB() {
    return (
        <div id="containerApaItuOMB">
            <div className="apaItuOMB">
                {/* <img id="ombakAtasApaItuOMB" src="./Assets/Home/Group 25-ombak.png" alt="" /> */}
                <div className="deskripsiOMB">
                    <h1>Apa itu OMB ?</h1>
                    <p id="first">
                        Orientasi Mahasiswa Baru (OMB) merupakan sebuah proses seremonial penyambutan mahasiswa baru di Universitas Multimedia Nusantara (UMN).
                        OMB UMN mengajarkan para mahasiswa untuk beradaptasi terhadap lingkungan kampus dan sekitarnya. Melalui kegiatan ini, peserta dapat
                        menerapkan nilai-nilai penting sebagai bekal dalam menghadapi perkuliahan.
                    </p>
                    <p>
                        Sesuai dengan logo OMB UMN 2023, yaitu Kupu-kupu Bidadari, para peserta diharapkan dapat bermetamorfosis dengan sempurna melalui rangkaian kegiatan OMB UMN 2023.
                    </p>
                </div>
                <div className="videoOMB">
                    <iframe
                        className="assetIframe"
                        src="https://www.youtube.com/embed/5x4np0U4zhY"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen="true"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default ApaItuOMB;
