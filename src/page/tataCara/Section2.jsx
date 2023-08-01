import React from 'react';
import './Section2.scss';

const tataAturan = [
    {
        id: 1,
        heading: 'Datang Tepat Waktu',
        content: 'Wajib datang tepat waktu dan mengikuti rangkaian kegiatan OMB UMN 2023 dari awal hingga akhir.',
    },
    {
        id: 2,
        heading: 'Wajib Menggunakan Masker',
        content:
            'Wajib menggunakan masker sekali pakai berwarna putih dengan model KN95, KF94, atau medis selama rangkaian kegiatan OMB UMN 2023.',
    },
    {
        id: 3,
        heading: 'Sudah Melakukan Vaksinasi',
        content: 'Wajib melakukan vaksinasi minimal tahap kedua untuk mengikuti rangkaian kegiatan OMB UMN 2023.',
    },
    {
        id: 4,
        heading: 'Mempersiapkan Barang yang Dibutuhkan',
        content: 'Wajib mempersiapkan dan membawa barang-barang yang dibutuhkan dalam mengikuti rangkaian kegiatan OMB UMN 2023.',
    },
    {
        id: 5,
        heading: 'Taat Protokol Kesehatan',
        content: 'Wajib mengikuti protokol kesehatan yang berlaku selama mengikuti rangkaian kegiatan OMB UMN 2023.',
    },
];

function Section2() {
    return (
        <div className="wrapper">
            <p className="break">Mari cermati dengan saksama tata cara pelaksanaan OMB UMN 2023 luring (<i>offline</i>)!</p>
            <img src="./Assets/Tata Cara/Group-putik_gradient.svg" className='putik' alt="" />
            <img src="./Assets/Tata Cara/Vector-daun_gradient.svg" className='daun' alt="" />
            {tataAturan.map((aturan) => (
                <div key={aturan.id} className="content">
                    <div className='number'>
                        <h1 className='num'>{aturan.id}</h1>
                    </div>
                    <div className='textbox'>
                        <h3 className='heading'>{aturan.heading}</h3>
                        <p className='text'>{aturan.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export { Section2 };
