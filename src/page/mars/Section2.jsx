import "./section2.scss";

const Section2 = () => {
  return (
    <div id="mars2" className="section2">
      <div className="UMN">
        <div className="box-background">
          {/* <div className="background-putih-umn"></div> */}
          <div className="box">
            <div className="background-judul">
              <p className="judul">MARS UMN</p>
            </div>
            <p className="text">
              Universitas Multimedia Nusantara
              <br />
              Majukan ilmu dan teknologi bagi nusa bangsa
              <br />
              Universitas Multimedia Nusantara<br />
              Ciptakan profesional muda dan wirausaha
              <br />
              Baktikan karyaku kepada bangsaku melalui tridharma
              <br />
              Merintis langkahku menuju suksesku melalui almamaterku
              <br />
              Universitas Multimedia Nusantara
              <br />
              Demi kejayaan bangsa Indonesia
            </p>
          </div>
        </div>
        <div className="audio">
          <audio controls>
            <source src="./Assets/Mars/MarsUMN.mp3" type="audio/mpeg"></source>
          </audio>
        </div>
      </div>
      <div className="OMB">
        <div className="box-background">
          {/* <div className="background-putih-omb"></div> */}
          <div className="box">
            <div className="background-judul">
              <p className="judul">MARS OMB</p>
            </div>
            <p className="text">
              Kamilah anak bangsa prestasi Nusantara
              <br />
              Merangkai makna bersumpah setia
              <br />
              Sebagai manusia
              <br />
              Menjunjung tinggi ilmu, sikap, dan perilaku
              <br />
              Bersatu dalam semangat baru
              <br />
              Sampai di akhir
              <br />
              Sampai di akhir
              <br />
              Sampai di akhir waktu
            </p>
          </div>
        </div>
        <div className="audio">
          <audio controls>
            <source src="./Assets/Mars/MarsOMB.mp3" type="audio/mpeg"></source>
          </audio>
        </div>
      </div>
      <img className="bunga" src="./Assets/Mars/Bunga.svg" alt="logo" />
      <img
        className="snowflake"
        src="./Assets/Mars/Snowflake_Bawah.svg"
        alt="logo"
      />
    </div>
  );
};

export default Section2;
