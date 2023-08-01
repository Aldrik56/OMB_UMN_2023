import { BgArt } from "../../Component/background";
import { Footer } from "../../Component/footer";
import { Navbar } from "../../Component/navbar";
import "./RuteBus.scss";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { Section1 as Head } from "../../Component/pelaksanaan/Section1";

const RuteBus = () => {
  return (
    <div id="rute-bus" className="rute-bus">
      <Navbar />
      <div className="head">
        <BgArt height="100vh" />
        <Head title="RUTE BUS" />
      </div>
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
};

export default RuteBus;
export { RuteBus };
