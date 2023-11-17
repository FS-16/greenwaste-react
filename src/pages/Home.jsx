import handleTitle from '../handle/handleTitle';

function Home() {
  handleTitle('Home | GreenWaste');

  return (
    <>
      <div
        className='bg-home h-screen bg-cover object-center bg-no-repeat flex justify-center items-center'
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/home/hero-img.jpg')",
        }}
      >
        <div className='text-center w-1/2'>
          <h1 className='text-white text-5xl font-bold mb-5'>Ayo Jadilah Pahlawan Lingkungan Bersama Kami!</h1>
          <p className='text-white text-lg font-semibold mx-20 mb-5'>
            Dengan setiap tindakan kecil, kita bisa menjadi pahlawan bagi lingkungan. Bergabunglah dengan kami di
            GreenWaste dan mulailah perjalanan Anda menuju keberlanjutan dan pelestarian lingkungan.
          </p>
          <button className='px-8 py-4 text-white text-2xl bg-green-button rounded-md hover:bg-white hover:text-green-button'>
            Gabung Sekarang
          </button>
        </div>
      </div>
      <section className='py-10 h-screen'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-green-dark'>Tentang Kami</h1>
          <p className='text-lg mt-2'>Misi kami untuk lingkungan yang lebih baik</p>
        </div>
        <div className='flex gap-x-10 mt-16 w-3/4 justify-center mx-auto'>
          <p className='font-bold text-green-dark text-center my-auto px-14'>
            “Kami adalah pionir dalam menghadapi tantangan meningkatnya volume limbah rumah tangga dan pabrik. Di
            GreenWaste, kami mendedikasikan diri untuk menyediakan solusi yang inovatif dan edukatif bagi individu,
            rumah tangga, dan bisnis untuk menghadapi permasalahan lingkungan yang mendesak.”
          </p>
          <img className='rounded-2xl shadow-xl shadow-black/50' src='/img/home/tentang-kami.jpg' alt='foto' />
        </div>
      </section>
      <section className='w-full h-screen mt-10'>
        <h1 className='text-center text-4xl font-bold text-green-dark'>Kenapa Memilih GreenWaste?</h1>
        <div className='grid grid-cols-3'>
          <div className='card bg-slate-100 w-72 px-8 py-10 text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='bi bi-recycle h-32 w-auto text-green-button'
              viewBox='0 0 16 16'
            >
              <path d='M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z' />
            </svg>
            <h3 className='font-bold text-base mt-4'>Solusi Pengolahan Limbah</h3>
            <p className='mt-2'>
              Kami menyediakan solusi komprehensif untuk pengelolaan limbah yang efisien dan berkelanjutan.
            </p>
            <a href='#' className='py-2 px-4 w-fit mx-auto mt-8 bg-green-button text-white rounded-lg'>
              Read More
            </a>
          </div>
          <div className='card bg-slate-100 w-72 px-8 py-10 text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='bi bi-recycle h-32 w-auto text-green-button'
              viewBox='0 0 16 16'
            >
              <path d='M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z' />
            </svg>
            <h3 className='font-bold text-base mt-4'>Solusi Pengolahan Limbah</h3>
            <p className='mt-2'>
              Kami menyediakan solusi komprehensif untuk pengelolaan limbah yang efisien dan berkelanjutan.
            </p>
            <a href='#' className='py-2 px-4 w-fit mx-auto mt-8 bg-green-button text-white rounded-lg'>
              Read More
            </a>
          </div>
          <div className='card bg-slate-100 w-72 px-8 py-10 text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='bi bi-recycle h-32 w-auto text-green-button'
              viewBox='0 0 16 16'
            >
              <path d='M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z' />
            </svg>
            <h3 className='font-bold text-base mt-4'>Solusi Pengolahan Limbah</h3>
            <p className='mt-2'>
              Kami menyediakan solusi komprehensif untuk pengelolaan limbah yang efisien dan berkelanjutan.
            </p>
            <a href='#' className='py-2 px-4 w-fit mx-auto mt-8 bg-green-button text-white rounded-lg'>
              Read More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;