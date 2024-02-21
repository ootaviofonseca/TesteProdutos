function Formulario({botao,eventoTeclado,cadastrar}){ // recebendo o estado do botão do componente App.js
    return (
        <form>
            {//onChange é um evento que ocorre quando o valor do campo é alterado
            }
            <input type="text" onChange={eventoTeclado} name = 'nome' placeholder = "Nome" className="form-control"/>
            <input type="text" onChange={eventoTeclado} name = 'marca' placeholder = "Marca" className="form-control"/>

            {
                botao 
                // se o estado for true, exibe o botão cadastrar
                ? <input type = 'button' value = 'Cadastrar' onClick={cadastrar}  className="btn btn-primary" /> 
                : // se o estado for false, exibe os botões alterar, remover e cancelar
                <div>
                    <input type = 'button' value = 'Alterar'    className="btn btn-warning" />
                    <input type = 'button' value = 'Remover'    className="btn btn-danger" />
                    <input type = 'button' value = 'Cancelar'   className="btn btn-secondary" />
                </div>
                
            }
            
            
           
        </form>
    );
}

export default Formulario;