import { useState, useEffect, useRef } from "react";
import styles from "./item.module.css";

const hariPenetasan = [
  {
    front: "Baju Kerah Berwarna Bebas",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan atasan berkerah, baik kaus maupun kemeja dengan warna dan motif bebas. Baju tidak dilipat keluar pada saat digunakan.",
    img: "./Assets/FlipBarang/baju berkerah.svg",
  },
  {
    front: "Celana <i>Jeans</i> Hitam",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan celana <i>jeans</i> panjang berwarna hitam dengan model <i>slim fit</i>. Celana <i>jeans</i> yang dikenakan tidak memiliki ornamen, baik bergambar maupun berlubang, tidak ketat, tidak dilipat keluar, dan nyaman untuk digunakan pada saat beraktivitas pada Hari Penetasan.",
    img: "./Assets/FlipBarang/celana jeans.png",
  },
  {
    front: "Ikat Pinggang",
    belakang:
      "Peserta OMB UMN 2023 diperbolehkan menggunakan ikat pinggang berwarna hitam, polos, tidak bermotif, dan tidak beraksesoris. Penggunaan ikat pinggang bersifat opsional.",
    img: "./Assets/FlipBarang/ikat pinggang.png",
  },
  {
    front: "Gawai, <i>Charger, Earphone/Headphone</i>",
    belakang:
      "Peserta OMB UMN 2023 diharapkan mempersiapkan <i>gawai</i>, <i>charger</i>, dan <i>earphone/headphone</i> untuk mengikuti kegiatan pada Hari Penetasan.",
    img: "./Assets/FlipBarang/gawai.png",
  },
  {
    front: "Aplikasi Zoom",
    belakang:
      "Peserta OMB UMN 2023 wajib mengunduh perangkat lunak Zoom sebagai sarana pelaksanaan kegiatan pada Hari Penetasan.",
    img: "./Assets/FlipBarang/zoom.png",
  },
  {
    front: "Buku Catatan dan Alat Tulis",
    belakang:
      "Peserta OMB UMN 2023 wajib membawa buku catatan dan alat tulis untuk mencatat informasi penting selama rangkaian OMB UMN 2023 berlangsung.",
    img: "./Assets/FlipBarang/buku catatan dan alat tulis.png",
  },
  {
    front: "Botol Minum",
    belakang:
      "Peserta OMB UMN 2023 wajib menyiapkan botol minum dengan kapasitas minimal 600 ml yang tidak mudah pecah dan tidak sekali pakai.",
    img: "./Assets/FlipBarang/botol minum.webp",
  },
];

const pembentukanHari1 = [
  {
    front: "Kaus Kerah Polos Warna Fakultas",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan kaus polos berkerah sesuai warna fakultas masing-masing, yaitu:\nKuning: Fakultas Ilmu Komunikasi (Jurnalistik dan Komunikasi Strategis)\nJingga: Fakultas Teknik dan Informatika (Teknik Komputer, Teknik Elektro, Teknik Fisika, Informatika, dan Sistem Informasi)\nAbu-abu: Fakultas Bisnis (Manajemen dan Akutansi) dan D3 Perhotelan\nHitam: Fakultas Seni dan Desain (Desain Komunikasi Visual, Film dan Animasi, serta Arsitektur).\nKaus tidak memiliki kantong dan tidak bergaris. Logo atau gambar dengan ukuran maksimal 8 x 8 cm di bagian depan kaus diperbolehkan. Baju tidak dilipat keluar pada saat digunakan.",
    img: "./Assets/FlipBarang/Baju Fakultas.png",
  },
  {
    front: "Celana <i>Jeans</i> Hitam",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan celana <i>jeans</i> panjang berwarna hitam dengan model <i>slim fit</i>. Celana <i>jeans</i> yang dikenakan tidak memiliki ornamen, baik bergambar maupun berlubang, tidak ketat, tidak dilipat keluar, dan nyaman untuk digunakan pada saat beraktivitas pada Pembentukan Hari 1.",
    img: "./Assets/FlipBarang/celana jeans.png",
  },
  {
    front: "Sepatu Kets",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan sepatu kets bebas, nyaman, dan bersifat mengencangkan. Peserta OMB UMN 2023 juga wajib mengenakan kaus kaki.",
    img: "./Assets/FlipBarang/sepatu kets.png",
  },
  {
    front: "Tas Serut",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan tas serut dengan warna dan motif bebas pada Pembentukan Hari 1. Peserta tidak diperbolehkan menggunakan ransel atau jenis tas lainnya selain tas serut.",
    img: "./Assets/FlipBarang/tas serut.png",
  },
  {
    front: "Botol Minum",
    belakang:
      "Peserta OMB UMN 2023 wajib menyiapkan botol minum dengan kapasitas minimal 600 ml yang tidak mudah pecah dan tidak sekali pakai.",
    img: "./Assets/FlipBarang/botol minum.webp",
  },
  {
    front: "Bekal Makan",
    belakang:
      "Peserta wajib membawa tempat dan alat makan tidak sekali pakai dengan makanan sehat dan gizi cukup di dalamnya. Makanan instan, berkuah, dan/atau mengeluarkan bau menyengat tidak diperbolehkan.",
    img: "./Assets/FlipBarang/tempat makan.png",
  },
  {
    front: "Buku Catatan dan Alat Tulis",
    belakang:
      "Peserta OMB UMN 2023 wajib membawa buku catatan dan alat tulis untuk mencatat informasi penting selama rangkaian OMB UMN 2023 berlangsung.",
    img: "./Assets/FlipBarang/buku catatan dan alat tulis.png",
  },
  {
    front: "Handuk Good Morning",
    belakang:
      "Peserta OMB UMN 2023 wajib membawa handuk Good Morning pada Pembentukan Hari 1.",
    img: "./Assets/FlipBarang/handuk good morning.png",
  },
  {
    front: "Hijab dan Manset",
    belakang:
      "Peserta OMB UMN 2023 yang berhijab wajib menggunakan hijab dan manset hitam polos.",
    img: "./Assets/FlipBarang/manset.png",
  },
  {
    front: "Masker Sekali Pakai",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan masker sekali pakai berwarna putih dengan model KN95, KF94, atau medis selama rangkaian OMB UMN 2023.",
    img: "./Assets/FlipBarang/masker putih N95.png",
  },
  {
    front: "Topi Berlidah Lengkung",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan topi berlidah lengkung dengan warna dan motif bebas pada Pembentukan Hari 1. Peserta tidak diperbolehkan untuk memakai topi berlidah lurus atau <i>snapback</i>.",
    img: "./Assets/FlipBarang/Topi.png",
  },
  {
    front: "Ikat Pinggang",
    belakang:
      "Peserta OMB UMN 2023 diperbolehkan menggunakan ikat pinggang berwarna hitam, polos, tidak bermotif, dan tidak beraksesoris. Penggunaan ikat pinggang bersifat opsional.",
    img: "./Assets/FlipBarang/ikat pinggang.png",
  },
  {
    front: "Alat Salat",
    belakang:
      "Peserta OMB UMN 2023 yang beragama muslim diharapkan membawa kebutuhan salat pribadi untuk beribadah.",
    img: "./Assets/FlipBarang/alat salat.png",
  },
  {
    front: "Jas Hujan",
    belakang:
      "Peserta OMB UMN 2023 wajib membawa jas hujan dengan warna dan motif bebas.",
    img: "./Assets/FlipBarang/jas hujan.png",
  },
];

const pembentukanHari2 = [
  {
    front: "Kaus Kerah Putih Polos",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan kaus berkerah dengan warna putih polos, tidak memiliki kantong, dan tidak bergaris. Logo atau gambar dengan ukuran maksimal 8 x 8 cm di bagian depan kaus diperbolehkan. Baju tidak dilipat keluar pada saat digunakan.",
    img: "./Assets/FlipBarang/baju putih.png",
  },
  {
    front: "Celana <i>Jeans</i> Hitam",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan celana <i>jeans</i> panjang berwarna hitam dengan model <i>slim fit</i>. Celana <i>jeans</i> yang dikenakan tidak memiliki ornamen, baik bergambar maupun berlubang, tidak ketat, tidak dilipat keluar, dan nyaman untuk digunakan pada saat beraktivitas pada Pembentukan Hari 2.",
    img: "./Assets/FlipBarang/celana jeans.png",
  },
  {
    front: "Sepatu Kets",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan sepatu kets bebas, nyaman, dan bersifat mengencangkan. Peserta OMB UMN 2023 juga wajib mengenakan kaus kaki.",
    img: "./Assets/FlipBarang/sepatu kets.png",
  },
  {
    front: "Tas Serut",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan tas serut dengan warna dan motif bebas pada Pembentukan Hari 2. Peserta tidak diperbolehkan menggunakan ransel atau jenis tas lainnya selain tas serut.",
    img: "./Assets/FlipBarang/tas serut.png",
  },
  {
    front: "Botol Minum",
    belakang:
      "Peserta OMB UMN 2023 wajib menyiapkan botol minum dengan kapasitas minimal 600 ml yang tidak mudah pecah dan tidak sekali pakai.",
    img: "./Assets/FlipBarang/botol minum.webp",
  },
  {
    front: "Bekal Makan",
    belakang:
      "Peserta wajib membawa tempat dan alat makan tidak sekali pakai dengan makanan sehat dan gizi cukup di dalamnya. Makanan instan, berkuah, dan/atau mengeluarkan bau menyengat tidak diperbolehkan.",
    img: "./Assets/FlipBarang/tempat makan.png",
  },
  {
    front: "Buku Catatan dan Alat Tulis",
    belakang:
      "Peserta OMB UMN 2023 wajib membawa buku catatan dan alat tulis untuk mencatat informasi penting selama rangkaian OMB UMN 2023 berlangsung.",
    img: "./Assets/FlipBarang/buku catatan dan alat tulis.png",
  },
  {
    front: "Handuk Good Morning",
    belakang:
      "Peserta OMB UMN 2023 wajib membawa handuk Good Morning pada Pembentukan Hari 2.",
    img: "./Assets/FlipBarang/handuk good morning.png",
  },
  {
    front: "Hijab dan Manset",
    belakang:
      "Peserta OMB UMN 2023 yang berhijab wajib menggunakan hijab dan manset hitam polos.",
    img: "./Assets/FlipBarang/manset.png",
  },
  {
    front: "Masker Sekali Pakai",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan masker sekali pakai berwarna putih dengan model KN95, KF94, atau medis selama rangkaian OMB UMN 2023.",
    img: "./Assets/FlipBarang/masker putih N95.png",
  },
  {
    front: "Topi Berlidah Lengkung",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan topi berlidah lengkung dengan warna dan motif bebas pada Pembentukan Hari 1. Peserta tidak diperbolehkan untuk memakai topi berlidah lurus atau <i>snapback</i>.",
    img: "./Assets/FlipBarang/Topi.png",
  },
  {
    front: "Ikat Pinggang",
    belakang:
      "Peserta OMB UMN 2023 diperbolehkan menggunakan ikat pinggang berwarna hitam, polos, tidak bermotif, dan tidak beraksesoris. Penggunaan ikat pinggang bersifat opsional.",
    img: "./Assets/FlipBarang/ikat pinggang.png",
  },
  {
    front: "Alat Salat",
    belakang:
      "Peserta OMB UMN 2023 beragama Islam yang hendak melakukan ibadah wajib membawa kebutuhan alat salat pribadi.",
    img: "./Assets/FlipBarang/alat salat.png",
  },
  {
    front: "Jas Hujan",
    belakang:
      "Peserta OMB UMN 2023 wajib membawa jas hujan dengan warna dan motif bebas.",
    img: "./Assets/FlipBarang/jas hujan.png",
  },
];

const sidangSenat = [
  {
    front: "Baju Batik",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan baju batik dengan warna dan motif bebas. Untuk pria dapat mengenakan kemeja dan wanita dapat mengenakan <i>blouse</i> atau kemeja. Peserta dipersilakan untuk menggunakan kemeja yang berlengan pendek ataupun panjang.",
    img: "./Assets/FlipBarang/baju batik.png",
  },
  {
    front: "Celana <i>Jeans</i> Hitam",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan celana <i>jeans</i> panjang berwarna hitam dengan model <i>slim fit</i>. Celana <i>jeans</i> yang dikenakan tidak memiliki ornamen, baik bergambar maupun berlubang, tidak ketat, tidak dilipat keluar, dan nyaman untuk digunakan pada saat beraktivitas pada Sidang Senat Terbuka.",
    img: "./Assets/FlipBarang/celana jeans.png",
  },
  {
    front: "Ikat Pinggang",
    belakang:
      "Peserta OMB UMN 2023 diperbolehkan menggunakan ikat pinggang berwarna hitam, polos, tidak bermotif, dan tidak beraksesoris. Penggunaan ikat pinggang bersifat opsional.",
    img: "./Assets/FlipBarang/ikat pinggang.png",
  },
  {
    front: "Botol Minum",
    belakang:
      "Peserta OMB UMN 2023 wajib menyiapkan botol minum dengan kapasitas minimal 600 ml yang tidak mudah pecah dan tidak sekali pakai.",
    img: "./Assets/FlipBarang/botol minum.webp",
  },
  {
    front: "Buku Catatan dan Alat Tulis",
    belakang:
      "Peserta OMB UMN 2023 wajib membawa buku catatan dan alat tulis untuk mencatat informasi penting selama rangkaian OMB UMN 2023 berlangsung.",
    img: "./Assets/FlipBarang/buku catatan dan alat tulis.png",
  },
  {
    front: "Masker Sekali Pakai ",
    belakang:
      "Peserta OMB UMN 2023 wajib menggunakan masker sekali pakai berwarna putih dengan model KN95, KF94, atau medis selama rangkaian OMB UMN 2023.",
    img: "./Assets/FlipBarang/masker putih N95.png",
  },
];

const Item = () => {
  const [state, setState] = useState(0);

  function scrollToComponent() {
    const element = document.getElementById("barang");
    if (window.location.hash === '#barang') {
      element.scrollIntoView();
    }
  }

  function eventMouseEnter(event) {
    //rotateY(180deg)
    event.currentTarget.firstChild.style.transform = `matrix3d(-1, 0, 0, 0,0, 1, 0, 0,0, 0, -1, 0,0, 0, 0, 1)`;
  }
  function eventMouseLeave(event) {
    //rotateY(0deg)
    event.currentTarget.firstChild.style.transform = `matrix3d(1, 0, 0, 0,0, 1, 0, 0,0, 0, 1, 0,0, 0, 0, 1)`;
  }

  function eventClick(event) {
    if (
      getComputedStyle(event.currentTarget.firstChild).transform ===
      `matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)`
    ) {
      //rotateY(0deg)
      event.currentTarget.firstChild.style.transform = `matrix3d(1, 0, 0, 0,0, 1, 0, 0,0, 0, 1, 0,0, 0, 0, 1)`;
    } else {
      //rotateY(180deg)
      event.currentTarget.firstChild.style.transform = `matrix3d(-1, 0, 0, 0,0, 1, 0, 0,0, 0, -1, 0,0, 0, 0, 1)`;
    }
  }

  window.addEventListener("load", () => {
    if (window.innerWidth > 768) {
      document.querySelectorAll(".flip_card").forEach((item, index) => {
        item.removeEventListener("click", eventClick);
        item.addEventListener("mouseenter", eventMouseEnter);
        item.addEventListener("mouseleave", eventMouseLeave);
      });
    } else {
      document.querySelectorAll(".flip_card").forEach((item, index) => {
        item.removeEventListener("mouseenter", eventMouseEnter);
        item.removeEventListener("mouseleave", eventMouseLeave);
        item.addEventListener("click", eventClick);
      });
    }
    scrollToComponent();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      document.querySelectorAll(".flip_card").forEach((item, index) => {
        item.removeEventListener("click", eventClick);
        item.addEventListener("mouseenter", eventMouseEnter);
        item.addEventListener("mouseleave", eventMouseLeave);
      });
    } else {
      document.querySelectorAll(".flip_card").forEach((item, index) => {
        item.removeEventListener("mouseenter", eventMouseEnter);
        item.removeEventListener("mouseleave", eventMouseLeave);
        item.addEventListener("click", eventClick);
      });
    }
  });
  useEffect(() => {
    if (window.innerWidth > 768) {
      document.querySelectorAll(".flip_card").forEach((item, index) => {
        item.removeEventListener("click", eventClick);
        item.addEventListener("mouseenter", eventMouseEnter);
        item.addEventListener("mouseleave", eventMouseLeave);
      });
    } else {
      document.querySelectorAll(".flip_card").forEach((item, index) => {
        item.removeEventListener("mouseenter", eventMouseEnter);
        item.removeEventListener("mouseleave", eventMouseLeave);
        item.addEventListener("click", eventClick);
      });
    }
  }, [state]);

  function isiItem() {
    if (state === 0) {
      return (
        <div className="flip_card__section">
          {hariPenetasan.map((item, index) => (
            <div key={index} className="flip_card">
              <div className="flip_card_inner">
                <div className="flip_card_front">
                  <div>
                    <img src={item.img} alt="" />
                    <p dangerouslySetInnerHTML={{ __html: item.front }}></p>
                  </div>
                </div>
                <div className="flip_card_back">
                  <div>
                    <p dangerouslySetInnerHTML={{ __html: item.belakang }}></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (state === 1) {
      return (
        <div className="flip_card__section">
          {pembentukanHari1.map((item, index) => (
            <div key={index} className="flip_card">
              <div className="flip_card_inner">
                <div className="flip_card_front">
                  <div>
                    <img src={item.img} alt="" />
                    <p dangerouslySetInnerHTML={{ __html: item.front }}></p>
                  </div>
                </div>
                <div
                  className="flip_card_back"
                  style={{
                    overflow: "auto",
                    whiteSpace: "pre-wrap",
                    fontSize: "14px",
                  }}>
                  <div>
                    {item.belakang.split("\n").map((line, index) => (
                      <p
                        dangerouslySetInnerHTML={{ __html: line }}
                        key={index}></p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (state === 2) {
      return (
        <div className="flip_card__section">
          {pembentukanHari2.map((item, index) => (
            <div key={index} className="flip_card">
              <div className="flip_card_inner">
                <div className="flip_card_front">
                  <div>
                    <img src={item.img} alt="" />
                    <p dangerouslySetInnerHTML={{ __html: item.front }}></p>
                  </div>
                </div>
                <div className="flip_card_back">
                  <div>
                    <p dangerouslySetInnerHTML={{ __html: item.belakang }}></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (state === 3) {
      return (
        <div className="flip_card__section">
          {sidangSenat.map((item, index) => (
            <div key={index} className="flip_card">
              <div className="flip_card_inner">
                <div className="flip_card_front">
                  <div>
                    <img src={item.img} alt="" />
                    <p dangerouslySetInnerHTML={{ __html: item.front }}></p>
                  </div>
                </div>
                <div className="flip_card_back">
                  <div>
                    <p dangerouslySetInnerHTML={{ __html: item.belakang }}></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }

  function bgArtBawah() {
    return (
      <div className={styles.bgArtBawah}>
        <img
          className={styles.bunga}
          src="./Assets/Home/outline_bunga_biru.svg"
          alt=""
        />
        <img
          className={styles.bungakecil}
          src="./Assets/Home/outline_bungakecil_biru.svg"
          alt=""
        />
        <img
          className={styles.bungakecil2}
          src="./Assets/Home/outline_bungakecil_biru.svg"
          alt=""
        />
        <img
          className={styles.bungakecil3}
          src="./Assets/Home/outline_bungakecil_biru.svg"
          alt=""
        />
        <img
          className={styles.bungakecil4}
          src="./Assets/Home/outline_bungakecil_biru.svg"
          alt=""
        />
        <img
          className={styles.bungakecil5}
          src="./Assets/Home/outline_bungakecil_biru.svg"
          alt=""
        />
        <img
          className={styles.bungakecil6}
          src="./Assets/Home/outline_bungakecil_biru.svg"
          alt=""
        />
        <img
          className={styles.bungakecil7}
          src="./Assets/Home/outline_bungakecil_biru.svg"
          alt=""
        />
        <img
          className={styles.bungakecil8}
          src="./Assets/Home/outline_bungakecil_biru.svg"
          alt=""
        />
      </div>
    );
  }

  // SCROLL TO COMPONENT

  return (
    <div className={styles.linimasa_item} id="barang">
      <div className={styles.linimasa_item_title}>
        <div className={styles.linimasa_item_title_content}>
          BARANG YANG PERLU DISIAPKAN
        </div>
      </div>
      <div style={{ overflow: "auto", width: "100%", fontSize: "10px" }}>
        <div className={styles.linimasa_item__controller}>
          <div
            className={
              state === 0
                ? styles.controller__active
                : styles.controller__unactive
            }
            onClick={() => setState(0)}>
            <p>
              Hari Penetasan
              <br />
              21 Agustus 2023
            </p>
          </div>
          <div
            className={
              state === 1
                ? styles.controller__active
                : styles.controller__unactive
            }
            onClick={() => setState(1)}>
            <p>
              Pembentukan Hari 1
              <br />
              22 Agustus 2023
            </p>
          </div>
          <div
            className={
              state === 2
                ? styles.controller__active
                : styles.controller__unactive
            }
            onClick={() => setState(2)}>
            <p>
              Pembentukan Hari 2
              <br />
              23 Agustus 2023
            </p>
          </div>
          <div
            className={
              state === 3
                ? styles.controller__active
                : styles.controller__unactive
            }
            onClick={() => setState(3)}>
            <p>
              Sidang Senat Terbuka dan Kuliah Perdana
              <br />
              25 Agustus 2023
            </p>
          </div>
        </div>
      </div>
      <div className="keterangan-mobile">
        <h6>Tekan gambar untuk melihat keterangan tambahan</h6>
      </div>
      <div>{isiItem()}</div>
      {bgArtBawah()}
    </div>
  );
};

export { Item };
