import { ReactComponent as CarouselButton } from "./TentangOMB/carousel_button.svg";
import Sp1 from "./TentangOMB/supergrafis1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Mousewheel,
  FreeMode,
  Pagination,
  Navigation,
} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";

SwiperCore.use([Mousewheel, FreeMode, Pagination, Navigation]);

const Section1 = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative" id="s_1">
      <img className="absolute sp1" src={Sp1} alt="sp1" />
      <img
        className="absolute sp2"
        src="./Assets/Home/supergrafis bunga2.png"
        alt="sp2"
      />
      <img
        className="absolute sp3"
        src="./Assets/Mengulang/kupu-kupu.png"
        alt="sp3"
      />

      <div className="textBox">
        <div className="title">
          Tentang OMB <br /> UMN 2023
        </div>
        <div className="text">
          Orientasi Mahasiswa Baru (OMB) merupakan sebuah proses seremonial
          penyambutan mahasiswa baru di Universitas Multimedia Nusantara (UMN).
          OMB UMN mengajarkan para mahasiswa untuk beradaptasi terhadap
          lingkungan kampus dan sekitarnya. Melalui kegiatan ini, peserta dapat
          menerapkan nilai-nilai penting sebagai bekal dalam menghadapi
          perkuliahan. 
        </div>
      </div>

      <div className="swiper">
        <CarouselButton ref={prevRef} className="button" />
        <Swiper
          onInit={() => setIsInitialized(true)}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper">
          {imageArr.map((e, index) => (
            <SwiperSlide
              style={{ width: "100%", overflow: "hidden" }}
              key={index}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: "2rem",
                }}
                className="flex center">
                <img
                  style={{
                    minWidth: "100%",
                    minHeight: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src={e}
                  alt={index}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <CarouselButton ref={nextRef} className=" button mirror" />
      </div>
    </div>
  );
};

const imageArr = [
  "./Assets/TentangOMB/picture1.webp",
  "./Assets/TentangOMB/picture2.jpeg",
  "./Assets/TentangOMB/picture3.webp",
];

export { Section1 };
