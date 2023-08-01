import "./section2.css";

const Section2 = () => {
  return (
    <div className="section2 relative">
      <div className="header relative">
        <img style={{ transform: "scaleX(-1)" }} className="bungakanan" src="./Assets/Home/supergrafis bunga2.png" />
        <img className="bungakiri" src="./Assets/Home/supergrafis bunga2.png" />
        <p>
          PENDAFTARAN PESERTA
          <br />
          OMB UMN 2023
          <img className="absolute kupuBiru2" src="./Assets/Home/kupu-kupuBiru.png" />
        </p>
      </div>
      <div className="tanggal">
        <div className="flex flex-column gap align-items-center">
          <h5>Pendaftaran dibuka</h5>
          <p>Senin, 8 Mei 2023</p>
          <p>Pukul 10.00 WIB</p>
        </div>
        <img style={{ width: "12vw" }} src="./Assets/Home/Frame 23.png" />
        <div className="flex flex-column gap align-items-center">
          <h5>Pendaftaran ditutup</h5>
          <p>Minggu, 14 Mei 2023</p>
          <p>Pukul 23.59 WIB</p>
        </div>
      </div>

      <div className="ketentuan">
        <div>
          <p className="judul">KETENTUAN PENDAFTARAN PESERTA</p>
        </div>
        <div className="list_ketentuan flex">
          <img className="absolute kupuBiru" src="./Assets/Home/kupu-kupuBiru.png" />
          {arrKetentuan.map((e, index) => {
            return (
              <>
                <div className="flex flex-column">
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1.4rem",
                    }}
                  >
                    {"0" + Number(index + 1)}
                  </p>
                  <p dangerouslySetInnerHTML={e}></p>
                </div>
                {index != arrKetentuan.length - 1 && <hr />}
              </>
            );
          })}
        </div>
      </div>

      <div className="button_daftar">
        <img style={{ width: "10vw", transform: "scaleX(-1)" }} src="./Assets/Home/supergrafis udara.png" />
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfj0izKEtOj5YcUX8Cv7cMDVhtlv9eiHcyKb7UWYdtKH4sgjw/viewform">
          <button>DAFTAR DI SINI</button>
        </a>

        <img style={{ width: "10vw" }} src="./Assets/Home/supergrafis udara.png" />
      </div>
      <img style={{ width: "100vw" }} src="./Assets/Home/ombakBawah.png" />
    </div>
  );
};

const arrKetentuan = [
  {
    __html: "Pendaftar harus merupakan <b>mahasiswa aktif Universitas Multimedia Nusantara angkatan 2018-2022</b> yang <b>belum pernah atau belum lulus</b> dalam kegiatan OMB.",
  },
  {
    __html: "Pendaftar dipersilakan untuk <b>mengisi formulir</b> yang tersedia di website resmi OMB UMN 2023 yang bisa diakses melalui <b>tombol di bawah ini.</b>",
  },
  {
    __html: "Pendaftar diwajibkan mengikuti akun <b>Instagram</b> OMB UMN (@ombumn)</b> untuk mengetahui <b>informasi</b> terkait pendaftaran peserta OMB UMN 2023.",
  },
  {
    __html: "Pendaftar yang <b>sudah dan berhasil terdaftar</b> akan <b>resmi menjadi peserta</b> serta wajib untuk mengikuti segala <b>peraturan dan ketentuan</b> yang berlaku di OMB UMN 2023",
  },
];

export default Section2;
