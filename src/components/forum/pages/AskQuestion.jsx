import React from 'react';
import Sidebar from '../Sidebar';

function AskQuestion() {
  return (
    <div>
      <div className="flex flex-row">
        <Sidebar />
        <div className="mt-10 ml-[-20px]">
          <h1>Ask Question</h1>
        </div>
      </div>
    </div>
  );
}

export default AskQuestion;
