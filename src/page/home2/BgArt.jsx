import { useEffect } from "react";
import "./pendaftaran.css";
import { useState } from "react";
import $ from "jquery";
// import "./bgart.css";
const BgArt =()=>{
    const [rotateBunga, setRotateBunga] = useState();
    const parallaxScroll = () => {
        let value = window.pageYOffset;
        console.log(value);
    
        setRotateBunga(30 + value);
      };
    
      useEffect(() => {
        window.addEventListener("scroll", parallaxScroll);
    
        return () => {
          window.removeEventListener("scroll", parallaxScroll);
        };
      }, []);
    return(
        <>
            <img className="ranting_kiri" src="./Assets/Home/Group-4.png" alt="" />
            <img className="kupu1" src="./Assets/Home/SUPERGRAFIS-5.png" alt="" />
            <img className="kupu2" src="./Assets/Home/SUPERGRAFIS-3.png" alt="" />
            <img className="kupu3" src="./Assets/Home/SUPERGRAFIS-5.png" alt="" />
            <img className="kupu4" src="./Assets/Home/SUPERGRAFIS-1.png" alt="" />
            <img className="ranting_kanan" src="./Assets/Home/Group-4.png" alt=""/>
            
            <img className="ombakAtas" alt="ombakAtas" src="./Assets/Home/ombakAtas.png" />
            <img className="bunga1" src="./Assets/Home/Group.png" alt="" />
            {/* <img className="bunga2" src="./Assets/Home/Group.png" alt=""/> */}
            <img className="bungaPutih1" src="./Assets/Home/bungaPutih.png" alt=""/>
            <img className="bungaPutih2" src="./Assets/Home/bungaPutih.png" alt=""/>
            <img className="bungaPutih3" src="./Assets/Home/bungaPutih.png" alt=""/>
            {/* bungaPutih */}
        </>
    );
}

export default BgArt;