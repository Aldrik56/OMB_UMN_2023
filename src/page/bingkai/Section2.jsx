import { useState, useRef, createContext, useContext, useEffect } from "react";
import { toPng } from "html-to-image";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { fakultasArr } from "./data";

export const TwibbonContext = createContext();

const Section2 = () => {
  const twibbonRef = useRef(null);

  const [[atas, bawah, kiri, kanan], setPosisi] = useState([0, 0, 0, 0]);
  const [zoom, setZoom] = useState(1);
  const [rotasi, setRotasi] = useState(0);
  const [[fakultas, prodi], setFakultas] = useState([0, 0]);
  const [step, setStep] = useState(0);
  const [inputImage, setImage] = useState();

  const handleConvertToImage = () => {
    toPng(twibbonRef.current, { cacheBust: false })
      .then((dataURL) => {
        const link = document.createElement("a");
        link.download = "twibon omb umn 2023.png";
        link.href = dataURL;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const bingkaiStep = [
    <Step1 setStep={setStep} />,
    <Step2 setStep={setStep} />,
    <Step3 setStep={setStep} />,
    <Step4 setStep={setStep} />,
    <Step5 setStep={setStep} />,
  ];

  useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    <TwibbonContext.Provider
      value={{
        atas,
        bawah,
        kiri,
        kanan,
        setPosisi,
        zoom,
        setZoom,
        rotasi,
        setRotasi,
        fakultas,
        prodi,
        setFakultas,
        inputImage,
        setImage,
        twibbonRef,
        setStep,
        step,
      }}>
      <div id="s_2" className="s_2 relative">
        {(step == 0 || step == 1 || step == 2) && (
          <h1>Pilih foto untuk bingkai resmimu!</h1>
        )}
        {step == 3 && <h1>Isi nama dan program studimu pada teks berikut!</h1>}
        {step == 4 && (
          <h1>
            Bagikan fotomu di Instagram dan <i>tag</i> @ombumn !
          </h1>
        )}
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: (step + 1) * 20 + "%", height: "100%" }}></div>
        </div>
        <img className="b1" src="./Assets/Twibbon/bunga1.svg" />
        <img className="b2" src="./Assets/Twibbon/bunga2.svg" />
        {bingkaiStep[step]}
      </div>
    </TwibbonContext.Provider>
  );
};

export const ImageTwibbon = () => {
  const {
    atas = 0,
    kiri = 0,
    kanan = 0,
    bawah = 0,
    zoom = 0,
    rotasi = 0,
    inputImage = null,
    twibbonRef,
    fakultas = 0,
    prodi = 0,
  } = useContext(TwibbonContext);

  const warnaF = ["black", "#ffc634", "#fd6f1f", "#d9d9d9"];

  return (
    <div
      ref={twibbonRef}
      id="htmlContent"
      style={{
        backgroundColor: [warnaF[fakultas]],
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        zIndex: "1",
      }}
      className="bgCanvas">
      <img
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          top: "calc(50% + " + (atas - bawah) + "px)",
          left: "calc(50% + " + (kanan - kiri) + "px)",
          scale: `${zoom}`,
          transform: "translate(-50%, -50%) rotate(" + rotasi + "deg)",
          zIndex: "2",
        }}
        src={inputImage}
      />
      <img
        className="relative"
        style={{ width: "100%", height: "100%", zIndex: "3" }}
        src={
          "./Assets/Twibbon/twibbonTemplate/" +
          fakultasArr[fakultas].foto[prodi] +
          ".png"
        }
      />
    </div>
  );
};

export const BtnLanjut = () => {
  const { setStep, step } = useContext(TwibbonContext);

  return (
    <div onClick={() => setStep(step + 1)} className="btn-lanjut">
      <div
        style={{
          background: "var(--omb-white)",
          width: "100%",
          height: "100%",
          borderRadius: "2rem",
          padding: "0.5rem 2rem",
        }}>
        <span>{"Lanjut >"}</span>
      </div>
    </div>
  );
};

export const BtnKembali = () => {
  const { setStep, step } = useContext(TwibbonContext);

  return (
    <div onClick={() => setStep(step - 1)} className="btn-lanjut">
      <div
        style={{
          background: "var(--omb-white)",
          width: "100%",
          height: "100%",
          borderRadius: "2rem",
          padding: "0.5rem 2rem",
        }}>
        <span>{"< Kembali"}</span>
      </div>
    </div>
  );
};

export default Section2;
