package br.com.api.produtos.controller;

import org.springframework.web.bind.annotation.RestController;

import br.com.api.produtos.modelo.ProdutoModelo;
import br.com.api.produtos.service.ProdutoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;





//Cria as rotas e requisicoes como GET, POST, PUT, DELETE
@RestController
public class produtoController {
    @Autowired
    private ProdutoService ps;

    @GetMapping("/listar")
    public Iterable<ProdutoModelo>listar(){
        return ps.listar();
    }
    

    @GetMapping("/")
    public String route(){
        return "API de produtos funcionando!";
    }
    
}
