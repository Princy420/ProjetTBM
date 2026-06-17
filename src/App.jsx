// src/App.jsx
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import ProgramDetailPage from './components/ProgramDetailPage';

export default function App() {
  return (
    <HashRouter>
      <GlobalStyles />
      <div className="min-h-screen bg-[#F9F7F2] text-[#2D2D2D]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programme/:slug" element={<ProgramDetailPage />} />
          <Route path="/tour-be-mada" element={<Navigate to="/programme/tour-be-mada" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
