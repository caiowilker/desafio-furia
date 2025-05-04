import React, { useState, useEffect } from 'react';
import api from '../api';

const AnalisePerfil = () => {
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [analise, setAnalise] = useState(null);
  const [validacao, setValidacao] = useState(null);

  // Função para analisar as redes sociais
  const analisarRedes = async () => {
    try {
      const response = await api.get(`/analise-social`, {
        params: { twitter, instagram }
      });
      setAnalise(response.data); // Armazenando a resposta no estado
    } catch (error) {
      console.error('Erro na análise das redes sociais:', error);
    }
  };

  // Função para validar perfil com IA
  const validarIA = async () => {
    try {
      const response = await api.post('/validar-perfil', conteudo, {
        headers: { 'Content-Type': 'text/plain' }
      });
      setValidacao(response.data.valido);
    } catch (error) {
      console.error('Erro na validação do perfil:', error);
    }
  };

  return (
    <div>
      <h2>Análise de Redes Sociais</h2>
      <input
        placeholder="@twitter"
        value={twitter}
        onChange={(e) => setTwitter(e.target.value)}
      />
      <input
        placeholder="@instagram"
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
      />
      <button onClick={analisarRedes}>Analisar</button>

      {analise && <pre>{JSON.stringify(analise, null, 2)}</pre>}

      <h2>Validação com IA</h2>
      <textarea
        placeholder="Conteúdo do Perfil"
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
      />
      <button onClick={validarIA}>Validar Perfil</button>
      {validacao !== null && (
        <p>Perfil válido? {validacao ? "Sim" : "Não"}</p>
      )}
    </div>
  );
};

export default AnalisePerfil;
