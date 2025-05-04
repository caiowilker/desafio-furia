import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CadastroFan from './components/CadastroFan';
import UploadDocumento from './components/UploadDocumento';
import AnalisePerfil from './components/AnalisePerfil';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Cadastro</Link> | <Link to="/upload">Upload</Link> | <Link to="/analise">Análise</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CadastroFan />} />
        <Route path="/upload" element={<UploadDocumento />} />
        <Route path="/analise" element={<AnalisePerfil />} />
      </Routes>
    </Router>
  );
}

export default App;
