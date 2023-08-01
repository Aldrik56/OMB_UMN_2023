import "./SwaraBestari.scss";

const SwaraBestari = () => {
    return (
        <div className="SwaraBestari">
            <img className="background" src="./Assets/SwaraBestari/Background.svg" alt="" />
            <img className="background-mobile" src="./Assets/SwaraBestari/BackgroundMobile.svg" alt="" />
            {/* <img className="wave1" src="./Assets/SwaraBestari/Wave1.svg" alt="" />
            <img className="wave2" src="./Assets/SwaraBestari/Wave2.svg" alt="" />
            <img className="wave3" src="./Assets/SwaraBestari/Wave3.svg" alt="" /> */}
            <div className="SB-kiri">
                <img className="circle-atas" src="./Assets/SwaraBestari/CircleAtas.svg" alt="" />
                <img className="SB-logo" src="./Assets/SwaraBestari/SwaraBestari.svg" alt="" />
                <img className="circle-bawah" src="./Assets/SwaraBestari/CircleBawah.svg" alt="" />
            </div>
            <div  className="SB-kanan">
                <p><span style={{ color: '#E68825', fontFamily: 'Proxima_nova_bold' }}>Swara Bestari</span> merupakan program siniar <i>(podcast)</i> resmi OMB UMN 2023 yang membahas berbagai macam topik untuk membantu mahasiswa menanamkan integritas dan membangkitkan solidaritas selama masa perkuliahan. Pada tahun ini, Swara Bestari mengundang beberapa narasumber untuk memberikan wawasan baru mengenai cara beradaptasi bagi mahasiswa di lingkungan kampus.</p>
                <p>Kata “Swara” berasal dari bahasa Jawa yang memiliki arti “Suara”, sedangkan “Bestari” berasal dari Kamus Besar Bahasa Indonesia (KBBI) dengan makna luas dalam pengetahuan, pendidikan baik, dan budi pekerti. Berdasarkan pemahaman ini, Sobat PENA diharapkan mampu beradaptasi dengan baik dan menentukan tujuan jelas dalam dunia perkuliahan.</p>
                <a href="https://open.spotify.com/show/3n5IKS6vFtpK1h1rgnlzKm?si=8263a35145714647">Dengarkan Sekarang</a>
            </div>
            <img className="petir-kiri" src="./Assets/SwaraBestari/PetirKiri.svg" alt="" />
            <img className="petir-kanan" src="./Assets/SwaraBestari/PetirKanan.svg" alt="" />
        </div>
    );
};

export { SwaraBestari };