import React, { useState } from 'react';
import api from '../api';

const UploadDocumento = () => {
  const [id, setId] = useState('');
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!id || !file) {
      alert("Por favor, preencha o ID e selecione um arquivo.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      await api.post('/documento/${id}', formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      alert("Documento enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar documento:", error);
      alert("Erro ao enviar documento. Verifique o console para mais detalhes.");
    }
  };

  return (
    <div>
      <h2>Upload de Documento</h2>
      <input
        placeholder="ID do Fã"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <button onClick={handleUpload}>Enviar</button>
    </div>
  );
};

export default UploadDocumento;
