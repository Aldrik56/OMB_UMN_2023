import { SwiperSlide, Swiper } from "swiper/react";
import UpRow from "./TentangOMB/upRow.svg";
import ButtonCarousel from "./TentangOMB/button_bulat.svg";
import { useRef, useState, useEffect } from "react";
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
import Wave from "./TentangOMB/wave.svg";

const Section2 = () => {
  const waveRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [showVisi, setShowVisi] = useState(false);
  const [showMisi, setShowMisi] = useState(false);
  const [button1Y, setButton1Y] = useState(0);
  const [button2Y, setButton2Y] = useState(0);
  const [isDragging1, setIsDragging1] = useState(false);
  const [isDragging2, setIsDragging2] = useState(false);
  const dragRef1 = useRef(null);
  const dragRef2 = useRef(null);
  const parent = useRef(null);

  const handleMouseDown1 = (event) => {
    setIsDragging1(true);
    dragRef1.current = event.clientY;
  };

  const handleMouseDown2 = (event) => {
    setIsDragging2(true);
    dragRef2.current = event.clientY;
  };

  const handleMouseMove1 = (event) => {
    if (isDragging1) {
      const offsetY = event.clientY - dragRef1.current;

      // const newButtonY = Math.max(
      //   dragRef1.height,
      //   Math.min(0, button1Y + offsetY)
      // );
      setButton1Y((prevY) => prevY + offsetY);
      dragRef1.current = event.clientY;
    }
  };

  const handleMouseMove2 = (event) => {
    if (isDragging2) {
      const offsetY = event.clientY - dragRef2.current;

      setButton2Y((prevY) => prevY + offsetY);
      dragRef2.current = event.clientY;
    }
  };

  const handleMouseUp1 = () => {
    setIsDragging1(false);
  };

  const handleMouseUp2 = () => {
    setIsDragging2(false);
  };

  useEffect(() => {
    if (waveRef.current) {
      const updateWavePosition = () => {
        const waveHeight = waveRef.current.clientHeight;
        const topValue = -0.6 * waveHeight + "px";
        waveRef.current.style.top = topValue;
      };

      const waveImage = new Image();
      waveImage.onload = updateWavePosition;
      waveImage.src = Wave;

      window.addEventListener("resize", updateWavePosition);

      return () => {
        window.removeEventListener("resize", updateWavePosition);
      };
    }
  }, []);

  return (
    <div id="s_2" className="relative">
      <img ref={waveRef} className="wave absolute" src={Wave} alt="wave" />
      {/* <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div> */}
      <img className="sp1 absolute z-4" src="./Assets/Home/Group.png" />
      <img
        className="sp2 absolute"
        src="./Assets/Home/Group (1).png"
        alt="sp2"
      />
      <img className="sp3 absolute z-4" src="./Assets/Home/Group-1.png" />
      <img className="sp4 absolute z-4" src="./Assets/Home/bungaPutih.png" />
      <img className="sp5 absolute z-4" src="./Assets/Home/Group.png" />
      <img className="sp6 absolute z-4 " src="./Assets/Home/Group-4.png" />

      <div className="absolute tarik flex center z-4">
        <img style={{ width: "50%" }} src={UpRow} />
        <p>Tekan Tulisan di Bawah</p>
      </div>

      <div className="title z-4">Nilai - Nilai OMB UMN 2023</div>
      <div className="z-4" style={{ position: "relative" }}>
        <Swiper
          loop={true}
          onInit={() => setIsInitialized(true)}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper">
          {nilaiArr.map((e, index) => (
            <SwiperSlide
              className="swiper-item flex-col"
              style={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                backgroundColor: "var(--omb-white)",
                height: "100%",
                borderRadius: "2rem",
              }}
              key={index}>
              <h2 dangerouslySetInnerHTML={{ __html: e.Judul }}></h2>
              <div>
                {typeof e.Isi == "string" ? (
                  <p>{e.Isi}</p>
                ) : (
                  <ol>
                    {e.Isi.map((x) => (
                      <div>
                        <b>
                          <li>
                            <p style={{ marginBottom: "2px" }}>
                              <i>{x[0]}</i>
                            </p>
                          </li>
                        </b>
                        <p style={{ marginBottom: "5px" }}>{x[1]}</p>
                      </div>
                    ))}
                  </ol>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="swiper-button flex z-4"
          style={{
            zIndex: "10",
            position: "absolute",
          }}>
          {window.matchMedia("(min-width: 768px)").matches && (
            <img
              ref={prevRef}
              style={{ scale: "-1 1", width: "100%" }}
              src={ButtonCarousel}
              alt="button"
            />
          )}

          <img
            ref={nextRef}
            style={{ width: "100%" }}
            src={ButtonCarousel}
            alt="button"
          />

          {window.matchMedia("(max-width: 768px)").matches && (
            <img
              ref={prevRef}
              style={{ scale: "-1 1", width: "100%" }}
              src={ButtonCarousel}
              alt="button"
            />
          )}
        </div>
      </div>

      <div className="flex relative visi-misi z-4">
        <div className="title">
          Visi & Misi <br /> OMB UMN
        </div>
        <div
          ref={parent}
          style={{ transition: "1s" }}
          onClick={() => setShowVisi(!showVisi)}
          // onMouseMove={handleMouseMove1}
          // onMouseUp={handleMouseUp1}
        >
          <div
            ref={dragRef1}
            // onMouseDown={handleMouseDown1}
            className={"button-show absolute button-visi"}
            style={{
              transition: "2s",
              transform:
                showVisi &&
                `translateY(-${
                  dragRef1.current?.clientHeight - parent.current.clientHeight
                }px)`,
              // : `translateY(${button1Y}px)`,
            }}>
            <h2>Visi</h2>
            <p style={{ marginTop: "2rem" }}>
              Menjadi langkah awal untuk membentuk mahasiswa baru yang mampu
              mengembangkan potensi diri agar setiap individu dapat bersinergi
              dan memberikan kontribusi nyata bagi almamater, persada, dan
              sesama.
            </p>
          </div>
        </div>
        <div
          style={{ transition: "1s" }}
          onClick={() => setShowMisi(!showMisi)}
          // onMouseMove={handleMouseMove2}
          // onMouseUp={handleMouseUp2}
        >
          <div
            ref={dragRef2}
            // onMouseDown={handleMouseDown2}
            style={{
              transition: "2s",
              transform:
                showMisi &&
                `translateY(-${
                  dragRef2.current?.clientHeight - parent.current.clientHeight
                }px)`,
              // : `translateY(${button2Y}px)`,
            }}
            className={"button-show absolute button-misi"}>
            <h2>Misi</h2>
            <ol style={{ marginTop: "2rem" }}>
              <p>
                <li>
                  Mengimplementasikan nilai-nilai OMB UMN 2023 dan nilai yang
                  mencerminkan dunia perkuliahan ke dalam berbagai kegiatan
                  untuk disajikan kepada mahasiswa baru.
                </li>
              </p>

              <p>
                <li style={{ marginTop: "1rem" }}>
                  Mengajak dan mendorong mahasiswa baru untuk berani memulai
                  perjuangan untuk tekun mengembangkan diri dan membawa dampak
                  baik bagi diri sendiri, sesama, dan lingkungan.
                </li>
              </p>
            </ol>
          </div>
        </div>
      </div>
      <div className="list z-4"></div>
    </div>
  );
};

const nilaiArr = [
  {
    Judul: "KEBERANIAN", //1.
    Isi: "Keberanian merupakan pijakan awal bagi mahasiswa baru untuk menghadapi rintangan di masa perkuliahan.",
  },
  {
    Judul: "KETEGUHAN", //2.
    Isi: "Sebagai bentuk implementasi dari komitmen yang telah dipegang oleh para mahasiswa baru.",
  },
  {
    Judul: "KOLABORASI", //3.
    Isi: "Setelah menanamkan nilai integritas, mahasiswa baru berkolaborasi dengan membangkitkan solidaritas. Melalui hal ini, mahasiswa baru diharapkan dapat berkontribusi nyata untuk sesama dan lingkungan di sekitarnya.",
  },
  {
    Judul: "5C UMN", //4
    Isi: [
      [
        "Caring",
        "Mahasiswa memiliki sifat untuk peduli terhadap diri sendiri, sesama, dan lingkungan di sekitarnya.",
      ],
      [
        "Credible",
        "Mahasiswa memiliki integritas yang tinggi, kesadaran berorganisasi, dan dapat diandalkan.",
      ],
      [
        "Competent",
        "Mahasiswa memiliki penguasaan terhadap bidang yang dipelajari secara profesional dan mampu bekerja cerdas untuk hasil yang terbaik.",
      ],
      [
        "Competitive",
        "Mahasiswa memiliki sikap untuk berani berkompetisi mencapai prestasi yang terbaik dengan inovasi dan kreativitas, serta daya saing yang sehat.",
      ],
      [
        "Customer Delight",
        "Mahasiswa memiliki sifat untuk memberikan pelayanan terbaik bagi sesamanya, bahkan bisa lebih dari yang diharapkan.",
      ],
    ],
  },
  {
    Judul: `SDG NO. 4: <i>QUALITY EDUCATION</i>`, //5
    Isi: "Universitas Multimedia Nusantara memiliki tujuan untuk menerapkan pendidikan berkualitas yang inklusif dan adil. Oleh karena itu, OMB UMN 2023 berperan sebagai jembatan bagi mahasiswa baru untuk mendapatkan pendidikan yang berkualitas dalam menjalani masa perkuliahan.",
  },
];

export { Section2 };

const ButtonVisiMisi = () => {
  return (
    <div className="flex relative ButtonVisiMisi">
      <div className="button-show absolute">
        <h2>Visi</h2>
        <p style={{ marginTop: "2rem" }}>
          Menjadi langkah awal untuk membentuk mahasiswa baru yang mampu
          mengembangkan potensi diri agar setiap individu dapat bersinergi dan
          memberikan kontribusi nyata bagi almamater, persada, dan sesama.
        </p>
      </div>
      <div className="button-show absolute">
        <h2>Misi</h2>
        <ol style={{ marginTop: "2rem" }}>
          <li>
            Mengimplementasikan nilai-nilai OMB UMN 2023 dan nilai yang
            mencerminkan dunia perkuliahan ke dalam berbagai kegiatan untuk
            disajikan kepada mahasiswa baru.
          </li>
          <li style={{ marginTop: "1rem" }}>
            Mengajak dan mendorong mahasiswa baru untuk berani memulai
            perjuangan untuk tekun mengembangkan diri dan membawa dampak baik
            bagi diri sendiri, sesama, dan lingkungan.
          </li>
        </ol>
      </div>
    </div>
  );
};
