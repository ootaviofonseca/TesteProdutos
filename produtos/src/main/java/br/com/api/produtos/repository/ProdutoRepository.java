package br.com.api.produtos.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.produtos.modelo.ProdutoModelo;

@Repository//indica que a classe é um repositório
public interface ProdutoRepository extends CrudRepository< ProdutoModelo, Long >{

    
}
