import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageSolution from './pages/PageSolution';
import PageSolutionDaurUlang from './pages/PageSolutionDaurUlang';
import PageSolutionPengomposan from './pages/PageSolutionPengomposan';
import PageSolutionProduk from './pages/PageSolutionProduk';
import Forum from './pages/Forum';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/solution" element={<PageSolution />} />
        <Route path="/Solution/daurulang" element={<PageSolutionDaurUlang />} />
        <Route path="/Solution/pengomposan" element={<PageSolutionPengomposan />} />
        <Route path="/Solution/produk" element={<PageSolutionProduk />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
