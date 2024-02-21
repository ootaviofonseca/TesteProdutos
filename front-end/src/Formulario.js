function Formulario({botao}){ // recebendo o estado do botão do componente App.js
    return (
        <form>
            
            <input type="text" placeholder = "Nome" className="form-control"/>
            <input type="text" placeholder = "Marca" className="form-control"/>

            {
                botao 
                // se o estado for true, exibe o botão cadastrar
                ? <input type = 'button' value = 'Cadastrar'  className="btn btn-primary" /> 
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