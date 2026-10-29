import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { HowWeWork } from './pages/HowWeWork';
import { Insights } from './pages/Insights';
import { NotFound } from './pages/NotFound';
import { Solutions } from './pages/Solutions';
import { WhoWeServe } from './pages/WhoWeServe';
import { Work } from './pages/Work';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="who-we-serve" element={<WhoWeServe />} />
          <Route path="work" element={<Work />} />
          <Route path="how-we-work" element={<HowWeWork />} />
          <Route path="about" element={<About />} />
          <Route path="insights" element={<Insights />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
