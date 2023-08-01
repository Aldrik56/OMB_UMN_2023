import React from 'react'
import { Navbar } from "../../Component/navbar";
import { BgArt } from "../../Component/background/BgArt";
import { Footer } from "../../Component/footer";
import { Section1 } from "../../Component/pelaksanaan/Section1";
import { Section2 } from "./Section2";
import "./TataCara.scss";
function TataCara() {
  return (
    <div className="tataCara__section">
      <Navbar/>
      <div className="bg_header">
        <BgArt height="100vh"/>
      </div>
      <Section1 title="TATA CARA" />
      <Section2 />
      <Footer />
    </div>
  )
}

export { TataCara };