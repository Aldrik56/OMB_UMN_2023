import { useState, useEffect, useRef } from "react";
import styles from "./item.module.css";
import flipcardstyle from "./flipcardprodi.module.scss";

const data = [
  {
    front: "FAKULTAS ILMU KOMUNIKASI",
    belakang: [
      {
        fakultas: "Komunikasi Strategis dan Jurnalistik",
        instagram: "@pf_ilkom",
        link: "https://www.instagram.com/pf_ilkom/",
      },
    ],
  },
  {
    front: "FAKULTAS SENI DAN DESAIN",
    belakang: [
      {
        fakultas: "Desain Komunikasi Visual (DKV)",
        instagram: "@perkenalanprodi.dkv",
        link: "https://www.instagram.com/perkenalanprodi.dkv/",
      },
      {
        fakultas: "Film dan Animasi",
        instagram: "@perkenalanprodi.film",
        link: "https://www.instagram.com/perkenalanprodi.film/",
      },
      {
        fakultas: "Arsitektur",
        instagram: "@perkenalanprodi.ars",
        link: "https://www.instagram.com/perkenalanprodi.ars/",
      },
    ],
  },
  {
    front: "FAKULTAS TEKNIK DAN INFORMATIKA",
    belakang: [
      {
        fakultas: "Sistem Informasi",
        instagram: "@perkenalanprodi.si",
        link: "https://www.instagram.com/perkenalanprodi.si/",
      },
      {
        fakultas: "Informatika",
        instagram: "@ppif.umn",
        link: "https://www.instagram.com/ppif.umn/",
      },
      {
        fakultas: "Teknik Fisika dan Teknik Elektro",
        instagram: "@himfera_umn",
        link: "https://www.instagram.com/himfera_umn/",
      },
      {
        fakultas: "Teknik Komputer",
        instagram: "@acesumn",
        link: "https://www.instagram.com/acesumn/",
      },
    ],
  },
  {
    front: "FAKULTAS BISNIS",
    belakang: [
      {
        fakultas: "Manajemen",
        instagram: "@ppm.himma",
        link: "https://www.instagram.com/ppm.himma/",
      },
      {
        fakultas: "Akuntansi",
        instagram: "@perkenalanprodi.akun",
        link: "https://www.instagram.com/perkenalanprodi.akun/",
      },
      {
        fakultas: "Perhotelan",
        instagram: "@hmp_umn",
        link: "https://www.instagram.com/hmp_umn/",
      },
    ],
  },
];

const Item = () => {
  function isiItem() {
    return (
      <div className={flipcardstyle.flip_card__section_informasiprodi}>
        {data.map((item, index) => (
          <div key={index} className={flipcardstyle.flip_card_informasiprodi}>
            <div className={flipcardstyle.flip_card_inner_informasiprodi}>
              <div className={flipcardstyle.flip_card_front_informasiprodi}>
                <div>
                  <p className={flipcardstyle.p} dangerouslySetInnerHTML={{ __html: item.front }}></p>
                </div>
              </div>
              <div
                className={flipcardstyle.flip_card_back_informasiprodi}
                style={
                  index == 0
                    ? { background: "#FFC634" }
                    : index == 1
                    ? { background: "#000000" }
                    : index == 2
                    ? { background: "#FD6F1F" }
                    : { background: "#9C9C9C" }
                }
              >
                <h3>{item.front}</h3>
                {item.belakang.map((faculty, index) => (
                  <a href={faculty.link} key={index} target="_blank" rel="norefferer" className={flipcardstyle.faculty_capsule}>
                    <p className={flipcardstyle.p}>{faculty.fakultas}</p>
                    <div className={flipcardstyle.akun}>
                      <p className={[flipcardstyle.prodi_instagram,flipcardstyle.p ].join(" ")}>{faculty.instagram}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.linimasa_item} id="barang">
      <div className={styles.linimasa_item_title}>
        <div className={styles.linimasa_item_title_content}>
          Perkenalan Prodi merupakan bagian dari kegiatan OMB UMN 2023. Jika peserta OMB UMN 2023 membutuhkan informasi yang berkaitan dengan pelaksanaan
          Perkenalan Prodi, peserta bisa langsung menghubungi akun resmi himpunan terkait. <br></br>
          <br></br>Berikut merupakan akun resmi dari kegiatan perkenalan prodi yang dapat dihubungi.
        </div>
      </div>
      <div className="keterangan-mobile">
        <h1 className={styles.h1}>KONTAK RESMI</h1>
      </div>
      <div>{isiItem()}</div>
    </div>
  );
};

export { Item };
