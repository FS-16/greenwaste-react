import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/forum/Sidebar';
import handleTitle from '../handle/handleTitle';

import NotFound from './NotFound';

function Forum() {
  handleTitle('Forum | GreenWaste');
  return (
    <div className="container">
      <div className="flex flex-row">
        <div className="">
          <Sidebar />
        </div>
        <div className="mt-10">
          <h1>All Question</h1>
        </div>
      </div>
      {/* <Routes>
        <Route path="/forum/all-question" element={<AllQuestion />} />
        <Route path="/ask-question" element={<AskQuestion />} />
        <Route path="/my-question" element={<MyQuestion />} />
        <Route path="/my-participation" element={<MyParticipation />} />

      </Routes> */}
    </div>
  );
}

export default Forum;
