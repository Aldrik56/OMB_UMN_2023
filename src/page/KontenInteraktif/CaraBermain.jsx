
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState,useRef } from 'react';
// Import Swiper styles
import './KontenInteraktif.scss';
import SwiperCore, {
  Mousewheel,
  FreeMode,
  Pagination,
  Navigation,
} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import zIndex from '@mui/material/styles/zIndex';
import Arrow from './Arrow.png';

const how_to_play = [
    {
        id: 1,
        desc: "Pemain menekan tombol spasi di <i>keyboard</i> atau <i>layar</i> handphone pada Kupu-kupu Bidadari yang terbang melewati rintangan."
    },
    {
        id: 2,
        desc: "Setiap berhasil melewati rintangan, pemain akan mendapatkan satu poin."
    },
    {
        id: 3,
        desc: "Di setiap rintangan urutan kelipatan 5, pemain akan menemui ikon bunga. Jika Kupu-kupu Bidadari terkena ikon daun tersebut, maka akan muncul pertanyaan bertipe pilihan ganda seputar OMB dan UMN. Pemain wajib menjawab pertanyaan tersebut selama selama 10 detik."
    },
    {
        id: 4,
        desc: "Apabila berhasil menjawab pertanyaan dengan benar, maka pemain akan mendapatkan 3 poin dan bisa melanjutkan ke rintangan selanjutnya."
    },
    {
        id: 5,
        desc: "Terdapat hati di sisi pojok kiri atas sebanyak 3 buah. Hati tersebut melambangkan nyawa yang dimiliki Kupu-kupu Bidadari. Apabila pemain menjawab pertanyaan dengan salah, maka pemain tetap bisa berlanjut dengan hati yang berkurang satu."
    },
    {
        id: 6,
        desc: "Apabila Kupu-kupu Bidadari menabrak penghalang, Kupu-kupu Bidadari tersebut tetap bisa melanjutkan permainan dan nyawa berkurang satu."
    },
    {
        id: 7,
        desc: "Jika ketiga hati tersebut habis, maka pemain akan kalah atau <i>game over</i>."
    }
]
const CaraBermain = () => {
    const [swiper,setSwiper]=useState();

    return (
        <div id="cara_bermain">
            <div className="cara_bermain_game">
                <Swiper slidesPerView={1} pagination={true} modules={[Navigation, Pagination]} className="mySwiper"onSwiper ={(s)=>{setSwiper(s)}} >
                    {how_to_play.map((item,index) => (
                        <SwiperSlide key={index}>
                            <div className="navigation_bermain">
                                <img src={Arrow} onClick={()=>swiper.slidePrev()} alt="prev" className='arrow_cara_bermain prev'/>
                                <p class="sub-judul">{item.id}</p>
                                <img src={Arrow} onClick={()=>swiper.slideNext()} alt="next" className='arrow_cara_bermain next'/>
                            </div>
                            <p class="text" dangerouslySetInnerHTML={{ __html:item.desc }}></p>                      
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export { CaraBermain };