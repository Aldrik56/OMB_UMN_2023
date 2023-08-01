import "./content.scss"
import { Modal, ModalContents, ModalOpenButton } from "./Modal";

import Kampana from "../divisi/Assets/acara-ring.webp"
import Bimantara from "../divisi/Assets/bph-ring.webp"
import Prabangkara from "../divisi/Assets/dokum-ring.webp"
import Adhyasta from "../divisi/Assets/keamanan-ring.webp"
import Dayaka from "../divisi/Assets/konsumsi-ring.webp"
import Sarwaga from "../divisi/Assets/medis-ring.webp"
import Sambara from "../divisi/Assets/perkap-ring.webp"
import Arsa from "../divisi/Assets/pic-ring.webp"
import Syandana from "../divisi/Assets/pr-ring.webp"
import Wiskira from "../divisi/Assets/web-ring.webp"
import Kampana2 from "../divisi/Assets/acara.webp"
import Bimantara2 from "../divisi/Assets/bph.webp"
import Prabangkara2 from "../divisi/Assets/dokum.webp"
import Adhyasta2 from "../divisi/Assets/keamanan.webp"
import Dayaka2 from "../divisi/Assets/konsum.webp"
import Sarwaga2 from "../divisi/Assets/medis.webp"
import Sambara2 from "../divisi/Assets/perkap.webp"
import Arsa2 from "../divisi/Assets/pic.webp"
import Syandana2 from "../divisi/Assets/pr.webp"
import Wiskira2 from "../divisi/Assets/web.webp"


const Content = () => {
    return (
        <div className="content_divisi">
            <h6>(Klik logo divisi untuk informasi lebih lanjut)</h6>
            <div className="first_row">
                <div className="row_item">
                    <Modal>
                    <ModalOpenButton>
                        <div>
                            <img src={Kampana} alt="Acara" />
                        </div>
                    </ModalOpenButton>
                    <ModalContents title="Kampana" img={Kampana2} link="/kampana">
                        ACARA
                        <br />
                        <b>Arti</b>: Memiliki Getaran
                        <br />
                        <br />
                        <b>Logo</b>: Tombak Kanjae (Surampa)
                        <br />
                        Tombak Kanjae merupakan senjata perang utama di Sulawesi Tengah. Ini sesuai dengan Kampana yang bertugas untuk membuat konsep kegiatan OMB UMN 2023 sebagai senjata utama dalam menanam bekal dunia perkuliahan bagi peserta
                        OMB UMN 2023.
                        <br />
                        <br />
                        <b>Tugas</b>:<br />
                        Kampana bertanggung jawab dalam merangkai konsep kegiatan yang inovatif dan efektif bagi peserta OMB UMN 2023.
                    </ModalContents>
                    </Modal>
                </div>
                <div className="row_item">
                <Modal>
                  <ModalOpenButton>
                    <div>
                      <img src={Bimantara} alt="BPH" />
                    </div>
                  </ModalOpenButton>
                  <ModalContents title="Bimantara" img={Bimantara2} link="/kampana">
                    BADAN PENGURUS HARIAN
                    <br />
                    <b>Arti</b>: Jiwa yang Hebat
                    <br />
                    <br />
                    <b>Logo</b>: Sigar Jantung
                    <br />
                    Sigar Jantung merupakan senjata tradisional asal Jawa Barat. Senjata tersebut memiliki makna kerendahan hati, kebersihan budi, dan keikhlasan. Ini melambangkan Bimantara yang senantiasa rendah hati dalam memimpin agar dapat menjadi contoh bagi sesamanya.
                    <br />
                    <br />
                    <b>Tugas</b>:<br />
                    Bimantara bertugas sebagai pemimpin dan bertanggung jawab atas seluruh berjalannya rangkaian kegiatan OMB UMN 2023.                  </ModalContents>
                </Modal>
                </div>
                <div className="row_item">
                    <Modal>
                    <ModalOpenButton>
                        <div>
                        <img src={Prabangkara} alt="Prabangkara" />
                        </div>
                    </ModalOpenButton>
                    <ModalContents title="Prabangkara" img={Prabangkara2} link="/prabangkara">
                        DOKUMENTASI
                        <br />
                        <b>Arti</b>: Matahari dan Pelukis
                        <br />
                        <br />
                        <b>Logo</b>: Hujur Siringis
                        <br />
                        Hujur Siringis merupakan senjata asal Batak, Sumatera Utara yang ringan dan kuat. Hal tersebut selaras dengan Prabangkara yang mampu bergerak gesit dan cepat dalam mengambil momen rangkaian kegiatan OMB UMN 2023. Selain
                        itu, bagian ujung Hujur Siringis dilengkapi dengan logam yang berfungsi untuk membuka sumber mata air. Ini melambangkan Prabangkara yang berperan sebagai sumber kenangan rangkaian kegiatan OMB UMN 2023.
                        <br />
                        <br />
                        <b>Tugas</b>:<br />
                        Prabangkara bertugas untuk mendokumentasikan seluruh rangkaian kegiatan OMB UMN 2023 agar menjadi memori yang berkesan dan tak terlupakan baik dalam bentuk foto maupun video.
                    </ModalContents>
                    </Modal>
                </div>
            </div>
            <div className="second_row">
                <div className="row_item">
                    <Modal>
                    <ModalOpenButton>
                        <div>
                            <img src={Adhyasta} alt="Adhyasta" />
                        </div>
                    </ModalOpenButton>
                    <ModalContents title="Adhyasta" img={Adhyasta2} link="/adhyasta">
                        KEAMANAN
                        <br />
                        <b>Arti</b>: Pengawas dan Pemimpin
                        <br />
                        <br />
                        <b>Logo</b>: Payan Tuho
                        <br />
                        Payan Tuho merupakan senjata tradisional masyarakat Lampung. Senjata ini menyimbolkan kekokohan, kekuatan, ketajaman, dan daya juang. Maka dari itu, Payan Tuho selaras dengan kemampuan Adhyasta dalam memimpin dan
                        mengawasi.
                        <br />
                        <br />
                        <b>Tugas</b>:<br />
                        Adhyasta bertugas untuk menjaga keamanan dan kedisiplinan seluruh partisipan, baik panitia maupun peserta, agar rangkaian kegiatan OMB UMN 2023 berjalan lancar.
                    </ModalContents>
                    </Modal>
                </div>
                <div className="row_item">
                    <Modal>
                        <ModalOpenButton>
                            <div>
                                <img src={Dayaka} alt="Dayaka" />
                            </div>
                        </ModalOpenButton>
                        <ModalContents title="Dayaka" img={Dayaka2} link="/dayaka">
                            KONSUMSI
                            <br />
                            <b>Arti</b>: Orang yang Memberi
                            <br />
                            <br />
                            <b>Logo</b>: Kalawai
                            <br />
                            Kalawai adalah senjata tradisional asal Maluku dan Papua. Senjata ini dikenal tajam dan melambangkan kegigihan pemiliknya terutama saat berburu ikan. Maka dari itu, Kalawai melambangkan Dayaka yang bersemangat tajam dan
                            gigih dalam menyediakan konsumsi sehat dan bermanfaat bagi panitia OMB UMN 2023.
                            <br />
                            <br />
                            <b>Tugas</b>:<br />
                            Dayaka bertanggung jawab dalam menyediakan kebutuhan konsumsi yang sehat dan bergizi bagi panitia OMB UMN 2023.{" "}
                        </ModalContents>
                    </Modal>
                </div>
                <div className="row_item">
                <Modal>
                  <ModalOpenButton>
                    <div>
                      <img src={Sarwaga} alt="Sarwaga" />
                    </div>
                  </ModalOpenButton>
                  <ModalContents title="Sarwaga" img={Sarwaga2} link="/sarwaga">
                    MEDIS
                    <br />
                    <b>Arti</b>: Hadir Dimana-mana
                    <br />
                    <br />
                    <b>Logo</b>: Tombak Mata Panah
                    <br />
                    Tombak Mata Panah merupakan senjata asal Jambi yang melambangkan keamanan dan sering dipakai untuk berburu. Senjata tersebut melambangkan kesigapan Sarwaga dalam memberikan pertolongan pertama bagi seluruh individu yang
                    terlibat dalam rangkaian kegiatan OMB UMN 2023.
                    <br />
                    <br />
                    <b>Tugas</b>:<br />
                    Sarwaga bertugas untuk mengimbau dan menjaga kesehatan baik panitia maupun peserta OMB UMN 2023.
                  </ModalContents>
                </Modal>
                </div>
                <div className="row_item">
                <Modal>
                  <ModalOpenButton>
                    <div>
                      <img src={Sambara} alt="Sambara" />
                    </div>
                  </ModalOpenButton>
                  <ModalContents title="Sambara" img={Sambara2} link="/sambara">
                    PERLENGKAPAN
                    <br />
                    <b>Arti</b>: Yang Mempersiapkan
                    <br />
                    <br />
                    <b>Logo</b>: Tombak Asmat
                    <br />
                    Tombak Asmat merupakan senjata berburu bagi masyarakat Papua. Senjata tersebut dipilih karena penggunaannya yang dinamis sehingga mudah menjangkau sasaran dengan cepat dan lincah. Berdasarkan hal tersebut, Tombak Asmat
                    melambangkan Sambara yang mampu bertindak cekat di segala situasi dalam memberikan solusi demi menyukseskan rangkaian OMB UMN 2023.
                    <br />
                    <br />
                    <b>Tugas</b>:<br />
                    Sambara bertugas dalam menyiapkan segala kebutuhan logistik pada rangkaian OMB UMN 2023 secara cepat dan tepat.
                  </ModalContents>
                </Modal>
                </div>
            </div>
            <div className="third_row">
                <div className="row_item">
                    <Modal>
                    <ModalOpenButton>
                        <div>
                        <img src={Arsa} alt="Arsa" />
                        </div>
                    </ModalOpenButton>
                    <ModalContents title="Arsa" img={Arsa2} link="/arsa">
                        <i>PERSON IN CHARGE</i> (PIC)
                        <br />
                        <b>Arti</b>: Kegembiraan, Wibawa, dan Percaya Diri
                        <br />
                        <br />
                        <b>Logo</b>: Bambu Runcing
                        <br />
                        Bambu Runcing merupakan senjata tradisional Jawa Tengah yang terbuat dari bahan sederhana. Proses pembuatan sebuah batang bambu yang diruncingkan menggambarkan Arsa yang selalu siap diasah agar dapat menjadi pribadi yang
                        tajam, bermanfaat, terampil, dan tangguh dalam membimbing peserta OMB UMN 2023.
                        <br />
                        <br />
                        <b>Tugas</b>:<br />
                        Arsa bertugas untuk membimbing dan membentuk peserta OMB UMN 2023 agar siap menghadapi dunia perkuliahan.
                    </ModalContents>
                    </Modal>
                </div>
                <div className="row_item">
                    <Modal>
                    <ModalOpenButton>
                        <div>
                        <img src={Syandana} alt="Syandana" />
                        </div>
                    </ModalOpenButton>
                    <ModalContents img={Syandana2} title="Syandana" link="/syandana">
                        <i>PUBLIC RELATIONS </i>DAN DESAIN
                        <br />
                        <b>Arti</b>: Mengalir Terus
                        <br />
                        <br />
                        <b>Logo</b>: Kudhup Melati
                        <br />
                        Kudhup Melati adalah senjata tradisional asal Jawa Barat yang digunakan sebagai alat membela diri. Senjata ini melambangkan pemiliknya yang berkepribadian baik, mulia, dan memiliki nama yang harum di masyarakat. Hal
                        tersebut selaras dengan Syandana yang bertugas untuk menyebarkan informasi dengan tulus dan penuh dedikasi serta menjaga nama baik OMB UMN 2023.
                        <br />
                        <br />
                        <b>Tugas</b>:<br />
                        Syandana bertanggung jawab dalam mendesain dan menyebarkan informasi yang akurat kepada peserta OMB UMN 2023.
                    </ModalContents>
                    </Modal>
                </div>
                <div className="row_item">
                    <Modal>
                    <ModalOpenButton>
                        <div>
                        <img src={Wiskira} alt="Wiskira" />
                        </div>
                    </ModalOpenButton>
                    <ModalContents title="Wiskira" img={Wiskira2} link="/wiskira">
                        <i>WEBSITE</i>
                        <br />
                        <b>Arti</b>: Yang Menyebarkan
                        <br />
                        <br />
                        <b>Logo</b>: Lonjo
                        <br />
                        Lonjo adalah senjata tradisional masyarakat Kalimantan Timur. Senjata ini dibuat dengan menyatukan potongan besi, bambu, dan rotan. Hal tersebut melambangkan Wiskira yang menjadi jembatan penghubung peserta OMB UMN 2023
                        dalam memperoleh informasi.
                        <br />
                        <br />
                        <b>Tugas</b>:<br />
                        Wiskira bertanggung jawab dalam merancang website resmi yang memuat nilai-nilai dan informasi sesuai dengan kebutuhan peserta OMB UMN 2023.
                    </ModalContents>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
 
export default Content;