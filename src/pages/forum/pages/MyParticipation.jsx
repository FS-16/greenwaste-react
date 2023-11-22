import React from 'react';
import Sidebar from '../../../components/Sidebar';

function MyParticipation() {
  return (
    <div className="flex flex-row justify-center ">
      <div className="flex-none">
        <Sidebar />
      </div>

      <div className="flex-initial w-[650px] mt-10 mb-10">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between ml-10 border-b-2 pb-4">
            <div className="text-xl pt-2 font-bold">
              <h1>My Participation</h1>
            </div>
          </div>

          {/* SECTION ASK QUESTION */}
          <div className="ml-10 p-5 bg-[#cff3bd] rounded-md mt-5">
            <div className="flex flex-row items-center mt-1">
              <img
                src="/img/avatar.png"
                alt="avatar icon"
                className="w-[50px] h-[50px]"
              />
              <h1 className="text-base font-bold ml-2">asdajsdk</h1>
            </div>

            <div className="flex gap-2 mt-5">
              <div className=" bg-[#aaeb8a] p-5 rounded-md shadow-md">
                <h1 className="font-bold">Total Question</h1>
                <span>20 Question</span>
              </div>
              <div className="bg-[#aaeb8a] p-5 rounded-md shadow-md">
                <h1 className="font-bold">Total Point</h1>
                <span>30 Point</span>
              </div>
            </div>
          </div>

          <div className="ml-10 mt-5">
            <h1 className="text-base font-bold mb-2">All Category</h1>
            <div className="flex flex-row gap-2">
              <div className="bg-[#aaeb8a] p-5 rounded-md shadow-md text-center w-[200px]">
                <h1 className="font-bold text-base">Limbah Anorganik</h1>
                <span className="text-sm">5 Question</span>
              </div>
              <div className="bg-[#aaeb8a] p-5 rounded-md shadow-md text-center w-[200px]">
                <h1 className="font-bold text-base">Limbah Organik</h1>
                <span className="text-sm">10 Question</span>
              </div>
              <div className="bg-[#aaeb8a] p-5 rounded-md shadow-md text-center w-[200px]">
                <h1 className="font-bold text-base">Limbah B3</h1>
                <span className="text-sm">7 Question</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyParticipation;
