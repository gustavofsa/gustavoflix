import React from 'react';

import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

function RegisterVideo() {
  return (
    <PageDefault>
      <h1>Página de Cadastro de Vídeo</h1>

      <Link to="/register/category">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default RegisterVideo;
