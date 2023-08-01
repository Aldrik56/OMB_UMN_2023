import { useContext, useEffect, useState } from "react";
import {
  BtnKembali,
  BtnLanjut,
  ImageTwibbon,
  TwibbonContext,
} from "./Section2";
import { toPng } from "html-to-image";
import html2canvas from "html2canvas";
import { getTableRowUtilityClass } from "@mui/material";

const Step3 = (props) => {
  const { twibbonRef } = useContext(TwibbonContext);
  const [ada, setAda] = useState(false);
  const [pngImg, setPngImg] = useState(null);

  // const handleConvertToImage = async () => {
  //   console.log(twibbonRef.current);

  //   // if (webViewRef.current) {

  //   //   await webViewRef.current.captureScreen({
  //   //     format: "png",
  //   //     quality: 1.0,
  //   //   });
  //   // }

  //   try {
  //     const link = document.createElement("a");
  //     link.download = "twibon omb umn 2023.png";
  //     link.href = pngImg;
  //     link.click();
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   // try {
  //   //   const dataURL = await toPng(twibbonRef.current, { cacheBust: false });

  //   //   // Create a new image element with the data URL
  //   //   const image = new Image();
  //   //   image.src = dataURL;

  //   //   // Create a new document fragment to open the image in a new tab
  //   //   const newWindow = window.open();
  //   //   newWindow.document.write(image.outerHTML);
  //   //   newWindow.document.close();
  //   // } catch (err) {
  //   //   console.error(err);
  //   // }

  //   // try {
  //   //   const dataURL = await toPng(twibbonRef.current, { cacheBust: false });

  //   //   // Create a link element and set its href to the dataURL
  //   //   const link = document.createElement("a");
  //   //   link.href = dataURL;
  //   //   link.target = "_blank"; // Open in a new tab on iOS

  //   //   // Simulate a click on the link to present the image to the user
  //   //   link.click();
  //   // } catch (err) {
  //   //   console.error(err);
  //   // }
  // };

  const handleConvertToImage = () => {
    const link = document.createElement("a");
    link.download = "twibon_omb_umn_2023.png";
    link.href = pngImg;
    link.click();

    // if (!twibbonRef.current) return;

    // // Use html2canvas to capture the Twibbon and the user's image
    // html2canvas(twibbonRef.current).then((canvas) => {
    //   // Convert the canvas to a data URL
    //   const dataURL = canvas.toDataURL();
    //   setPngImg(dataURL);

    //   // Create a temporary anchor element to trigger the download
    //   // const link = document.createElement("a");
    //   // link.download = "twibon_omb_umn_2023.png";
    //   // link.href = dataURL;
    //   // link.click();
    // });
  };

  useEffect(() => {
    if (!twibbonRef.current) return;

    // Use html2canvas to capture the Twibbon and the user's image
    html2canvas(twibbonRef.current).then((canvas) => {
      // Convert the canvas to a data URL
      const dataURL = canvas.toDataURL();
      setPngImg(dataURL);

      // Create a temporary anchor element to trigger the download
      // const link = document.createElement("a");
      // link.download = "twibon_omb_umn_2023.png";
      // link.href = dataURL;
      // link.click();
    });
  }, []);

  // const getImg = async () => {
  //   try {
  //     const dataURL = await toPng(twibbonRef?.current);
  //     console.log("ada image");
  //     setPngImg(dataURL);

  //     console.log(dataURL);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   getImg();
  // }, [twibbonRef]);

  return (
    <div className="flex container1">
      <div className="relative" style={{}}>
        <ImageTwibbon />
        {/* <img
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            zIndex: "10",
            width: "100%",
          }}
          src={pngImg}
        /> */}
      </div>

      <div className="flex flex-col btn-gap">
        {/* {ada && <div>ada</div>} */}
        <button
          className="btn-foto"
          onClick={() => pngImg && handleConvertToImage()}>
          {pngImg ? "Unduh Foto" : "Sedang Memproses"}
        </button>
        <BtnLanjut />
        <BtnKembali />
      </div>
    </div>
  );
};

export default Step3;
