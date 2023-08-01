import { useEffect } from "react";
import "./section1.css";
import { useState } from "react";
import $ from "jquery";

const Section1 = () => {
  const [rotateBunga, setRotateBunga] = useState();

  const circle1 = $(".circle1");
  const circle2 = $(".circle2");
  const circle3 = $(".circle3");
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

  var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
  var isiOS = !!navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/);

  if (isAndroid) {
    // do something for Android users
  }

  if (isiOS) {
  }

  function detectIos() {
    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
    var isiOS = !!navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/);
    var isMac = !!navigator.userAgent.match(
      /(macintosh|macintel|macppc|mac68k|macos)/i
    );

    if (isiOS || isMac) {
      return (
        <div className="bg1">
          <div className="z-2 absolute box-content1">
            <img
              style={{}}
              className="logoPutih"
              src="./Assets/Home/Logo Putih Outer Glow 1.png"
            />
            <img className="taglinePutih" src="./Assets/Home/Tagline.png" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg1">
          <div className="z-2 absolute box-content1">
            <img
              style={{}}
              className="logoPutih"
              src="./Assets/Home/Logo Putih Outer Glow 1.png"
            />
            <img className="taglinePutih" src="./Assets/Home/Tagline.png" />
          </div>
          <div className="circle2 z-1"></div>
          <div className="circle1 z-1"></div>
          <div className="circle3 z-1"></div>
        </div>
      );
    }
  }

  return (
    <div className="section1">
      <img className="ranting_kiri" src="./Assets/Home/Group-4.png" />
      <img
        style={{ transform: "scaleX(-1)" }}
        className="ranting_kanan"
        src="./Assets/Home/Group-4.png"
      />
      {/* <div
        style={{
          transform:
            "translate( -" +
            rotateBunga / 10 +
            "px,-" +
            rotateBunga / 10 +
            "px)",
          offsetPath:
            "path('M0" + rotateBunga / 10 + " L61," + rotateBunga / 10 + "')",
        }}
        className="absolute z-2 kupu-kupu">
        <img
          style={{ width: "15vw" }}
          className="kupu1"
          src="./Assets/Home/kupu-kupu.png"
        />
      </div> */}
      <div
        style={{
          transform:
            "translate(-" +
            rotateBunga / 10 +
            "px, " +
            rotateBunga / 10 +
            "px)",
        }}
        className="absolute bungaPutih2 z-2">
        <img
          style={{
            transform: "scaleX(-1)",
            width: "100%",
          }}
          src="./Assets/Home/bungaPutih.png"
        />
      </div>
      <div
        style={{
          transform:
            "rotate(-" +
            rotateBunga / 10 +
            "deg) translate(-" +
            rotateBunga / 5 +
            "px, -" +
            rotateBunga / 5 +
            "px)",
        }}
        className="absolute bungaPutih3 z-2">
        <img
          style={{
            width: "100%",
          }}
          src="./Assets/Home/Group.png"
        />
      </div>
      <div
        style={{
          transform:
            "rotate(" +
            rotateBunga / 10 +
            "deg) translate(" +
            rotateBunga / 10 +
            "px, -" +
            rotateBunga / 10 +
            "px)",
        }}
        className="absolute bungaPutih4 z-2">
        <img
          style={{
            width: "100%",
          }}
          src="./Assets/Home/Group.png"
        />
      </div>
      <div
        style={{
          transform:
            "translate(" + rotateBunga / 10 + "px, " + rotateBunga / 10 + "px)",
        }}
        className="absolute bungaPutih z-2">
        <img
          style={{
            width: "100%",
          }}
          src="./Assets/Home/bungaPutih.png"
        />
      </div>

      {/* <div className="bg1">
        <div className="z-2 absolute box-content1">
          <img
            style={{}}
            className="logoPutih"
            src="./Assets/Home/Logo Putih Outer Glow 1.png"
          />
          <img className="taglinePutih" src="./Assets/Home/Tagline.png" />
        </div>
        <div className="circle2 z-1"></div>
        <div className="circle1 z-1"></div>
        <div className="circle3 z-1"></div>
        
      </div> */}
      {detectIos()}

      <img
        className="ombakAtas"
        alt="ombakAtas"
        src="./Assets/Home/ombakAtas.png"
      />
    </div>
  );
};

const bungaPutar = (rotateBunga) => {
  return (
    <div
      style={{
        transform:
          "rotate(" +
          rotateBunga / 20 +
          "deg) translate(" +
          rotateBunga / 10 +
          "px,-" +
          rotateBunga / 10 +
          "px)",
      }}
      className="absolute bunga_putar">
      <div className="relative bunga_putar_relative">
        <img
          style={{
            transform: "scale(-1,-1)",
            bottom: "calc(-90% + " + rotateBunga / 30 + "%)",
          }}
          className="bagian_bunga1"
          src="./Assets/Home/bagianBunga.png"
        />
        <img
          style={{ top: "calc(-90% + " + rotateBunga / 30 + "%)" }}
          className="bagian_bunga2"
          src="./Assets/Home/bagianBunga.png"
        />
        <img
          style={{
            transform: "rotate(90deg)",
            left: "calc(75% + " + -rotateBunga / 30 + "%)",
          }}
          className="bagian_bunga3"
          src="./Assets/Home/bagianBunga.png"
        />
        <img
          style={{
            transform: "rotate(-90deg)",
            right: "calc(75% + " + -rotateBunga / 30 + "%)",
          }}
          className="bagian_bunga4"
          src="./Assets/Home/bagianBunga.png"
        />
        <img
          style={{ width: "30%" }}
          className="bulatan_bunga"
          src="./Assets/Home/bulet.png"
        />
      </div>
    </div>
  );
};

export default Section1;
