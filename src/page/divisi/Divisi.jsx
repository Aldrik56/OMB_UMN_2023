import { BgArt } from "../../Component/background";
import { Navbar } from "../../Component/navbar";
import { Footer } from "../../Component/footer";

import Header from "./Header";
import Content from "./Content";

// import "./header.css"
import "./divisi.css";

const Divisi = () => {
  return (
    <div className="divisi">
      <Navbar />
      <div className="bg_header">
        <BgArt height="100vh"/>
      </div>
      <Header title="DIVISI" />
      <Content />
      <Footer />
    </div>
  );
};

export { Divisi };
