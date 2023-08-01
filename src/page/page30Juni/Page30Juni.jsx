import { FlipCard } from "../../Component/flipCard/FlipCard";
import ApaItuOMB from "../../Component/apaItuOMB/ApaItuOMB";
import { Navbar } from "../../Component/navbar";
import { SelamatDatang } from "../../Component/selamatDatang";
import { Footer } from "../../Component/footer";
import {BgArt} from "../../Component/background/BgArt";
import { SwaraBestari } from "../../Component/SwaraBestari";
import {GroupAngkatan} from "../../Component/groupAngkatan/groupAngkatan";
import "./page30Juni.scss";

const Page30Juni = () => {
    return (
        <div className="Page30Juni">
            <Navbar />
            <SelamatDatang/>
            <BgArt height="350vh"/>
            <FlipCard />
            <img src="./Assets/Home/Vector 18.webp" className="wavemobile" alt="" />
            <GroupAngkatan />
            <ApaItuOMB />
            <SwaraBestari />
            <Footer />
        </div>
    );
}

export { Page30Juni };