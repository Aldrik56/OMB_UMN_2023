import {useState,useRef} from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination,EffectFade,Navigation,EffectCube } from "swiper";
import dropButtonUnactive from "./dropButtonUnactive.svg";
import dropButtonActive from "./dropButtonActive.svg";
import { kategoriPertanyaan,keikutsertaan,atribut,peraturan,orangTua,sesiInformasiOMBUMN,lainLain } from "./faqData";
import './faq.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { holdReady } from 'jquery';

const dataPertanyaan=[keikutsertaan,atribut,peraturan,orangTua,sesiInformasiOMBUMN,lainLain];
const FAQ=()=> {
    const [state, setState]=useState(1);
    const [swiper, setSwiper] = useState(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    
    const defineButtonActive = (event,index)=>{
        if(event!=null){
            document.querySelector(".button_active").className= "button_unactive";
            event.currentTarget.className = " button_active";
            swiper.slideTo(index);
        }else {
            document.querySelector(".button_active").className= "button_unactive";
            document.getElementsByClassName("button_unactive")[index].className= "button_active";
        }
    }

    const swapImg =(e,index)=> {
        if(window.innerWidth>=800){
            if(e.currentTarget.className==="unactive"){
                e.currentTarget.src= dropButtonActive;
                e.currentTarget.className="active";
                e.currentTarget.parentNode.parentNode.children[1].children[2].style.display="block";

            }else {
                e.currentTarget.src= dropButtonUnactive;
                e.currentTarget.className="unactive";
                e.currentTarget.parentNode.parentNode.children[1].children[2].style.display="none";
            }

            var swiper_element = document.querySelector('.FAQ__isisection');
            defineButtonActive(null,swiper.activeIndex);
            var swiperSlideActive=document.getElementsByClassName("FAQ__section__penentuHeight")[swiper.activeIndex];
            swiper_element.style.height=getComputedStyle(swiperSlideActive).height;
        }else {
            if(e.currentTarget.className==="unactive"){
                e.currentTarget.src= dropButtonActive;
                e.currentTarget.className="active";
                e.currentTarget.parentNode.children[2].style.display="block";

            }else {
                e.currentTarget.src= dropButtonUnactive;
                e.currentTarget.className="unactive";
                e.currentTarget.parentNode.children[2].style.display="none";
            }

            var swiper_element = document.querySelector('.FAQ__isisection');
            defineButtonActive(null,swiper.activeIndex);
            var swiperSlideActive=document.getElementsByClassName("FAQ__section__penentuHeight")[swiper.activeIndex];
            swiper_element.style.height=getComputedStyle(swiperSlideActive).height;
        }
    }
    const isiController=()=>{
        return(
            <div style={{backgroundColor:"#E1E8EA",width:"100vw",position:"relative"}}>
                <Swiper
                    className="FAQ__controller"
                    modules={[Pagination,Navigation]}
                    slidesPerView="auto"
                    spaceBetween={16}
                    clickable={false}
                    // allowTouchMove={false}
                    loop={false}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                >
                <SwiperSlide style={{visibility:"hidden",fontSize:"12px"}}>joshua anjing</SwiperSlide>
                {kategoriPertanyaan.map((item,index)=>{
                    if(index===0){
                        return(
                            <SwiperSlide >
                                <button><div onClick={(event)=>defineButtonActive(event,index)} className="button_active"><p>{item}</p> </div></button>
                            </SwiperSlide>
                        )
                    }else{
                        return(
                            <SwiperSlide >
                                <button><div  onClick={(event)=>defineButtonActive(event,index)} className="button_unactive"><p>{item}</p> </div></button>
                            </SwiperSlide>
                        )
                    }
                    
                })}
                <SwiperSlide style={{visibility:"hidden",fontSize:"12px"}}>joshua anjing</SwiperSlide>
                {/* <div className="buttonBox"> */}
                {/* </div> */}
            </Swiper>
                <button ref={prevRef} className="prevButton"><img src="./Assets/FAQ/Left Arrow.svg" alt="" /></button>
                <button ref={nextRef} className="nextButton"><img src="./Assets/FAQ/Right Arrow.svg" alt="" /></button>
            </div>
        );
        
    }

    const isiFAQ =()=>{
        return (
            <Swiper 
                // style={{height: '50vh'}}
                className="FAQ__isisection"
                modules={[Pagination,Navigation,EffectFade]}
                // effect={'fade'}
                slidesPerView={1}
                clickable={false}
                // allowTouchMove={false}
                onSwiper ={(s)=>{setSwiper(s)}}
                onSlideChange={(event)=>{
                    var swiper_element = document.querySelector('.FAQ__isisection');
                    defineButtonActive(null,swiper.activeIndex);
                    var swiperSlideActive=document.getElementsByClassName("FAQ__section__penentuHeight")[swiper.activeIndex];
                    swiper_element.style.height=getComputedStyle(swiperSlideActive).height;
                }}
                onResize={(event)=>{
                    var swiper_element = document.querySelector('.FAQ__isisection');
                    defineButtonActive(null,swiper.activeIndex);
                    var swiperSlideActive=document.getElementsByClassName("FAQ__section__penentuHeight")[swiper.activeIndex];
                    swiper_element.style.height=getComputedStyle(swiperSlideActive).height;
                }}
                // on={(swiper) => (swiperRef.current = swiper)}
            >   
                {dataPertanyaan.map((item,index)=>{
                    
                    return(
                        <SwiperSlide >
                            <div className="FAQ__section__penentuHeight" style={{backgroundColor:"#E1E8EA",padding:"1px"}}>
                            <div className="FAQ__section__borderIsi">
                                <div className="FAQ__section__isiPelaksanaan">
                                {item.map((items,index)=>{
                                    if(index<=item.length-2){
                                        return(
                                            <div>
                                                <div className="FAQ__array">
                                                    <div>
                                                        <div className="FAQ__idbox">
                                                            <h3 dangerouslySetInnerHTML={{__html:items.id}} className="FAQ__id"></h3>
                                                        </div>
                                                    </div>
                                                    <div className="FAQ__QAbox">
                                                        <h3 dangerouslySetInnerHTML={{__html:items.Q}} className="FAQ__Quest"></h3>
                                                        <img src={dropButtonUnactive} onClick={(e)=>swapImg(e,index)} className="unactive" alt="" />
                                                        <p dangerouslySetInnerHTML={{__html:items.A}} className="FAQ__Answer"></p>
                                                    </div>
                                                    <div style={{display:"flex",justifyContent:"flex-end"}}>
                                                    <img src={dropButtonUnactive} className="unactive" onClick={(e)=>swapImg(e,index)} alt="" />
                                                    </div>
                                                </div>
                                                
                                                <hr style={{borderTop:"4px dashed #7199B9",opacity:"1"}}/>
                                            </div>
                                        )
                                    }else {
                                        return (
                                            <div className="FAQ__array">
                                                <div>
                                                    <div className="FAQ__idbox">
                                                        <h3 dangerouslySetInnerHTML={{__html:items.id}} className="FAQ__id"></h3>
                                                    </div>
                                                </div>
                                                <div className="FAQ__QAbox">
                                                    <h3 dangerouslySetInnerHTML={{__html:items.Q}} className="FAQ__Quest"></h3>
                                                    <img src={dropButtonUnactive} onClick={(e)=>swapImg(e,index)} className="unactive" alt="" />
                                                    <p dangerouslySetInnerHTML={{__html:items.A}} className="FAQ__Answer"></p>
                                                </div>
                                                <div style={{display:"flex",justifyContent:"flex-end"}}>
                                                    <img src={dropButtonUnactive} className="unactive" onClick={(e)=>swapImg(e,index)} alt="" />
                                                </div>
                                                
                                            </div>
                                        )
                                    }
                                })}
                                </div> 
                            </div> 
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        );
    }



    return (
        <div className="FAQsection" >
        <div style={{backgroundColor:"#E1E8EA",position:"absolute",top:"-5px",width:"100vw",height:"100vh",zIndex:"-3"}}></div>
        {isiController()}
        {isiFAQ()}
        </div>
    );
    
    
}  

export {FAQ as FAQ};