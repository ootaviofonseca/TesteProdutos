package br.com.api.produtos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.produtos.modelo.ProdutoModelo;
import br.com.api.produtos.repository.ProdutoRepository;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository pr;//injeção de dependência do repositório ProdutoRepository

    //Metodo para listar produtos
    public Iterable<ProdutoModelo> listar() {
        return pr.findAll();//retorna todos os produtos
    }
}
