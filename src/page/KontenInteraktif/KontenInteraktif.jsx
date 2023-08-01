import Game from "../../Component/Game/Game";
import { BgArt } from "../../Component/background";
import { Navbar } from "../../Component/navbar";
import { Footer } from "../../Component/footer";
import { Section1 as Head } from "../../Component/pelaksanaan/Section1";
import { TentangGame } from "./TentangGame";
import { CaraBermain } from "./CaraBermain";
import { useState } from "react";

import './KontenInteraktif.scss';

// import Header from ""

const KontenInteraktif = () => {
    const [buka, setBuka] = useState(false);
    const [tampil, setTampil] = useState('none');
    
    function triggerSection(){
        if(buka == false){
            setBuka(true);
        }else{
            setBuka(false);
        }
    }
    return (
        <div>
            <Navbar />
            <div className="bg_header">
                <BgArt height="100vh" />
            </div>
            <Head title="DUTA HANASTA" />
            <div class="kontent_ki" style={{ backgroundColor:"#E1E8EA" }}>
                <div className="isi_konten_interaktif">
                    <Game />
                </div>
                <button onClick={triggerSection} class="button_dropdown">Cara Bermain</button>
                <div className="dropdown_ki" style={{ display: buka? 'block': 'none'}}>
                    <CaraBermain />
                    <TentangGame />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export { KontenInteraktif as KontenInteraktif};