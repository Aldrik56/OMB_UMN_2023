import { useContext } from "react";
import { BtnLanjut, ImageTwibbon, TwibbonContext } from "./Section2";
import { fakultasArr } from "./data";

const Step1 = (props) => {
  const { fakultas, prodi, setFakultas, setImage, inputImage } =
    useContext(TwibbonContext);

  const twibbonImage = (e) => {
    console.log("clicked");
    setImage(URL.createObjectURL(e.target.files[0]));
    props.setStep(1);
  };

  return (
    <div className="step1">
      <div className="flex container1">
        <div className="flex container2">
          <div className="flex flex-col fakultas-box">
            <div
              onClick={() => setFakultas([0, 0])}
              className={
                "fakultas align-center " + (fakultas == 0 && " fakultas-act")
              }>
              <span>Fakultas Seni & Desain</span>
            </div>
            <div
              onClick={() => setFakultas([1, 0])}
              className={
                "fakultas align-center " + (fakultas == 1 && " fakultas-act")
              }>
              <span>Fakultas Ilmu Komunikasi</span>
            </div>
            <div
              onClick={() => setFakultas([2, 0])}
              className={
                "fakultas align-center " + (fakultas == 2 && " fakultas-act")
              }>
              <span>Fakultas Teknik dan Informatika</span>
            </div>
            <div
              onClick={() => setFakultas([3, 0])}
              className={
                "fakultas align-center " + (fakultas == 3 && " fakultas-act")
              }>
              <span>Fakultas Bisnis</span>
            </div>
          </div>
          <ImageTwibbon />
        </div>
        <div className="flex flex-col btn-gap">
          <ProdiBtn />
          <div className="relative btn-foto">
            Unggah Foto <img src="./Assets/Twibbon/btn-arrow.svg" />
            <input
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                opacity: "0",
                width: "100%",
                height: "100%",
              }}
              onChange={twibbonImage}
              type="file"></input>
          </div>
          {inputImage && <BtnLanjut />}
        </div>
      </div>
    </div>
  );
};

export const ProdiBtn = () => {
  const { fakultas, prodi, setFakultas } = useContext(TwibbonContext);

  return (
    <div className="flex flex-col prodi-btn">
      <h4><b>Pilih Program Studi</b></h4>
      {fakultasArr[fakultas].fakultas.map((x, index) => {
        return (
          <span
            key={index}
            className={"prodi " + (index == prodi && " active-prodi")}
            onClick={() => setFakultas([fakultas, index])}>
            {x}
          </span>
        );
      })}
    </div>
  );
};

export default Step1;
