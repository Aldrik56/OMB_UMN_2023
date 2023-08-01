import { BgArt } from "../../Component/background";
import { InformasiOMB } from "../../Component/sectionInformasi";
import { Navbar } from "../../Component/navbar";
import { Footer } from "../../Component/footer";
import { LogoAndTagline } from "../../Component/logoAndTagline";
// import { BannerSurat } from "../../Component/bannerSurat";
import "./home1juni.css";
const Home1Juni = () => {
  return (
    <div className="bg1juni">
      <BgArt height="100vh"/>
      <Navbar />
      <LogoAndTagline />
      <InformasiOMB />
      <Footer />
    </div>
  );
};

export { Home1Juni };
