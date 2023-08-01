import { useEffect } from "react";
import "./pendaftaran.css";
import { useState } from "react";
import $ from "jquery";
import BgArt from "./BgArt";
// import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Pendaftaran = () => {
  const navigate = useNavigate();
  const [rotateBunga, setRotateBunga] = useState();
  // const circle1 = $(".circle1");
  // const circle2 = $(".circle2");
  // const circle3 = $(".circle3");

  function detectIos() {
    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
    var isiOS = !!navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/);
    var isMac = !!navigator.userAgent.match(/(macintosh|macintel|macppc|mac68k|macos)/i);

    if (!isiOS && !isMac) {
      return (
        <>
          <div className="circle2 z-1"></div>
          <div className="circle1 z-1"></div>
          <div className="circle3 z-1"></div>
        </>
      );
    }
  }

  function pengumuman() {
    return (
      <div className="pengumumanSection">
        <p style={{ color: "rgba(0, 86, 131, 0.99)", fontWeight: "700", fontSize: "2rem" }} className="judulPengumuman">
          Kupu-kupu Bidadari gemar belajar, <br /> Terima kasih telah mendaftar!
        </p>
        <p style={{ color: "#E1E8EA", fontWeight: "400", fontSize: "1.875rem" }}>
          Harap cermati dan periksa kembali namamu dalam daftar berikut! Bila terdapat kesalahan dalam data yang tertera, segera hubungi kami melalui LINE (@yqq6359s).
        </p>
        <div className="button_lihat mt-2">
          <button
            onClick={() => {
              navigate("mengulang");
            }}
          >
            CEK DI SINI
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="section1">
      <BgArt />
      <div className="bg1">
        <div className="z-2">
          <div className="logo">
            <img className="logoPutih" src="./Assets/Home/Logo Putih Outer Glow 1.png" />
            <img className="taglinePutih" src="./Assets/Home/Tagline.png" />
          </div>
          <div style={{ marginTop: "100px" }} className="header relative">
            <p>
              DAFTAR NAMA PESERTA
              <br />
              OMB UMN 2023
            </p>
          </div>
          {pengumuman()}
        </div>
        {detectIos()}
      </div>
    </div>
  );
};

export default Pendaftaran;
