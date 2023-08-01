import { useRef, useState } from "react";

import { Section1 as Head } from "../../Component/pelaksanaan/Section1";
import { BgArt } from "../../Component/background/BgArt";
import { FAQ } from "../../Component/FAQ/FAQ";
import { Navbar } from "../../Component/navbar";
import { Footer } from "../../Component/footer";
import "./FAQpage.scss";
const FAQpage = () => {
  return (
    <div id="bingkai">
      <Navbar />
      <div className="head">
        <BgArt height="100vh" />
        <Head title="FAQ" />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export {FAQpage};