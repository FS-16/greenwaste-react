import React from 'react';
import Sidebar from '../Sidebar';

function MyQuestion() {
  return (
    <div>
      <div className="flex flex-row">
        <Sidebar />
        <div className="mt-10 ml-[-20px]">
          <h1>My Question</h1>
        </div>
      </div>
    </div>
  );
}

export default MyQuestion;
