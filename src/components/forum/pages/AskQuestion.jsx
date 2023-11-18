import React from 'react';
import Sidebar from '../Sidebar';

function AskQuestion() {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex-none">
        <Sidebar />
      </div>

      <div className="flex-initial w-[650px] mt-10">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between ml-10 border-b-2 pb-4">
            <div className="text-xl pt-2 font-bold">
              <h1>Ask Question</h1>
            </div>
          </div>

          {/* SECTION ASK QUESTION */}
          <div className="ml-10">
            <div className="pt-5">
              <h1 className="text-black text-base font-medium pb-1">Judul</h1>
              <input
                type="text"
                placeholder="Contoh title, Bagaimana cara mengelola limbah?"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
            {/* KATEGORI */}
            <div className="pt-5">
              <h1 className="text-black text-base font-medium pb-1">
                Kategori
              </h1>
              <select className="select select-bordered w-full max-w-xl">
                <option disabled selected>
                  Pilih Kategori
                </option>
                <option>Limbah Anorganik</option>
                <option>Limbah Organik</option>
                <option>Limbah B3</option>
              </select>
            </div>

            {/* PERTANYAAN */}
            <div className="pt-5">
              <h1 className="text-black text-base font-medium">
                Pertanyaan apa yang mau di tanyakan?
              </h1>
              <h6 className="text-sm text-gray-400 pb-1">
                Deskripsikan dan Jelaskan pertanyaan anda dengan lengkap minimal
                20 karakter.
              </h6>
              <textarea
                className="textarea textarea-bordered w-full max-w-xl"
                placeholder="Tulis pertanyaan anda disini !"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskQuestion;
