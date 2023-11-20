import React from 'react'
import SolusiDaurUlangCss from './SolutionDaurUlangCss.module.css'

export default function SolutionDaurUlang() {
  return (
    <>
      <div className={SolusiDaurUlangCss.heroSection} style={{background: 'url("/img/Solution/daur ulang background.jpg") center no-repeat', backgroundSize: 'cover' }}>
        <div className={SolusiDaurUlangCss.container}>
          <div className={SolusiDaurUlangCss.heroSectionDeskripsi}>
            <p className={SolusiDaurUlangCss.description}>
                Solusi | Daur Ulang
            </p>
          </div>
          <div className={SolusiDaurUlangCss.heroSectionJudul}>
              <h1>Daur Ulang</h1>
          </div>
          <div className={SolusiDaurUlangCss.heroSectionDeskripsi}>
              <p className={SolusiDaurUlangCss.description}>
                  Daur ulang adalah suatu proses yang terlibat dalam mengumpulkan, memproses, dan mengubah bahan-bahan bekas atau limbah menjadi produk-produk baru yang memiliki nilai tambah, dengan tujuan mengurangi jumlah limbah yang masuk ke tempat pembuangan sampah, menghemat sumber daya alam, serta mendukung keberlanjutan dan perlindungan lingkungan.
                </p>
          </div>
        </div>
      </div>

      <div className={SolusiDaurUlangCss.section}>
        <div className={SolusiDaurUlangCss.sectionJudul}>
          <h1>
              Daur ulang itu sangat penting, lho! Yuk, kita eksplorasi mengapa hal ini bisa bikin dunia jadi lebih keren!
          </h1>
        </div>
        <div className={SolusiDaurUlangCss.sectionContainer}>
          <div className={SolusiDaurUlangCss.sectionDescription}>
            <ul>
              <li>
                  <img src="/img/Solution/checkmark (1).png" alt="Checkmark" /> <p><b style={{fontWeight: 600}}>Mengurangi Tumpukan Sampah:</b> Daur ulang adalah cara efektif untuk mengurangi tumpukan sampah di tempat pembuangan sampah. Dengan mendaur ulang material seperti kertas, plastik, dan logam, kita mengurangi volume limbah yang mencemari lingkungan kita.</p>
              </li>
              <li>
                  <img src="/img/Solution/checkmark (1).png" alt="Checkmark" /> <p><b style={{fontWeight: 600}}>Konservasi Sumber Daya Alam:</b> Proses produksi banyak barang memerlukan eksploitasi sumber daya alam yang berharga. Dengan mendaur ulang, kita dapat mengurangi tekanan terhadap sumber daya seperti kayu, minyak, dan logam, yang dapat mengurangi kerusakan lingkungan.
                </p>
              </li>
              <li>
                  <img src="/img/Solution/checkmark (1).png" alt="Checkmark" /> <p><b style={{fontWeight: 600}}>Pengurangan Emisi Karbon:</b> Produksi material baru seringkali memerlukan energi besar dan menghasilkan emisi gas rumah kaca. Daur ulang memerlukan lebih sedikit energi dan mengurangi emisi, membantu memperlambat perubahan iklim.
                </p>
              </li>
              <li>
                  <img src="/img/Solution/checkmark (1).png" alt="Checkmark" /> <p><b style={{fontWeight: 600}}>Penciptaan Lapangan Kerja:</b> Industri daur ulang menciptakan lapangan kerja yang signifikan. Dari pengumpulan hingga pengolahan material daur ulang, banyak pekerjaan yang tersedia dalam rantai pasokan daur ulang, mendukung pertumbuhan ekonomi lokal.
                  </p>
              </li>
            </ul>
          </div>
          <div className={SolusiDaurUlangCss.sectionImage}>
              <img src="/img/Solution/recycle.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className={SolusiDaurUlangCss.section2} style={{backgroundColor: '#F3F3F3'}}>
        <div className={SolusiDaurUlangCss.judulSection2}>
          <h2>
            Pilihan Solusi untuk Anda
          </h2>
        </div>
        <div className={SolusiDaurUlangCss.cardContainer}>
          {/* isi card belum di tambahkan */}
        </div>
      </div>
    </>
  )
}
