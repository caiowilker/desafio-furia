import React, { useState } from 'react';
import api from '../api';

const CadastroFan = () => {
  const [fan, setFan] = useState({
    nome: '',
    email: '',
    cpf: '',
    interesses: '',
    endereco: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const validarCPF = (cpf) => {
    return cpf.length === 11; // Validação simples
  };

  const handleChange = (e) => {
    setFan({ ...fan, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarCPF(fan.cpf)) {
      alert("CPF inválido.");
      return;
    }

    if (!fan.email.includes('@')) {
      alert("Email inválido.");
      return;
    }

    // Transforma interesses em array de strings
    const interessesArray = fan.interesses
      .split(',')
      .map(item => item.trim())
      .filter(item => item.length > 0);

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await api.post('/fans', {
        ...fan,
        interesses: interessesArray
      });

      setSuccess(true);
      alert("Fã cadastrado com sucesso! ID: " + response.data.id);
      setFan({
        nome: '',
        email: '',
        cpf: '',
        interesses: '',
        endereco: ''
      });
    } catch (error) {
      console.error("Erro ao cadastrar fã:", error);
      if (error.response) {
        setError(error.response.data.message || "Erro ao cadastrar fã. Tente novamente.");
      } else {
        setError("Erro de conexão com o servidor. Tente novamente mais tarde.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Cadastro de Fã</h2>
      {success ? (
        <p style={{ color: 'green' }}>Cadastro realizado com sucesso!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            name="nome"
            placeholder="Nome"
            onChange={handleChange}
            value={fan.nome}
            required
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={fan.email}
            required
          />
          <input
            name="cpf"
            placeholder="CPF"
            onChange={handleChange}
            value={fan.cpf}
            required
          />
          <input
            name="interesses"
            placeholder="Interesses (separados por vírgula)"
            onChange={handleChange}
            value={fan.interesses}
            required
          />
          <input
            name="endereco"
            placeholder="Endereço"
            onChange={handleChange}
            value={fan.endereco}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CadastroFan;
