import { BgArt } from "../../Component/background";
import { Navbar } from "../../Component/navbar";
import { Footer } from "../../Component/footer";

import Header from "./Header";
import Content from "./Content";

// import "./header.css"
import "./linimasa.scss";

const Linimasa = () => {
  return (
    <div className="linimasa">
      <Navbar />
      <div className="bg_header">
        <BgArt height="100vh" />
      </div>
      <Header title="LINI MASA" />
      <Content />
      <Footer />
    </div>
  );
};

export { Linimasa };
