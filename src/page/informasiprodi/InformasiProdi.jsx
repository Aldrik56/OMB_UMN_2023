import { BgArt } from "../../Component/background";
import { Navbar } from "../../Component/navbar";
import { Footer } from "../../Component/footer";

import Header from "./Header";
import Content from "./Content";

// import "./header.css"
import "./informasiprodi.module.scss";

const InformasiProdi = () => {
  return (
    <div className="informasiprodi">
      <Navbar />
      <div className="bg_header">
        <BgArt height="100vh" />
      </div>
      <Header title="PERKENALAN PRODI" />
      <Content />
      <Footer />
    </div>
  );
};

export { InformasiProdi };
