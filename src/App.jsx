import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Solution from './pages/Solution';
import Forum from './pages/Forum';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AllQuestion from './components/forum/pages/AllQuestion';
import AskQuestion from './components/forum/pages/AskQuestion';
import MyQuestion from './components/forum/pages/MyQuestion';
import MyParticipation from './components/forum/pages/MyParticipation';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/forum/all-question" element={<AllQuestion />} />
        <Route path="/forum/ask-question" element={<AskQuestion />} />
        <Route path="/forum/my-question" element={<MyQuestion />} />
        <Route path="/forum/my-participation" element={<MyParticipation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
