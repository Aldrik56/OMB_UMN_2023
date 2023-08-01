import styles from "./bannerSurat.module.css";

const BannerSurat = () => {
  return (
    <div className={styles.center}>
    <div className={styles.bannerSurat}>
      <div>
        <h1>Surat perizinan orang tua merupakan salah satu syarat untuk mengikuti OMB UMN 2023.</h1>
        <br/>
        <p>Kami mengimbau seluruh calon peserta untuk memeriksa kembali dokumen yang perlu disiapkan.</p>
        <img className={styles.waveAtas} src="./Assets/Home/ombakatas.png" alt="waveatas" />

        <div className={styles.divletakbutton}>
          <a href="https://docs.google.com/document/d/1SWZ3YsCbCY_9SitgKIOo7CxMTaM6Noxmg3rS8RJE8NI/edit"><button>Surat Perizinan Orang Tua</button></a>
        </div>
      </div>
    </div>
    </div>
  );
};

export { BannerSurat };
