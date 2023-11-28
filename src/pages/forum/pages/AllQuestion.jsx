import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import { getQuestions } from '../../../api/api';
import { Link } from 'react-router-dom';

function AllQuestion() {
  const [question, setQuestion] = useState([]);
  console.log(question);

  useEffect(() => {
    getQuestions((dataQuestion) => {
      setQuestion(dataQuestion);
      // console.log(dataQuestion);
    });
  }, []);

  return (
    <div className="flex flex-row justify-center">
      <div className="flex-none">
        <Sidebar />
      </div>

      <div className="flex-initial w-[650px] mt-10">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between ml-10 border-b-2 pb-4">
            <div className="text-xl pt-2 font-bold">
              <h1>All Questions</h1>
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
          {question.length > 0 ? (
            question.map((item, i) => (
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
                  <div>5 Answers</div>
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
                    <div className="text-green-500">{item.author}</div>
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

export default AllQuestion;
