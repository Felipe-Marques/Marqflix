import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

export default function CadastroCategoria() {
  const [categorias, setCategorias] = React.useState([]);

  const categoriaInicial = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [valores, setValores] = React.useState(categoriaInicial);

  const handlerInputChange = (event) => {
    const { value } = event.target;
    console.log(event);
    handlerValues(event.target.getAttribute('name'), value);
  };
  const handlerValues = (chave, valor) => {
    setValores({
      ...valores,
      [chave]: valor,
    });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    setCategorias([...categorias, valores]);

    setValores(categoriaInicial);
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>

      <form onSubmit={handlerSubmit}>
        <FormField
          label="Nome da Categoria: "
          type="text"
          value={valores.nome}
          name="nome"
          onChange={handlerInputChange}
        />

        <div>
          <label>
            Descrição da Categoria:
            <textarea
              type="text"
              value={valores.descricao}
              name="descricao"
              onChange={handlerInputChange}
            />
          </label>
        </div>

        <FormField
          label="Cor da Categoria: "
          type="color"
          value={valores.cor}
          name="cor"
          onChange={handlerInputChange}
        />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return <li key={`${categoria}${index}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}
