import { useRef, useState } from "react";
import "./bingkaiResmi.scss";
import { Section1 as Head } from "../../Component/pelaksanaan/Section1";
import { BgArt } from "../../Component/background/BgArt";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { Navbar } from "../../Component/navbar";
import { Footer } from "../../Component/footer";

const BingkaiResmi = () => {
  return (
    <div id="bingkai">
      <Navbar />
      <div className="head">
        <BgArt height="100vh" />
        <Head title="BINGKAI RESMI" />
      </div>
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
};

export default BingkaiResmi;
export { BingkaiResmi };
