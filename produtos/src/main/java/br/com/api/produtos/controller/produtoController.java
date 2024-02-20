package br.com.api.produtos.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;



//Cria as rotas e requisicoes como GET, POST, PUT, DELETE
@RestController
public class produtoController {
    @GetMapping("/")
    public String route(){
        return "API de produtos funcionando!";
    }
    
}
