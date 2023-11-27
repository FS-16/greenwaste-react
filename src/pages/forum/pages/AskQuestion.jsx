import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AskQuestion() {
  const { currentUser } = useSelector((state) => state.user);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: [],
  });
  const navigate = useNavigate();

  const categoriesOptions = [
    { label: 'limbah Anorganik', value: 'limbah Anorganik' },
    { label: 'limbah Organik', value: 'limbah Organik' },
    { label: 'Limbah B3', value: 'Limbah B3' },
  ];

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const isChecked = e.target.checked;
      const updatedCategory = isChecked
        ? [...formData.category, value]
        : formData.category.filter((category) => category !== value);

      setFormData({
        ...formData,
        category: updatedCategory,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          author: currentUser.username,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      navigate(`/details-question/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

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
          {/* <div className="ml-10">
            <div className="pt-5">
              <h1 className="text-black text-base font-medium pb-1">Judul</h1>
              <input
                type="text"
                placeholder="Contoh title, Bagaimana cara mengelola limbah?"
                className="input input-bordered w-full max-w-xl"
              />
            </div>
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
          </div> */}

          <form onSubmit={handleSubmit} className="ml-10">
            <div>
              <h1>Title:</h1>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full max-w-xl"
              />
            </div>

            <div>
              <h1>Description:</h1>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full max-w-xl"
              />
            </div>

            <div>
              <h1>Category :</h1>
              {categoriesOptions.map((option) => (
                <div key={option.value}>
                  <input
                    type="checkbox"
                    id={option.value}
                    name="category"
                    value={option.value}
                    checked={formData.category.includes(option.value)}
                    onChange={handleChange}
                  />
                  <label htmlFor={option.value}>{option.value}</label>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 mt-5"
            >
              {loading ? 'Loading...' : 'Ask Question'}
            </button>
            {error && <p className="text-red-700 text-sm">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AskQuestion;
