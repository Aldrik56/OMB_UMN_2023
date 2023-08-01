import styles from "./informasiOMB.module.css";
import { useState } from "react";

const InformasiOMB = () => {
  const [expand, setExpand] = useState(false);
  const moreClick = () => {
    console.log("clicked");
    setExpand((prev) => (prev ? false : true));
  };

  return (
    <div className={styles.informasiOMB}>
      {/* <div className="trapesium"></div> */}
      <img className={styles.waveAtas} src="./Assets/Home/ombak.svg" />

      <div className={styles.suratIzinOrtu}>
        <p className={styles.karmina}>
          {/* Kupu-kupu Bidadari terbang di langit biru,
          <br />
          Siapkah kamu mencetak sejarah baru? */}
          PEMBERITAHUAN
        </p>
        <br />
        <p>
          Informasi mengenai surat edaran dan persetujuan keikutsertaan OMB UMN 2023 akan segera kami umumkan pada Jumat, 30 Juni 2023. Kami mengimbau seluruh calon peserta OMB UMN 2023 untuk mengikuti dan memeriksa akun resmi kami secara
          berkala. Terima kasih.
        </p>
        {/* <p>Lembar persetujuan keikutsertaan OMB UMN 2023 merupakan salah satu syarat untuk mengikuti OMB UMN 2023. Kami mengimbau seluruh calon peserta untuk memeriksa kembali dokumen yang perlu disiapkan.</p>
        <br />
        <p>Untuk informasi lebih lengkap, silakan klik di bawah ini.</p>
        <div className={styles.suratIzinOrtu && styles.divletakbutton}>
          <a href="https://docs.google.com/document/d/1SWZ3YsCbCY_9SitgKIOo7CxMTaM6Noxmg3rS8RJE8NI/edit" target="__blank">
            <button>Unduh Template Dokumen</button>
          </a>
          <a href="https://forms.gle/XGNt9UKeQk1mteDo7" target="__blank">
            <button>Unggah Dokumen</button>
          </a>
        </div> */}
      </div>
      <img className={styles.waveBawah} src="./Assets/Home/ombak.svg" />
      <div className={styles.apaItuOmb}>
        <div>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <iframe
              className={styles.assetApaItuOmb}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5x4np0U4zhY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className={styles.deskripsiApaItuOmb}>
            <h1>Apa itu OMB?</h1>
            <p>
              Orientasi Mahasiswa Baru (OMB) merupakan sebuah proses seremonial penyambutan mahasiswa baru di Universitas Multimedia Nusantara (UMN). OMB UMN mengajarkan para mahasiswa untuk beradaptasi terhadap lingkungan kampus dan
              sekitarnya. Melalui kegiatan ini, peserta dapat menerapkan nilai-nilai penting sebagai bekal dalam menghadapi perkuliahan.
            </p>
            <p className={expand ? styles.show : styles.hidden}>Sesuai dengan logo OMB UMN 2023, yaitu Kupu-kupu Bidadari, para peserta diharapkan dapat bermetamorfosis dengan sempurna melalui rangkaian kegiatan OMB UMN 2023.</p>
            {/* <p className={expand ? styles.hidden : styles.show} style={{ cursor: "pointer", color: "lightgray" }} onClick={moreClick}>
              Selengkapnya...
            </p>  */}
            <a className="selengkapnya" href="/tentang-omb">
              <p>Selengkapnya...</p>
            </a>
            <p className={expand ? styles.show : styles.hidden} style={{ cursor: "pointer", color: "lightgray" }} onClick={moreClick}>
              Lebih sedikit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { InformasiOMB };
