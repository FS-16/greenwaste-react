import React from 'react';
import Sidebar from '../Sidebar';

function AllQuestion() {
  return (
    <div className="container">
      <div className="flex flex-row">
        <Sidebar />
        <div className="mt-10 ml-[-20px]">
          <h1> All Question</h1>
        </div>
      </div>
    </div>
  );
}

export default AllQuestion;
