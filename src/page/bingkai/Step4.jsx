import { useRef, useState } from "react";
import { BtnKembali, BtnLanjut } from "./Section2";

const Step4 = (props) => {
  const textRef = useRef(null);
  const [alert, setAlert] = useState(false);

  const salinClipBoard = () => {
    const copyToClipboard = (text) => navigator.clipboard.writeText(text);

    copyToClipboard(textRef.current.innerHTML);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, [2000]);
  };

  return (
    <div className="flex container1 step4">
      {alert && (
        <div
          className={alert && "alert-animate"}
          style={{
            padding: "1rem 2rem",
            // textAlign: "center",
            color: "white",
            fontFamily: "Proxima_bold",
            borderRadius: "2rem",
            background: "linear-gradient(to left, var(--omb-blue),var(--omb-purple))",
            position: "fixed",

            right: "1rem",
          }}
        >
          Text Telah Disalin
        </div>
      )}

      <div contentEditable={true} className="text-box" ref={textRef}>
        Kupu-kupu Bidadari terbang ke seluruh penjuru,<br/>
        Saya siap mencetak sejarah baru! <br/>
        … <br/>
        Halo! <br/>
        <br/>
        Perkenalkan nama saya <b>(nama)</b>, mahasiswa program studi <b>(prodi)</b>, Universitas Multimedia Nusantara 2023. Saya bangga untuk mencetak sejarah baru
        dengan mengikuti Orientasi Mahasiswa Baru UMN dan menjadi bagian dari keluarga besar Universitas Multimedia Nusantara. Saya siap untuk membangun potensi untuk bersinergi bagi almamater, persada, dan sesama. <br/>
        <br/>
        #OMBUMN2023 <br/>
        #TanamkanIntegritasBangkitkanSolidaritas
      </div>
      <div className="flex flex-col btn-gap">
        <button className="btn-foto" onClick={salinClipBoard}>
          Salin Text
        </button>
        <BtnLanjut />
        <BtnKembali />
      </div>
    </div>
  );
};

export default Step4;
