import React, { useState } from 'react';

import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';


function RegisterCategory() {

  const [categorys, setCategorys] = useState(['Teste']);
  const [categoryName, setCategoryName] = useState('Filmes');

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategorys([...categorys, categoryName]);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {categoryName}</h1>

      <form onSubmit={handleSubmit}>
        <label>Nome da Categoria:
          <input
            type="text"
            value={categoryName}
            onChange={(infosDoEvento) => {
              setCategoryName(infosDoEvento.target.value);
            }}
          />
        </label>

        <button >
          Cadastrar
        </button>
      </form>

      <ul>
        {categorys.map((category) => <li key={category}>{category}</li>)}
      </ul>

      <Link to="">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;
