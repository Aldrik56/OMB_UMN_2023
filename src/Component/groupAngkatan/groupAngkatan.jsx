import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import "./groupAngkatan.scss";
import "swiper/css/navigation";
import "swiper/css";
// import 'swiper/swiper.scss'; // Import the Swiper CSS styles
// import 'swiper/components/effect-creative/effect-creative.scss'; // Import any additional Swiper module styles
// import './groupAngkatan.scss';
const groupAngkatan = [
  {
    nama: "Grup WhatsApp Resmi Angkatan 2023",
    desc: "Yuk, gabung ke grup WhatsApp resmi angkatan 2023 sekarang juga!",
    linkdesc: "Masuk",
    link: "https://chat.whatsapp.com/FdpblVQlmaG9WFziVZahPG",
  },
  {
    nama: "Sesi Informasi OMB",
    desc: "Daftarkan dirimu dalam Sesi Informasi OMB untuk mendapatkan pemahaman yang lebih dalam terkait persiapan OMB UMN 2023!",
    linkdesc: "Daftar Sekarang",
    link: "https://bit.ly/SesiInformasiOMBUMN2023",
  },
  {
    nama: "Modul Kekerasan Seksual",
    desc: "Mari bersama menjunjung #KampusBebasKS dengan mengakses modul kekerasan seksual melalui tombol di bawah ini!",
    linkdesc: "Akses di Sini",
    link: "/Assets/Home/Panduan_Penanganan_Kekerasan_Seksual_di_Kampus.pdf",
  },
];

const GroupAngkatan = () => {
  const [swiper, setSwiper] = useState(null);
  return (
    <div id="grupAngkatanHome">
      <Swiper
        loop={true}
        slidesPerView={1}
        onSwiper={(s) => {
          setSwiper(s);
        }}
      >
        {groupAngkatan.map((item, index) => {
          return (
            <SwiperSlide>
              <div className="groupAngkatan__swiperControl">
                <button onClick={() => swiper.slidePrev()}>
                  <img src="./Assets/Home/button_bulat_kiri.svg" />
                </button>
                <button onClick={() => swiper.slideNext()}>
                  <img src="./Assets/Home/button_bulat_kanan.svg" />
                </button>
              </div>
              <div key={index} className="groupAngkatan">
                <h1>{item.nama}</h1>
                <p>{item.desc}</p>
              </div>
              <img className="groupAngkatan_bg" src="./Assets/Home/waveGroupAngkatan.svg" alt="" />
              <button className="groupAngkatan__masukGroup_button">
                <a href={item.link}>{item.linkdesc}</a>{" "}
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export { GroupAngkatan };
