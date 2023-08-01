import "./TentangOMB.scss";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Navbar } from "../../Component/navbar";
import { Footer } from "../../Component/footer";
import { Section1 as Head } from "../../Component/pelaksanaan/Section1";
import { BgArt } from "../../Component/background/BgArt";

const TentangOMB = () => {
  return (
    <div className="TentangOMB">
      <Navbar />
      <div className="bg-header relative">
        <BgArt height="100vh"/>
        <Head title="TENTANG" />
      </div>
      <Section1 />
      <Section3 />
      <Section2 />

      <Footer />
    </div>
  );
};

export { TentangOMB };
