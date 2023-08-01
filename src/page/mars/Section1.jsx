import "./section1.scss";
// import styles from "./section1.module.css";
// import { Navbar " from "../navbar/Navbar";
// import { useState " from "react";
const Section1 = (props) => {
  return (
    <div className="section1">
      <p className="headline">{props.title}</p>
      <img className="bunga1" src="./Assets/Home/bunga.svg" alt="" />
      <img className="bunga2" src="./Assets/Home/bunga2.svg" alt="" />
      <img className="bunga3" src="./Assets/Home/bunga3.svg" alt="" />
      <img className="bunga4" src="./Assets/Home/bunga.svg" alt="" />
      <img className="awan1" src="./Assets/Home/awanAtas.svg" alt="" />
      <img className="awan2" src="./Assets/Home/awanAtas.svg" alt="" />
      <img className="awan3" src="./Assets/Home/awanAtas2.svg" alt="" />
      <img
        className="ombakAtas"
        src="./Assets/Home/ombakAtas.svg"
        alt=""
      />
    </div>
  );
};

export default Section1;
