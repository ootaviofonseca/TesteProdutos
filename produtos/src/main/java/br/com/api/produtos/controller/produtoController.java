package br.com.api.produtos.controller;

import org.springframework.web.bind.annotation.RestController;

import br.com.api.produtos.modelo.ProdutoModelo;
import br.com.api.produtos.service.ProdutoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;






//Cria as rotas e requisicoes como GET, POST, PUT, DELETE
@RestController
public class produtoController {
    @Autowired
    private ProdutoService ps;

    @PostMapping("/cadastrar") //rota para cadastrar produtos
    public ResponseEntity<?> cadastrar(@RequestBody ProdutoModelo pm){//Requestbody puxa o corpo da requisição
        return ps.cadastrar(pm);
    }


    @GetMapping("/listar")
    public Iterable<ProdutoModelo>listar(){
        return ps.listar();
    }
    

    @GetMapping("/")
    public String route(){
        return "API de produtos funcionando!";
    }
    
}
