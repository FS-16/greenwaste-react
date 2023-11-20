import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Solution from './pages/Solution';
import Forum from './pages/Forum';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Routes>
      <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Route index element={<Home />} />
              <Route path="/solution" element={<Solution />} />
              <Route path="/forum" element={<Forum />} />
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;