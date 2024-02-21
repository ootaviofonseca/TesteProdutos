
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import { useEffect, useState } from 'react';

function App() {

  //objeto produto 
  const produto = {
    codigo: 0,
    nome: '',
    marca: ''
  };

  //useState
  const[btnCadastrar, setBtnCadastrar] = useState(true); // estado para o botão cadastrar 
  const[produtos, setProdutos] = useState([]); // estado para os produtos cadastrados 
  const[objProduto, setObjProduto] = useState(produto); // estado para o produto selecionado

  //useEffect serve para executar um código toda vez que o componente for renderizado 
  useEffect(()=>{
    fetch('http://localhost:8080/listar')
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido));
  },[]); // array vazio para executar o código apenas uma vez e não entrar em loop infinito
  
  //Obtendo os dados do formulario
  // o evento retorna um objeto com os dados do formulário
  const aoDigitar = (evento) => {
    setObjProduto({...objProduto, [evento.target.name]: evento.target.value}); // atualizando o estado do produto
  }

  //Cadastro de produtos
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar',{ // enviando os dados para o servidor
      method: 'POST', // método de envio
      headers: { //headers da requisição que contém o tipo de conteúdo
        'Content-Type': 'application/json',// 
        'Accept': 'application/json' //
      },
      body: JSON.stringify(objProduto) //body da requisição convertido para JSON
    })
    .then(retorno => retorno.json()) // convertendo o retorno da requisição para JSON
    .then(retorno_convertido => { // tratando o retorno da requisição 
      setProdutos([...produtos, retorno_convertido]);// atualizando o estado dos produtos
    });
  }

  return (
    <div>
    {/*<p>{JSON.stringify(objProduto)}</p> teste para mostrar o objProduto*/}
    <Formulario botao = {btnCadastrar} eventoTeclado= {aoDigitar} cadastrar = {cadastrar} /> {/* passando o estado para o componente Formulario */}
    <Tabela vetor={produtos}/>
    </div>
  );
}

export default App;
