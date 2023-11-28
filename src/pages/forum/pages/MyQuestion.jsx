import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import { useSelector } from 'react-redux';
import handleTitle from '../../../handle/handleTitle';
import { Link } from 'react-router-dom';

function MyQuestion() {
  handleTitle('My Question | GreenWaste');

  const { currentUser } = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/users/question/${currentUser._id}`);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleQuestionDelete = async (questionId) => {
    try {
      const res = await fetch(`/api/questions/${questionId}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setData((prev) => prev.filter((item) => item._id !== questionId));
    } catch (error) {
      console.log(error.message);
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
              <h1>My Questions</h1>
            </div>
            <div>
              <Link to={'/forum/ask-question'}>
                <button className="bg-green-500 text-white p-2 text-sm rounded-md hover:bg-green-900">
                  Ask Question
                </button>
              </Link>
            </div>
          </div>

          {/* LIST ALL QUESTION */}
          {data.length > 0 ? (
            data.map((item, i) => (
              <div
                className="flex flex-col ml-10 mt-10 border-b-2 pb-5"
                key={item._id}
              >
                <div className="flex flex-row justify-between">
                  <div className="w-[490px]">
                    <Link to={`/details-question/${item._id}`}>
                      <h1 className="text-xl font-bold text-green-900 hover:text-green-500">
                        {item.title}
                      </h1>
                    </Link>
                  </div>
                  <div className="flex flex-row gap-1">
                    <button className="bg-green-600 text-white p-1 text-sm rounded-md hover:bg-green-900">
                      Edit
                    </button>
                    <button
                      onClick={() => handleQuestionDelete(item._id)}
                      className="bg-red-600 text-white p-1 text-sm rounded-md hover:bg-red-900"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="mt-2 mb-2 text-sm text-gray-500">
                  <p>{item.description}</p>
                </div>
                <div className="flex flex-row justify-between mt-2">
                  <div className="">
                    <span className=" text-green-700 rounded-md p-1 text-sm mr-2">
                      {item.category.join(`, `)}
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <div className="w-[25px] h-[25px] mr-1">
                      <img src="/img/avatar.png" alt="avatar icon" />
                    </div>
                    <div className="text-green-500">{currentUser.username}</div>
                    <div className="text-gray-400 ml-2">
                      {item.date.substring(0, 10)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="ml-10">
              <h1>Loading.....</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyQuestion;
