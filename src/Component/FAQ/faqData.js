const kategoriPertanyaan =[
    "Keikutsertaan","Atribut","Peraturan","Orang Tua","Sesi Informasi OMB","Lain-lain"
]

const keikutsertaan = [
    {
        id :1,
        Q:"Apakah setiap calon mahasiswa baru wajib mengikuti OMB UMN 2023? ",
        A :"Ya, setiap calon mahasiswa baru wajib mengikuti seluruh rangkaian kegiatan OMB UMN 2023 sebagai <b>salah satu syarat kelulusan</b>."
    },
    {
        id:2,
        Q:"Bagaimana jika saya tidak dapat mengikuti OMB UMN 2023? ",
        A:"Partisipasi dalam OMB UMN 2023 adalah salah satu <b>syarat kelulusan</b> di Universitas Multimedia Nusantara. Jika peserta OMB UMN 2023 tidak mengikuti atau tidak lulus OMB UMN tahun ini, <b>mahasiswa harus mengikuti dan lulus kegiatan OMB UMN pada tahun berikutnya</b>."
    },
    {
        id:3,
        Q: "Bolehkah saya izin tidak mengikuti OMB UMN 2023?",
        A:"Perizinan untuk tidak mengikuti kegiatan OMB hanya diberikan dalam <b>kasus penting yang telah dipertimbangkan oleh divisi Syandana<i>/Public Relations</i> dan Desain OMB UMN 2023.</b> Meskipun sudah menerima izin untuk tidak mengikuti OMB UMN tahun ini, mahasiswa <b>tetap diwajibkan mengikuti OMB UMN pada tahun berikutnya."
    },
    {
        id : 4,
        Q:"Apabila saya memiliki urusan sebelum jadwal OMB UMN 2023 dirilis, apakah saya diperbolehkan untuk meninggalkan kegiatan terlebih dahulu?",
        A: "Pihak OMB UMN 2023 <b>tidak mengizinkan</b> peserta untuk keluar dari rangkaian kegiatan lebih dulu karena OMB UMN 2023 merupakan kegiatan yang wajib diikuti dari awal hingga akhir. Namun, apabila mendapatkan <b>izin resmi dari pihak UMN</b>, maka hal ini akan dipertimbangkan."
    },
    {
        id:5,
        Q:"Jika saya mengikuti OMB, tapi tidak mengikuti Perkenalan Prodi, apakah akan tetap lulus OMB?",
        A:"Kegiatan OMB dan Perkenalan Prodi merupakan kegiatan yang <b>wajib</b> diikuti oleh mahasiswa UMN. Oleh sebab itu, mahasiswa diharap bisa mengikuti keseluruhan rangkaian kegiatan dengan baik. Akan tetapi, <b>kelulusan OMB dan Perkenalan Prodi akan didata secara terpisah</b>."
    },
    {
        id:6,
        Q:"Bagaimana jika saya dinyatakan tidak lulus OMB tahun ini?",
        A:"Apabila peserta OMB UMN 2023 dinyatakan tidak lulus pada tahun ini, peserta <b>wajib mendaftar dan mengikuti OMB UMN pada tahun berikutnya</b> karena keikutsertaan dalam OMB UMN merupakan <b>syarat kelulusan di UMN</b>."
    },
    {
        id:7,
        Q:"Pukul berapa rangkaian kegiatan OMB UMN 2023 akan selesai?",
        A:"Seluruh peserta <b>wajib</b> mengikuti setiap rangkaian OMB UMN 2023 dari awal hingga akhir. Bagi orang tua yang ingin <b>menjemput pada Pembentukan Hari 1 dan 2, dipersilakan untuk menjemput di titik penjemputan masing-masing pada pukul 15.00 WIB.</b>"
    },
    {
        id:8,
        Q:"Bagaimana jika saya memiliki kendala pada formulir lembar persetujuan keikutsertaan OMB UMN 2023, seperti tidak bisa mengakses tautan, mengunggah berkas, dll?",
        A:"Seluruh peserta <b>wajib</b> mengikuti dan memperhatikan tahapan berikut ini: <br/>1. <b>Pastikan koneksi internet lancar</b>.<br/>2.Bagi peserta OMB UMN 2023 yang merupakan <b>mahasiswa aktif</b>, wajib menggunakan <b>alamat <i>email</i> pribadi dan bukan <i>email</i> student.</b> <br/>3. Ukuran <b>maksimal <i>file</i> dibawah 100 MB.</b><br/>4. <i>File</i> wajib berbentuk <b>PDF.</b><br/>5. Apabila masih berkendala, silakan untuk <b>me-<i>refresh</i> halaman dan mengisi ulang formulir</b>.<br/><br/>Hubungi <b>LINE OA (@yqq6359s)</b> atau <b>WhatsApp (085172349923)</b> dengan <i>screenshot</i> sebagai bukti pendukung bila masih bermasalah."
    },
    {
        id:9,
        Q:"Apa saja syarat untuk mengikuti OMB UMN 2023?",
        A:"Peserta <b>wajib</b> melakukan beberapa persyaratan berikut ini:<br/>1. <b>Mengisi dan mengumpulkan formulir lembar persetujuan keikutsertaan</b> yang terdapat di halaman utama website resmi OMB UMN 2023.<br/>2. <b>Mengisi formulir riwayat kesehatan</b> yang terdapat pada surat edaran rektorat.<br/>3. <b>Menyelesaikan kewajiban registrasi ulang</b> kepada pihak kampus. <br/>Apabila terdapat kendala atau pertanyaan terkait registrasi ulang, silakan langsung menghubungi <b>WhatsApp marketing UMN (081286224155).</b>"
    },
    {
        id:10,
        Q: "Apa saja tata cara mengikuti OMB UMN 2023 luring?",
        A:"Berikut adalah tata cara mengikuti OMB UMN 2023 luring:<br/>1. <b>Wajib datang tepat waktu</b> dan mengikuti rangkaian kegiatan <b>OMB UMN 2023</b> dari <b>awal hingga akhir.</b><br/>2. <b>Wajib</b> menggunakan <b>masker sekali pakai berwarna putih</b> dengan <b>model KN95, KF94,</b> atau <b>medis</b> selama rangkaian OMB UMN 2023 berlangsung.<br/>3. <b>Wajib</b> melakukan <b>vaksinasi minimal tahap kedua</b> untuk mengikuti rangkaian kegiatan OMB UMN 2023.<br/>4. <b>Wajib</b> mempersiapkan dan membawa <b>barang-barang</b> yang dibutuhkan dalam mengikuti rangkaian kegiatan <b>OMB UMN 2023.</b><br/>5. <b>Wajib</b> mengikuti <b>protokol kesehatan</b> yang berlaku selama mengikuti rangkaian kegiatan <b>OMB UMN 2023.</b>"
    },
    {
        id:11,
        Q:"Apa saja protokol kesehatan berlaku pada rangkaian kegiatan OMB UMN 2023?",
        A:"Peserta wajib untuk menerapkan protokol kesehatan berikut ini:<br/>1. Telah menerima vaksinasi hingga <b>dosis kedua.</b><br/>2. Menggunakan masker dengan model <b>KN95, KF94, atau masker medis berwarna putih.</b> Peserta diimbau untuk membawa masker cadangan yang serupa. Dilarang menggunakan masker duckbill dan masker kain atau masker yang tidak sekali pakai.<br/>3. <b>Tidak diperbolehkan</b> untuk berbagi peralatan pribadi, seperti tempat minum, handuk, dan lain-lain dengan peserta lainnya."
    }
]

const atribut = [
    {
        id:1,
        Q:"Apakah peserta harus menggunakan masker saat mengikuti rangkaian kegiatan OMB UMN 2023?",
        A:"Setiap peserta OMB UMN 2023 wajib mematuhi protokol kesehatan yang berlaku. Peserta <b>wajib</b> menggunakan masker sekali pakai <b>berwarna putih</b> dengan <b>model KN-95, KF-94,</b> ataupun <b>masker medis.</b>"
    },
    {
        id:2,
        Q:"Apakah peserta dapat menggunakan masker kain, duckbill, atau jenis masker lainnya selama mengikuti rangkaian kegiatan OMB UMN 2023?",
        A:"Seluruh peserta OMB UMN 2023 <b>tidak diperkenankan</b> menggunakan masker selain <b>model KN-95, KF-94,</b> ataupun <b>masker medis.</b> Masker harus berwarna putih dan sekali pakai. Hal ini <b>sebagai bentuk penerapan protokol kesehatan, kenyamanan, dan keamanan peserta selama mengikuti rangkaian kegiatan OMB UMN 2023.</b>"
    },
    {
        id:3,
        Q:"Apakah peserta diperbolehkan mengenakan kaus kerah dengan ornamen/logo/garis saat mengikuti rangkaian kegiatan OMB UMN 2023?",
        A:"Seluruh peserta OMB UMN 2023 <b>diwajibkan mengenakan kaus sepolos mungkin, tidak berkantong, dan tidak bergaris.</b> Jika ada logo/gambar, harus sesuai dengan ketentuan yang berlaku. Logo hanya diperbolehkan <b>di bagian depan kaus dengan <b>ukuran maksimal 8 x 8 cm.</b>"
    },
    {
        id:4,
        Q:"Bagaimana peraturan terkait penggunaan celana <i>jeans</i> untuk peserta OMB UMN 2023?",
        A:"Peserta OMB UMN 2023 <b>wajib</b> menggunakan celana panjang hitam <b>berbahan <i>jeans</i> dengan model <i>slim fit</i>, satu warna, polos, tidak robek, dan tidak dilipat keluar.</b> Hal ini dilakukan demi kenyamanan peserta dalam mengikuti rangkaian kegiatan OMB UMN 2023 yang bermobilitas tinggi."
    },
    {
        id:5,
        Q:"Mengapa peserta OMB UMN 2023 harus menggunakan celana <i>jeans</i> dengan model <i>slim fit</i>?",
        A:"Peserta OMB UMN 2023 diwajibkan untuk menggunakan <b>celana panjang hitam berbahan <i>jeans</i> dengan model <i>slim fit</i>.</b> Celana <i>jeans</i> <i>slim fit</i> merupakan celana yang <b>menyesuaikan ukuran kaki</b> dan <b>tidak ketat.</b> Penggunaan celana <i>jeans</i> <i>slim fit</i> ini bertujuan untuk memudahkan peserta dalam mengikuti rangkaian kegiatan OMB UMN 2023 yang memiliki mobilitas tinggi. "
    },
    {
        id:6,
        Q:"Bagaimana peraturan pakaian untuk peserta OMB UMN 2023 yang menggunakan hijab dan manset?",
        A:"Peserta OMB UMN 2023 yang menggunakan hijab <b>tidak diperkenankan untuk menggunakan kaus kerah berlengan panjang.</b> Sebagai gantinya, peserta OMB UMN 2023 wajib menggunakan <b>hijab dan manset berwarna hitam.</b>"
    },
    {
        id:7,
        Q:"Apakah peserta OMB UMN 2023 boleh menggunakan handuk selain handuk Good Morning?",
        A:"Tidak, peserta OMB UMN 2023 <b>wajib menggunakan handuk Good Morning</b> sesuai dengan ketentuan yang berlaku."
    },
    {
        id:8,
        Q:"Bagaimana peraturan mengenai penggunaan sepatu bagi peserta OMB UMN 2023?",
        A:"Peserta OMB UMN 2023 wajib menggunakan <b>sepatu kets bebas yang nyaman dan bersifat mengencangkan</b> agar peserta dapat mengikuti setiap rangkaian dengan <b>aman dan nyaman.</b>"
    },
    {
        id:9,
        Q:"Bagaimana jika peserta tidak memenuhi kelengkapan atribut atau hal lainnya terkait pelaksanaan OMB UMN 2023 yang diwajibkan?",
        A:"Peserta OMB UMN 2023 diwajibkan untuk membawa seluruh atribut ataupun kelengkapan yang diwajibkan karena <b>sudah diumumkan jauh sebelum OMB berlangsung</b> sehingga <b>tidak ada alasan untuk tidak memenuhi</b> atribut yang diwajibkan."
    }
]

const peraturan = [
    {
        id:1,
        Q:"Bagaimana jika peserta datang terlambat saat hari pelaksanaan OMB UMN 2023?",
        A:"OMB UMN 2023 <b>tidak memiliki waktu dispensasi untuk keterlambatan.</b> Jika terlambat datang, peserta harus <b>mengulang kegiatan OMB UMN di tahun depan</b>. "
    },
    {
        id:2,
        Q:"Apakah peserta diperbolehkan untuk membawa gawai saat mengikuti rangkaian kegiatan OMB UMN 2023?",
        A:"Peserta hanya diperbolehkan untuk membawa <b>satu gawai.</b> Gawai tersebut akan dinonaktifkan selama rangkaian kegiatan berlangsung agar tidak mengganggu jalannya kegiatan. "

    },
    {
        id:3,
        Q:"Apakah boleh membawa kendaraan pribadi saat pelaksanaan OMB UMN 2023?",
        A:"Seluruh peserta <b>dilarang untuk membawa kendaraan pribadi</b> karena lahan parkir yang tersedia di area UMN akan digunakan untuk pelaksanaan kegiatan OMB UMN 2023. Seluruh peserta dianjurkan untuk <b>diantar, menggunakan kendaraan umum, atau menggunakan fasilitas <i>shuttle bus</i></b> yang telah disediakan oleh pihak kampus. Panitia OMB UMN 2023 <b>tidak bertanggung jawab atas keamanan</b> dari kendaraan yang diparkirkan di luar area kampus"
    },
    {
        id:4,
        Q:"Bagaimana ketentuan vaksinasi COVID-19 bagi peserta pada OMB UMN 2023?",
        A:"Sesuai dengan peraturan kampus, setiap peserta OMB UMN 2023 <b>wajib minimal telah menerima vaksin COVID-19 dosis kedua.</b>"
    },
    {
        id:5,
        Q:"Apakah OMB UMN 2023 menyediakan makanan untuk peserta?",
        A:"Peserta wajib membawa tempat dan alat makan <b>tidak sekali pakai</b> dengan <b>makanan sehat dan gizi cukup di dalamnya.</b> Makanan instan, berkuah, dan/atau mengeluarkan bau menyengat tidak diperbolehkan."
    },
    {
        id:6,
        Q:"Apakah OMB UMN 2023 menyediakan minuman untuk peserta?",
        A:"OMB UMN 2023 menyediakan air minum dalam bentuk galon. Maka dari itu, kami mengimbau peserta untuk <b>membawa botol minum tidak sekali pakai berukuran 600 ml</b> yang sudah terisi penuh sebelumnya dan dapat diisi kembali pada rangkaian kegiatan OMB UMN 2023."
    },
    {
        id:7,
        Q:"Mengapa tidak boleh membawa bekal makanan dan botol minum sekali pakai?",
        A:"UMN adalah kampus yang sangat menekankan <b>sikap peduli lingkungan.</b> Membawa botol minum dan alat makan tidak sekali pakai merupakan <b>bentuk kontribusi mahasiswa untuk menjaga lingkungan.</b>"
    },
    {
        id :8,
        Q:"Mengapa peserta tidak boleh memakai lensa kontak, riasan wajah, <i>pomade</i>, cat kuku, dan aksesoris lainnya saat mengikuti rangkaian kegiatan OMB UMN 2023? ",
        A:"Peserta <b>dilarang menggunakan  lensa kontak, riasan wajah, <i>pomade</i>, cat kuku, dan aksesoris lainnya saat mengikuti rangkaian kegiatan OMB UMN 2023.</b> Hal ini bertujuan untuk menjaga keamanan dan kenyaman peserta selama mengikuti rangkaian kegiatan OMB UMN 2023 yang memiliki mobilitas tinggi.<br/><br/><b>Catatan:</b> Lensa kontak yang tidak mengubah warna asli mata sebagai alat bantu penglihatan diperbolehkan."
    },
    {
        id:9,
        Q:"Apakah peserta diperbolehkan untuk mewarnai rambut saat mengikuti rangkaian kegiatan OMB UMN 2023?",
        A:"OMB UMN 2023 tidak melarang peserta untuk mewarnai rambut. Namun, kami menganjurkan peserta untuk <b>memiliki rambut sesuai dengan warna aslinya</b> selama rangkaian kegiatan OMB UMN 2023 berlangsung. "
    },
    {
        id :10,
        Q:"Apakah peserta OMB UMN 2023 yang memiliki rambut panjang diperbolehkan untuk digerai?",
        A:"Bagi peserta OMB UMN 2023 yang <b>berambut panjang,</b> baik perempuan maupun laki-laki,<b> wajib mengikat rambut dengan ikat rambut berwarna hitam yang polos dan tidak beraksesoris.</b> Bagi peserta yang <b>berponi panjang, wajib memakai bando atau jepitan berwarna hitam.</b>"
    },
    {
        id:11,
        Q:"Apakah peserta diperbolehkan menggunakan tato saat mengikuti rangkaian kegiatan OMB UMN 2023?",
        A: "Peserta diizinkan menggunakan tato selama <b>tidak mengganggu kenyamanan dan keamanan peserta</b> dalam mengikuti rangkaian kegiatan OMB UMN 2023. "
    }
]

const orangTua = [
    {
        id:1,
        Q:"Apakah orang tua boleh menunggu di salah satu gedung?",
        A:"Orang tua hanya diperbolehkan untuk <b>mengantar mahasiswa sampai di pintu gerbang UMN.</b> <br/><b>Catatan: </b>Pesan ini harap dititipkan kepada peserta untuk disampaikan kepada orang tua masing-masing."
    },
    {
        id :2,
        Q:"Apakah peserta diperbolehkan untuk didampingi oleh orang tua/wali dalam mengikuti rangkaian OMB?",
        A:"Orang tua hanya diperbolehkan untuk <b>mengantar mahasiswa sampai di pintu gerbang UMN dan tidak diperbolehkan mendampingi mahasiswa</b> selama rangkaian kegiatan OMB UMN 2023berlangsung. "
    },
    {
        id : 3,
        Q:"Jika perlengkapan atau atribut saya tertinggal, apakah boleh diantarkan atau dititipkan oleh orang tua/wali?",
        A:"Barang-barang seperti atribut pakaian dan keperluan penugasan peserta OMB UMN 2023 <b>tidak boleh dititipkan dengan alasan apapun.</b> Barang yang dititipkan hanya boleh barang-barang <b>yang bersifat urgensi tinggi,</b> seperti <b>obat-obatan pribadi</b> peserta. "
    }
]

const sesiInformasiOMBUMN = [
    {
        id:1,
        Q:"Jika saya tidak mengikuti Sesi Informasi OMB, apakah tetap bisa mengikuti rangkaian OMB UMN 2023?",
        A:"Sesi Informasi OMB merupakan <b>bagian dari rangkaian kegiatan OMB UMN 2023</b>. Hal ini bertujuan untuk membantu peserta agar dapat <b>mempersiapkan hal-hal yang dibutuhkan, mencegah terjadinya kekeliruan informasi, dan memberikan kesempatan bertanya</b> terkait kegiatan OMB UMN 2023. Oleh karena itu, peserta <b>disarankan untuk mengikuti Sesi Informasi OMB</b> agar tidak tertinggal informasi."
    },
    {
        id:2,
        Q:"Bagaimana jika saya tidak bisa mengikuti Sesi Informasi OMB UMN 2023?",
        A: "Peserta OMB UMN 2023 dapat menghubungi pihak Syandana/<i>Public Relations</i> dan Desain OMB UMN 2023 untuk melakukan perizinan melalui <b>LINE OA (@yqq6359s)</b>  atau <b>WhatsApp (085172349923).</b> Dengan menyertakan:<br/><br/><text>Nama:<br/>NIM:<br/>Jurusan: <br/>Perizinan:<br/>Bukti pendukung perizinan:</text>"
    },
    {
        id :3,
        Q:"Bagaimana cara peserta mendapatkan tautan Zoom Sesi Informasi OMB UMN 2023?",
        A: "Untuk mendapatkan tautan Zoom, peserta dapat <b>mengakses kembali formulir Sesi Informasi OMB satu jam sebelum pelaksanaan dimulai.</b> Oleh karena itu, <b>peserta wajib mengisi formulir Sesi Informasi OMB UMN 2023 terlebih dahulu</b>."
    },
    {
        id:4,
        Q:"Bagaimana cara peserta mendapatkan informasi lengkap mengenai Sesi Informasi OMB UMN 2023?",
        A:'Informasi lengkap mengenai Sesi Informasi OMB UMN 2023 dapat diakses melalui tautan formulir <a href="https://docs.google.com/forms/d/e/1FAIpQLScaVKsYDFLPneVQChr8Ycq5WZPclcShNIz8Psu7S4QtdJ4Lag/viewform" style=" color:#005683" target="_blank" rel="norefferer" > bit.ly/SesiInformasiOMBUMN2023.</a>'
    },
    {
        id:5,
        Q:"Pakaian apa yang harus digunakan oleh peserta saat mengikuti Sesi Informasi OMB UMN 2023?",
        A:"Peserta diperbolehkan untuk menggunakan pakaian <b>bebas dan sopan.</b> "
    }
]

const lainLain = [
    {
        id:1,
        Q:"Apakah panitia menyediakan obat untuk peserta?",
        A:"Panitia OMB UMN 2023 melalui <b>divisi Sarwaga/Medis</b> akan menyediakan <b>obat generik</b> bagi peserta OMB UMN 2023 yang membutuhkan. Apabila peserta membutuhkan <b>obat khusus,</b> maka <b>diwajibkan untuk membawa obat</b> tersebut selama pelaksanaan OMB UMN 2023. "
    },
    {
        id:2,
        Q:"Apa yang harus saya lakukan jika nama saya terdaftar dalam 2 (dua) kelompok yang berbeda?",
        A:"Peserta diharapkan untuk segera menghubungi pihak Syandana/<i>Public Relations</i> dan Desain OMB UMN 2023 melalui <b>LINE OA (@yqq6359s)</b> dengan menyertakan:<br/>Nama:<br/>NIM:<br/>Jurusan: <br/>Nomor Kelompok:"
    },
    {
        id:3,
        Q:"Bagaimana jika saya memiliki pertanyaan lain atau saran tentang OMB UMN 2023?",
        A:"OMB UMN 2023 <b>sangat terbuka terhadap kritik dan saran</b>. Jika peserta ingin menyampaikan kritik dan saran mengenai OMB UMN 2023, silakan <b>menghubungi akun resmi</b> OMB UMN 2023."
    }
]
export {kategoriPertanyaan,keikutsertaan,atribut,peraturan,orangTua,sesiInformasiOMBUMN,lainLain};