import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Sholat from "./pages/Sholat/Sholat";
import Quran from "./pages/Quran/Quran";
import Surah from "./components/Surah/index";
import QuranAyat from "./components/QuranAyat/index";
import AboutPage from "./pages/About/About";
import Berita from "./pages/Berita/Berita";
import AsmaulHusna from "./pages/AsmaulHusna/AsmaulHusna"


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quran">
            <Route path=":surahNumber" element={<Surah />} />
            <Route path=":surahNumber/:ayahNumber" element={<QuranAyat />} />
            <Route index element={<Quran />} />
          </Route>
          <Route path="/sholat" element={<Sholat />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/asmaulHusna" element={<AsmaulHusna />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
