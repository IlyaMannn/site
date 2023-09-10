import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageKontakty from "./pages/kontakty/index"
import PageNovosti from "./pages/novosti/novosti"
import PageoNas from './pages/oNas/oNas';
import PageCoca_cola from './pages/spisok/jelezo/coca_cola';
import PageCola_hata from './pages/spisok/steklo/cola_hata';
import PageFanta from './pages/spisok/jelezo/fanta';
import PageFanta_berry from './pages/spisok/jelezo/fanta_berry';
import PageFanta_china from './pages/spisok/steklo/fanta_china';
import PageFanta_steklo from './pages/spisok/steklo/fanta_steklo';
import PageHatasoda from './pages/spisok/steklo/hatasoda';
import PageSangaria from './pages/spisok/jelezo/sangaria';
import PageFooter from './pages/footer/footer';
import PageHeader from './pages/header/header';
import PageMenuM from './pages/menuM/menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader/>
          <Routes>
            <Route path={'/'} element={<PageMenuM />} />
            <Route path={'/kontakty'} element={<PageKontakty />} />
            <Route path={'/oNas'} element={<PageoNas />} />
            <Route path={'/novosti'} element={<PageNovosti />} />
            <Route path={'/fanta_berry'} element={<PageFanta_berry />} />
            <Route path={'/coca_cola'} element={<PageCoca_cola />} />
            <Route path={'/fanta'} element={<PageFanta />} />
            <Route path={'/sangaria'} element={<PageSangaria />} />
            <Route path={'/cola_hata'} element={<PageCola_hata />} />
            <Route path={'/fanta_china'} element={<PageFanta_china />} />
            <Route path={'/fanta_steklo'} element={<PageFanta_steklo />} />
            <Route path={'/hatasoda'} element={<PageHatasoda />} />
          </Routes>
        <PageFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
