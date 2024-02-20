package br.com.api.produtos.controller;

import org.springframework.web.bind.annotation.RestController;

import br.com.api.produtos.modelo.ProdutoModelo;
import br.com.api.produtos.service.ProdutoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;


 
@RestController
@CrossOrigin(origins = "*")//o '*' permite que a API seja acessada por qualquer origem
public class produtoController {
    @Autowired
    private ProdutoService ps;

    @DeleteMapping("/remover/{id}")//rota para remover produtos pelo id(codigo)
    public ResponseEntity<?> remover(@PathVariable long id){
        return ps.remover(id);
    }

    @PostMapping("/cadastrar") //rota para cadastrar produtos
    public ResponseEntity<?> cadastrar(@RequestBody ProdutoModelo pm){//Requestbody puxa o corpo da requisição
        return ps.cadastrarAlterar(pm, "cadastrar");
    }

    @PutMapping("/alterar")//rota para alterar produtos
    public ResponseEntity<?> alterar(@RequestBody ProdutoModelo pm){//Requestbody puxa o corpo da requisição
        return ps.cadastrarAlterar(pm, "alterar");
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
