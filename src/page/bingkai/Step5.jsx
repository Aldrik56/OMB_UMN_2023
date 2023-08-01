import { BtnKembali, ImageTwibbon } from "./Section2";

const Step5 = (props) => {
  return (
    <div className="flex container1">
      <ImageTwibbon />
      <div className="flex flex-col btn-gap">
        {/* <a href="https://www.instagram.com/">
          <button className="btn-foto">Bagikan Foto</button>
        </a> */}

        <div className="btn-type2" onClick={() => props.setStep(0)}>
          Selesai
        </div>
        <BtnKembali />
      </div>
    </div>
  );
};

export default Step5;
