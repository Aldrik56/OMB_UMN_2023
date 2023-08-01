import Pendaftaran from "./Pendaftaran";
import { Navbar } from "../../Component/navbar";
import { Footer } from "../../Component/footer";
import {InformasiOMB} from "../../Component/sectionInformasi";
// import Section2 from "./Section2";
const Home2 = () => {
  return (
    <div className="Home2">
      <Navbar />
      <Pendaftaran />
      <InformasiOMB />
      <Footer />
    </div>
  );
};

export { Home2 as Home2 };
