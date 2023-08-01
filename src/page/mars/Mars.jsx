import Section1 from "./Section1";
import Section2 from "./Section2";
import "./mars.css";
import { Navbar } from "../../Component/navbar";
import { Footer } from "../../Component/footer";
import { BgArt } from "../../Component/background";

const Mars = () => {
  return (
    <div id="mars" className="Mars">
      <div className="bg_header">
        <BgArt height="100vh"/>
      </div>
      <Navbar />
      <Section1 title="MARS"/>
      <Section2 />

      <Footer />
    </div>
  );
};

export { Mars };
