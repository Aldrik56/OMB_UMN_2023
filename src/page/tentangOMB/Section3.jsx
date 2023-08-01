import { ReactComponent as Tagline } from "./TentangOMB/tagline.svg";
import Ombak from "./TentangOMB/ombak.svg";
import Logo from "./TentangOMB/logo.svg";

import { useEffect, useRef, useState } from "react";

const Section3 = () => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  return (
    <div id="s_3" className="relative">
      <img src={Ombak} style={{ width: "100vw" }} />
      <img className="sp1 absolute" src="./Assets/Home/Group-1.png" />
      <img className="sp2 absolute" src="./Assets/Home/kupu-kupu.png" />
      <img className="sp3 absolute" src="./Assets/Home/bungaPutih.png" />
      <img className="sp4 absolute" src="./Assets/Home/Group-4.png" />
      <img className="sp5 absolute" src="./Assets/Home/Group (1).png" />
      <img className="sp6 absolute" src="./Assets/Home/Group-1.png" />
      <img className="sp7 absolute" src="./Assets/Home/Group (1).png" />
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="flex-col center ">
        <div className="boxTitle">LOGO OMB UMN 2023</div>
        {window.matchMedia("(min-width: 768px)").matches && (
          <div className="keterangan">
            Geser kaca pembesar untuk mengenal 4 bagian logo OMB
          </div>
        )}
      </div>
      <div className="glass"></div>
      <div
        style={{ marginTop: "5%" }}
        className="flex-col center img-magnifier-container">
        <ImageMagnifier src={Logo} width="50vw" height={"auto"} />
      </div>

      <div className="tagline">
        <Tagline className="tagline_text " />
        <div className="flex-col center">
          <h3>“Tanamkan Integritas”</h3>
          <p>
            Para mahasiswa baru perlu menanamkan integritas untuk meningkatkan
            kualitas diri, baik melalui tutur kata maupun tingkah laku.
          </p>
        </div>

        <div className="flex-col center">
          <h3>“Bangkitkan Solidaritas”</h3>
          <p>
            Setelah menanamkan integritas, mahasiswa baru diharapkan dapat
            melakukan tindakan nyata dengan berkolaborasi sebagai bentuk
            kontribusi bagi sesama dan lingkungan sekitar.
          </p>
        </div>
      </div>
    </div>
  );
};

export { Section3 };

function ImageMagnifier({
  src,
  width,
  height,
  magnifierHeight = 100,
  magnifieWidth = 100,
  zoomLevel = 1.8,
}) {
  const [[x, y], setXY] = useState([200, 200]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  // const [showMagnifier, setShowMagnifier] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [show, setShow] = useState(3);

  const handleMouseDown = (e) => {
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    const elem = e.currentTarget.parentElement;
    const { pageX, pageY } = e;
    const { left, top } = elem.getBoundingClientRect();

    const newX = pageX - left - window.pageXOffset;
    const newY = pageY - top - window.pageYOffset;

    setXY([newX, newY]);
  };

  const handleMouseUp = (e) => {
    setDragging(false);
  };

  const handleTouchMove = (e) => {
    const elem = e.currentTarget.parentElement;
    const { pageX, pageY } = e.touches[0];
    const { left, top } = elem.getBoundingClientRect();

    const newX = pageX - left - window.pageXOffset;
    const newY = pageY - top - window.pageYOffset;

    setXY([newX, newY]);
  };

  const area1 = (x, y) => {
    const line1StartX = 0 * imgWidth;
    const line1StartY = imgHeight;
    const line1EndX = imgWidth;
    const line1EndY = 0;

    return isPointOnLine(x, y, line1StartX, line1StartY, line1EndX, line1EndY);
  };

  function isPointOnLine(x, y, lineStartX, lineStartY, lineEndX, lineEndY) {
    const slope = (lineEndY - lineStartY) / (lineEndX - lineStartX);
    const expectedY = slope * (x - lineStartX) + lineStartY;

    return Math.abs(y - expectedY) <= 40; // Adjust the tolerance as needed
  }

  const checkAboveLine = (x, y) => {
    const lineStartX = 0 * imgWidth;
    const lineStartY = imgHeight;
    const lineEndX = imgWidth;
    const lineEndY = 0;
    const slope = (lineEndY - lineStartY) / (lineEndX - lineStartX);
    const expectedY = slope * (x - lineStartX) + lineStartY;

    return y < expectedY;
  };

  const checkUnderLine = (x, y) => {
    x -= 40;
    const lineStartX = 0 * imgWidth;
    const lineStartY = imgHeight;
    const lineEndX = imgWidth;
    const lineEndY = 0;
    const slope = (lineEndY - lineStartY) / (lineEndX - lineStartX);
    const expectedY = slope * (x - lineStartX) + lineStartY;

    return y - 40 > expectedY;
  };

  const clickXY = (e) => {
    const elem = e.target;
    console.log(e);
    const pageX = e.pageX;
    const pageY = e.pageY;
    const { left, top } = elem.getBoundingClientRect();

    const newX = pageX - left - window.pageXOffset;
    const newY = pageY - top - window.pageYOffset;
    setXY([newX, newY]);
  };

  useEffect(() => {
    if (x > 0.65 * imgWidth) {
      // fonttype
      setShow(4);
    } else if (checkAboveLine(x, y)) {
      // sayap
      setShow(3);
    } else if (checkUnderLine(x, y) && y >= 0) {
      // bunga
      setShow(2);
    } else if (area1(x, y) && y >= 0.5 * imgHeight) {
      // kupu-kupu
      console.log("bener");
      setShow(1);
      console.log("bener2");
    }
  }, [x, y]);

  return (
    <div className="flex center ImageMagnifier">
      <div
        style={{
          position: "relative",
          height: height,
        }}>
        <img
          className="logo "
          src={src}
          style={{ height: height }}
          onMouseEnter={(e) => {
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setSize([width, height]);
          }}
          // onMouseMove={handleMouseMove}
          // onMouseLeave={() => {
          //   setShowMagnifier(false);
          // }}
          onClick={(e) => clickXY(e)}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          alt="img"
        />
        {window.matchMedia("(min-width: 768px)").matches && (
          <div
            style={{
              borderRadius: "50%",
              // display: showMagnifier ? "" : "none",
              position: "absolute",
              pointerEvents: dragging ? "auto" : "none",
              height: `${magnifierHeight}px`,
              width: `${magnifieWidth}px`,
              top: `${y - magnifierHeight / 2}px`,
              left: `${x - magnifieWidth / 2}px`,
              opacity: "1",
              border: "2px solid lightgray",
              backgroundImage: `url('${src}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${imgWidth * zoomLevel}px ${
                imgHeight * zoomLevel
              }px`,
              backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
              backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
              cursor: dragging ? "grabbing" : "grab",
              boxShadow: "2px 2px 10px 0px rgba(0,0,0,0.5)",
            }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}></div>
        )}
      </div>

      {window.matchMedia("(min-width: 768px)").matches ? (
        show !== false && (
          <div className="flex center parentTextBox">
            <div className="textBox" style={{ display: show ? "" : "none" }}>
              <b>
                <h3>{logoArr[show].Judul}</h3>
              </b>
              {typeof logoArr[show].Isi == "string" ? (
                <p
                  dangerouslySetInnerHTML={{
                    __html: logoArr[show].Isi,
                  }}></p>
              ) : (
                <ol>
                  {logoArr[show].Isi.map((e) => (
                    <li dangerouslySetInnerHTML={{ __html: e }}></li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        )
      ) : (
        <div>
          {logoArr.map((e) => {
            if (e.Judul != null) {
              return (
                <div
                  className="textBox"
                  style={{ marginTop: "1rem", display: show ? "" : "none" }}>
                  <b>
                    <h3>{e.Judul}</h3>
                  </b>
                  {typeof e.Isi == "string" ? (
                    <p dangerouslySetInnerHTML={{ __html: e.Isi }}></p>
                  ) : (
                    <ol>
                      {e.Isi.map((x) => (
                        <li dangerouslySetInnerHTML={{ __html: x }}></li>
                      ))}
                    </ol>
                  )}
                </div>
              );
            } else return null;
          })}
        </div>
      )}
    </div>
  );
}

const logoArr = [
  {},
  {
    Judul:
      "Kupu-kupu Bidadari yang hinggap di atas bunga melambangkan penyerbukan peserta OMB UMN 2023.",
    Isi: `Kupu-kupu Bidadari merupakan spesies endemik dari Sulawesi yang juga menggambarkan proses transformasi mahasiswa baru menjadi individu yang berkarakter, berkualitas tinggi, berkolaborasi, dan bermanfaat bagi lingkungan serta sesama`,
  },
  {
    Judul:
      "4 warna pada kelopak bunga melambangkan keempat fakultas yang terdapat di UMN. ",
    Isi: [
      "Warna kuning untuk Fakultas Ilmu Komunikasi",
      "Warna hitam untuk Fakultas Seni dan Desain",
      "Warna abu-abu untuk Fakultas Bisnis dan Perhotelan",
      "Warna jingga untuk Fakultas Teknik dan Informatika",
    ],
  },
  {
    Judul:
      "Warna biru melambangkan Universitas Multimedia Nusantara (UMN) itu sendiri.",
    Isi: "Hal ini menggambarkan bagaimana UMN sebagai institusi yang menjadi pilar utama dalam membantu menyerbuki keempat fakultas yang terdapat di dalamnya agar dapat terus berkembang dan mekar menjadi bunga yang indah.",
  },
  {
    Judul:
      "Huruf menyambung melambangkan sinergi dan kolaborasi, sesuai dengan nilai yang dibawa dalam OMB UMN 2023.",
    Isi: `Pada Huruf B dan N juga terdapat aset visual daun yang melambangkan unsur alam, yaitu habitat dari Kupu-kupu Bidadari.`,
  },
];

export default ImageMagnifier;
