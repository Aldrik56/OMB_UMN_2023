import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import "./flipcard.scss";
import $ from "jquery";
const suratPenting = [
  {
    front: "Surat Edaran Rektorat",
    belakang:
      "Surat Edaran Rektorat merupakan surat yang berisikan tentang pelaksanaan kegiatan OMB UMN 2023 secara menyeluruh. Kami mengimbau seluruh calon peserta untuk membaca dan memahami dengan baik. Lalu, mengisi Lembar Persetujuan Keikutsertaan OMB UMN 2023.",
    link: require("./SURAT EDARAN MAHASISWA BARU 2023.pdf"),
    img: "./Assets/Home/surat_edaran.png",
  },
  {
    front: "Lembar Persetujuan Keikutsertaan OMB UMN 2023",
    belakang:
      "Lembar Persetujuan Keikutsertaan OMB UMN 2023 merupakan salah satu syarat untuk mengikuti OMB UMN 2023. Kami mengimbau seluruh calon peserta untuk memeriksa kembali dokumen yang perlu disiapkan.",
    link: require("./Lembar Persetujuan Keikutsertaan OMB UMN 2023.docx"),
    img: "./Assets/Home/Surat Izin Orang Tua.png",
  },
  {
    front: "Pengumpulan Lembar Persetujuan Keikutsertaan OMB UMN 2023",
    belakang:
      "Setelah mengisi Lembar Persetujuan Keikutsertaan OMB UMN 2023, calon peserta OMB UMN 2023 wajib mengumpulkan dokumen tersebut melalui formulir berikut.",
    link: "https://forms.gle/km6oeWbG59oQxgGD8",
    img: "./Assets/Home/Form Keikutsertaan.jpg",
  },
];

const FlipCard = () => {
  function eventMouseEnter(event) {
    //rotateY(180deg)
    event.currentTarget.firstChild.style.transform = `matrix3d(-1, 0, 0, 0,0, 1, 0, 0,0, 0, -1, 0,0, 0, 0, 1)`;
  }
  function eventMouseLeave(event) {
    //rotateY(0deg)
    event.currentTarget.firstChild.style.transform = `matrix3d(1, 0, 0, 0,0, 1, 0, 0,0, 0, 1, 0,0, 0, 0, 1)`;
  }

  function eventClick(event) {
    if (getComputedStyle(event.currentTarget.firstChild).transform == `matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)`) {
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
  return (
    <div className="flip_card__section">
      <img src="./Assets/Home/rantingKiri.svg" className="ranting1" alt="" />
      <img src="./Assets/Home/bunga3.svg" className="bunga1" alt="" />
      <img src="./Assets/Home/bunga4.svg" className="bunga2" alt="" />

      {suratPenting.map((item, index) => {
        if (index == 0) {
          return (
            <div key={index} className="flip_card">
              <div className="flip_card_inner">
                <div className="flip_card_front">
                  <div>
                    <img src={item.img} alt="" />
                    <p>{item.front}</p>
                  </div>
                </div>
                <div className="flip_card_back">
                  <div>
                    <p>{item.belakang}</p>
                    <button>
                      <a href={item.link} download="SURAT EDARAN MAHASISWA BARU 2023" target="_blank" rel="noopener noreferrer">
                        Akses di Sini
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (index == 1) {
          return (
            <div key={index} className="flip_card">
              <div className="flip_card_inner">
                <div className="flip_card_front">
                  <div>
                    <img src={item.img} alt="" />
                    <p>{item.front}</p>
                  </div>
                </div>
                <div className="flip_card_back">
                  <div>
                    <p>{item.belakang}</p>
                    <button>
                      <a href={item.link} download="Lembar Persetujuan Keikutsertaan OMB UMN 2023" target="_blank" rel="noopener noreferrer">
                        Akses di Sini
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index} className="flip_card">
              <div className="flip_card_inner">
                <div className="flip_card_front">
                  <div>
                    <img src={item.img} alt="" />
                    <p>{item.front}</p>
                  </div>
                </div>
                <div className="flip_card_back">
                  <div>
                    <p>{item.belakang}</p>
                    <button>
                      <a href={item.link} download target="_blank" rel="noopener noreferrer">
                        Akses di Sini
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export { FlipCard as FlipCard };
