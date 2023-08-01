const TentangGame = () =>{
    return (
        <div className="tentangGame">  
            <img className="supergrafis" src="./Assets/Tata Cara/Vector-daun_gradient.svg" alt="" />
            <p className="judul">Tentang DUTA HANASTA</p>
            <div className="konten">
                <div className="box" id="box-atas">
                    <p className="sub-judul">DUTA HANASTA</p>
                    <p className="text">Duta Hanasta merupakan konten interaktif <span style={{ fontFamily: 'Proxima_nova_bold' }}>“Lewat Rintangan”</span> yang dapat diakses pada website resmi OMB UMN 2023. Kata “Duta Hanasta” diambil dari bahasa Sanskerta, yaitu “Duta” yang memiliki arti “Orang yang diutus untuk melakukan tugas” dan “Hanasta” berarti “Menguasai”.</p>
                    <p className="text">Dengan kata lain, konten interaktif ini bertujuan agar para peserta OMB UMN 2023 dapat menguasai seluruh informasi seputar OMB dan UMN yang dapat mendukung kegiatan perkuliahan. Duta Hanasta dikembangkan oleh Divisi Syandana (<i>Public Relations</i> dan Desain) dan Wiskira (<i>Website</i>).</p>
                </div>
                <div className="box" id="box-bawah">
                    <p className="sub-judul">Filosofi Kupu-kupu Bidadari</p>
                    <p className="text">Pemain memainkan Kupu-kupu Bidadari yang sedang terbang dan menghindari rintangan yang membuat Kupu-kupu bidadari tersebut jatuh. Sesuai dengan tema OMB UMN 2023, Kupu-kupu Bidadari merupakan spesies endemik dari Sulawesi yang melambangkan proses transformasi mahasiswa baru menjadi individu yang berkarakter, berkualitas tinggi, berkolaborasi, dan bermanfaat bagi lingkungan serta sesama.</p>
                </div>
            </div>
        </div>
    )
}

export { TentangGame };