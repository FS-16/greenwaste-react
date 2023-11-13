import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Solution from './pages/Solution';
import Forum from './pages/Forum';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
