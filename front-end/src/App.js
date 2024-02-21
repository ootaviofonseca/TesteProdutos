
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
      if(retorno_convertido.mensagem !== undefined){ //se tiver mensagem de erro
        alert(retorno_convertido.mensagem); // exibindo a mensagem de erro
      }else{
        setProdutos([...produtos, retorno_convertido]);// atualizando o estado dos produtos
        alert('Produto cadastrado com sucesso!'); // exibindo mensagem de sucesso
        limparFormulario(); // limpando o formulário
      }
      
    });
  }

  //Selecionar Produto
  const selecionarProduto = (indice) => { //o indice é o índice do vetor de produtos
    setObjProduto(produtos[indice]); // pega as informações do produto selecionado e atualiza o estado do produto
    setBtnCadastrar(false); // atualiza o estado do botão para false
  }

  //Limpar o formulário
  const limparFormulario = () => {
    setObjProduto(produto);// atualizando o estado do produto
    setBtnCadastrar(true); // atualizando o estado do botão
  }
  return (
    <div>
    {/*<p>{JSON.stringify(objProduto)}</p> teste para mostrar o objProduto*/}
    <Formulario botao = {btnCadastrar} eventoTeclado= {aoDigitar} cadastrar = {cadastrar} obj={objProduto} cancelar = {limparFormulario}/> {/* passando o estado para o componente Formulario */}
    <Tabela vetor={produtos} selecionar = {selecionarProduto}/>
    </div>
  );
}

export default App;
