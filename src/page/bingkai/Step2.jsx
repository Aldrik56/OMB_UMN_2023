import { useContext } from "react";
import {
  BtnKembali,
  BtnLanjut,
  ImageTwibbon,
  TwibbonContext,
} from "./Section2";
import { fakultasArr } from "./data";
import { ProdiBtn } from "./Step1";

const Step2 = (props) => {
  const {
    fakultas,
    prodi,
    setImage,
    setFakultas,
    inputImage,
    kiri,
    kanan,
    atas,
    bawah,
    setPosisi,
    zoom,
    setZoom,
    rotasi,
    setRotasi,
  } = useContext(TwibbonContext);
  const twibbonImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="flex container1 step2">
      <ImageTwibbon />
      <div className="flex container1">
        <div className="flex flex-col btn-gap">
          <ProdiBtn />
          <div className="relative btn-type2">
            Ubah Foto
            <input
              onChange={twibbonImage}
              style={{
                opacity: "0",
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
              }}
              type="file"
            />
          </div>
          <BtnLanjut />
          <BtnKembali />
        </div>

        <div className="flex container-1 flex-center">
          <div className="flex flex-center">
            <img
              className="edit-btn"
              onClick={() =>
                inputImage && setPosisi([atas, bawah, kiri + 5, kanan])
              }
              src="./Assets/Twibbon/arrow-btn-kiri.svg"
            />

            <div className="flex flex-col btn-arrow-gap">
              <img
                className="edit-btn"
                onClick={() =>
                  inputImage && setPosisi([atas + 5, bawah, kiri, kanan])
                }
                src="./Assets/Twibbon/arrow-btn-atas.svg"
              />
              <img
                className="edit-btn"
                onClick={() =>
                  inputImage && setPosisi([atas, bawah + 5, kiri, kanan])
                }
                src="./Assets/Twibbon/arrow-btn-bawah.svg"
              />
            </div>
            <img
              className="edit-btn"
              onClick={() =>
                inputImage && setPosisi([atas, bawah, kiri, kanan + 5])
              }
              src="./Assets/Twibbon/arrow-btn-kanan.svg"
            />
          </div>
          <div className="flex flex-col flex-center">
            {/* <span>zoom in & out</span> */}
            <div className="flex container1">
              <img
                className="edit-btn"
                src="./Assets/Twibbon/zoomin.svg"
                onClick={() => inputImage && setZoom(zoom + 0.1)}></img>
              <img
                className="edit-btn"
                src="./Assets/Twibbon/zoomout.svg"
                onClick={() => inputImage && setZoom(zoom - 0.1)}></img>
            </div>
          </div>

          {/* <div>
              <span>rotate</span>
              <button onClick={() => inputImage && setRotasi(rotasi + 1)}>
                +
              </button>
              <button onClick={() => inputImage && setRotasi(rotasi - 1)}>
                -
              </button>
            </div> */}
        </div>

        <br />
        <br />
      </div>
    </div>
  );
};

export default Step2;
