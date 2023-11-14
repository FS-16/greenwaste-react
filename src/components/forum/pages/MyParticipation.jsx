import React from 'react';
import Sidebar from '../Sidebar';

function MyParticipation() {
  return (
    <div>
      <div className="flex flex-row">
        <Sidebar />
        <div className="mt-10 ml-[-20px]">
          <h1>My Participation</h1>
        </div>
      </div>
    </div>
  );
}

export default MyParticipation;
