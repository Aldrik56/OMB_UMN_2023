import {useState} from "react";
import styles from "./section2.module.css"

const landasanPelaksanaan = [
    {
        id:1,
        text : "Surat Edaran Direktur Jenderal Pendidikan Tinggi No. 0387/E/TM.02.00/2021 tentang Panduan Pengenalan Kehidupan  Kampus  bagi Mahasiswa Baru (PKKMB) tahun 2021."
    },
    {
        id:2,
        text:"Mahasiswa memiliki kesadaran berbangsa, cinta akan tanah air, serta kepedulian terhadap lingkungan dan masyarakat."
    },
    {
        id:3,
        text:"Mahasiswa mampu memahami nilai anti radikalisme dan nilai toleransi dalam berbagai aspek sosial masyarakat."
    },
    {
        id:4,
        text:"Mahasiswa mengerti tata kelola perguruan tinggi, sistem pembelajaran di dalamnya, dan nilai-nilai kemahasiswaan."
    },
    {
        id:5,
        text:"Mahasiswa mendapatkan pendidikan karakter dimulai dari etika, moral, kejujuran, kepedulian, tanggung jawab, dan kedisiplinan."
    },
    {
        id:6,
        text:"Mahasiswa proaktif untuk beradaptasi, menjaring networking, dan mampu menjalin keakraban serta persahabatan antar mahasiswa."
    },
    {
        id:7,
        text:"Mahasiswa termotivasi dan memiliki rasa percaya diri yang tinggi."
    },
    {
        id:8,
        text:["Nilai 5C Universitas Multimedia Nusantara, yaitu",
        "a. Caring: Mahasiswa memiliki sifat untuk peduli terhadap diri sendiri, sesama, hingga lingkungan sekitarnya.",
        "b. Credible: Mahasiswa memiliki integritas yang tinggi, kesadaran berorganisasi, dan dapat diandalkan.",
        "c. Competent: Mahasiswa memiliki penguasaan terhadap bidang yang dipelajari secara profesional dan mampu bekerja cerdas untuk hasil yang terbaik.",
        "d. Competitive: Mahasiswa memiliki sikap untuk berkompetisi mencapai prestasi yang terbaik dengan inovasi dan kreativitas.",
        "e. Customer Delight: Mahasiswa memiliki sifat untuk memberikan pelayanan terbaik bagi sesamanya, bahkan bisa lebih dari yang diharapkan."
        ]
    }
]

const maksudPelaksanaan = [
    {
        id:1,
        text:"Sebagai implementasi Pola Pengembangan Kemahasiswaan (Polbangmawa) Peraturan Mendikbud No. 155/U/1998 tentang Perdoman Umum Organisasi Kemahasiswaan di Perguruan Tinggi."
    },
    {
        id:2,
        text:"Sebagai implementasi dari Keputusan Direktur Jenderal Pendidikan Tinggi Kemendikbud RI No. 0387/E/TM.02.00/2021 tentang Panduan Pengenalan Kehidupan  Kampus  bagi Mahasiswa Baru (PKKMB) tahun 2021."
    },
    {
        id:3,
        text:"Sebagai proses seremonial mahasiswa baru untuk menjadi bagian dari Keluarga Besar Mahasiswa Universitas Multimedia Nusantara (KBM UMN)."
    },
    {
        id:4,
        text:"Sebagai syarat kelulusan mahasiswa Universitas Multimedia Nusantara."
    }
]
const tujuanPelaksanaan = [
    {
        id:1,
        text:"Memperkenalkan kegiatan perkuliahan di Universitas Multimedia Nusantara kepada mahasiswa baru."
    },
    {
        id:2,
        text:"Menanamkan dan mengimplementasikan nilai-nilai 5C Universitas Multimedia Nusantara dalam pelaksanaan OMB UMN 2023."
    },
    {
        id:3,
        text:"Memberikan informasi seputar sistem yang ada di Universitas Multimedia Nusantara kepada mahasiswa baru untuk menunjang kepentingan perkuliahan, seperti: fasilitas, sistem administrasi, sistem akademik, hingga kegiatan non-akademik."
    },
    {
        id:4,
        text:"Membentuk keyakinan dan keberanian mahasiswa baru dalam menghadapi perubahan."
    }
]

function bgArtBawah (){
    return(
        <div className={styles.bgArtBawah}>
            <img className={styles.bunga1} src="./Assets/Home/bungBawah.svg" alt="" />
            <img className={styles.bunga2} src="./Assets/Home/bungBawah.svg" alt="" />
            <img className={styles.bunga3} src="./Assets/Home/bungBawah.svg" alt="" />
            <img className={styles.bunga4} src="./Assets/Home/bungBawah.svg" alt="" />
            <img className={styles.bunga5} src="./Assets/Home/bungBawah.svg" alt="" />
            <img className={styles.awan1} src="./Assets/Home/awanBawah.svg" alt="" />
            <img className={styles.awan2} src="./Assets/Home/awanBawah2.svg" alt="" />
            <img className={styles.awan3} src="./Assets/Home/awanBawah.svg" alt="" />
        </div>
    );
}
const Section2 =()=>{
    const [state, setState]=useState("@landasan");

    function isiPelaksanaan  (){
        if(state==="@landasan"){
            return(
                <div className={styles.pelaksanaanBawah__section__isiPelaksanaan}>
                    {landasanPelaksanaan.map((item,index)=>{
                        if(item.id!=8){
                            return(
                                <div className={styles.pelaksanaanBawah__keterangan} key={item.id}>
                                    <h3>{"0"+item.id}</h3>
                                    <p>{item.text}</p>
                                    <hr />
                                </div>
                            );
                        }
                    })}
                    <div key={8}>
                        <h3>{"08"}</h3>
                            <p>Nilai 5C Universitas Multimedia Nusantara, yaitu</p>
                            <p key={1}>a. <i>Caring</i>: Mahasiswa memiliki sifat untuk peduli terhadap diri sendiri, sesama, hingga lingkungan sekitarnya.</p>
                            <p key={2}>b. <i>Credible</i>: Mahasiswa memiliki integritas yang tinggi, kesadaran berorganisasi, dan dapat diandalkan.</p>
                            <p key={3}>c. <i>Competent</i>: Mahasiswa memiliki penguasaan terhadap bidang yang dipelajari secara profesional dan mampu bekerja cerdas untuk hasil yang terbaik.</p>
                            <p key={4}>d. <i>Competitive</i>: Mahasiswa memiliki sikap untuk berkompetisi mencapai prestasi yang terbaik dengan inovasi dan kreativitas.</p>
                            <p key={5}>e. <i>Customer Delight</i>: Mahasiswa memiliki sifat untuk memberikan pelayanan terbaik bagi sesamanya, bahkan bisa lebih dari yang diharapkan.</p>
                    </div>
                </div>
            );
        }else if(state==="@maksud") {
            return (
                <div className={styles.pelaksanaanBawah__section__isiPelaksanaan}>
                    {maksudPelaksanaan.map((item,index)=>{
                        if(item.id!=4){
                            return(
                                <div key={item.id}>
                                    <h3>{"0"+item.id}</h3>
                                    <p>{item.text}</p>
                                    <hr />
                                </div>
                            );
                        }else{
                            return(
                                <div key={item.id}>
                                    <h3>{"0"+item.id}</h3>
                                    <p>{item.text}</p>
                                </div>
                            );
                        }
                    })}
                </div>
            );
        }else if (state==="@tujuan"){
            return(
                <div className={styles.pelaksanaanBawah__section__isiPelaksanaan}>
                    {tujuanPelaksanaan.map((item,index)=>{
                        if(item.id!=4){
                            return(
                                <div key={item.id}>
                                    <h3>{"0"+item.id}</h3>
                                    <p>{item.text}</p>
                                    <hr />
                                </div>
                            );
                        }else{
                            return(
                                <div key={item.id}>
                                    <h3>{"0"+item.id}</h3>
                                    <p>{item.text}</p>
                                </div>
                            );
                        }
                    })}
                </div>
            );
        }
    }

    return(
        <div className={styles.pelaksanaanBawah__section}>
            {bgArtBawah()}
            <div className={styles.pelaksanaanBawah__section__controller}>
                <div className={state ==="@landasan" ? styles.controller__active : styles.controller__unactive} onClick={()=>setState("@landasan")}><p>Landasan Pelaksanaan</p></div>
                <div className={state ==="@maksud" ? styles.controller__active : styles.controller__unactive} onClick={()=>setState("@maksud")}><p>Maksud Pelaksanaan</p></div>
                <div className={state ==="@tujuan" ? styles.controller__active : styles.controller__unactive} onClick={()=>{setState("@tujuan")}}><p>Tujuan Pelaksanaan</p></div>
            </div>
            <div className={styles.pelaksanaanBawah__section__borderIsi}>
                {isiPelaksanaan()}
            </div>

        </div>
    );
}

export {Section2 as Section2}