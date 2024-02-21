
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import { useState } from 'react';

function App() {

  const[btnCadastrar, setBtnCadastrar] = useState(true); // estado para o botão cadastrar 

  return (
    <div>
    <Formulario botao = {btnCadastrar}/> {/* passando o estado para o componente Formulario */}
    <Tabela />
    </div>
  );
}

export default App;
