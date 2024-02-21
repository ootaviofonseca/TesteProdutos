function Tabela({vetor,selecionar}){
    return (
        <table className="table">
        <thead > 
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Marca</th>
                <th>Selecionar</th>
            </tr>
        </thead>
        
        <tbody> {/* corpo da tabela */}
            {   
                /* percorrendo o vetor de produtos */
                vetor.map((obj, indice)=> (    
                    <tr key={indice}>
                        <td>{indice+1}</td>
                        <td>{obj.nome}</td>
                        <td>{obj.marca}</td>
                        <td>
                            <button onClick={()=>{selecionar(indice)}} className="btn btn-success">Selecionar</button> {/* botão de seleção */}
                        </td>
                    </tr>
                 ))
            }
        </tbody>
        
        </table>
    );
    
}

export default Tabela;