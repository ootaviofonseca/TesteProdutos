package br.com.api.produtos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.produtos.modelo.ProdutoModelo;
import br.com.api.produtos.modelo.RespostaModelo;
import br.com.api.produtos.repository.ProdutoRepository;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository pr;//injeção de dependência do repositório ProdutoRepository

    @Autowired
    private RespostaModelo rm;//injeção de dependência da classe RespostaModelo para retornar mensagens de erro ou sucesso


    //Metodo para listar produtos
    public Iterable<ProdutoModelo> listar() {
        return pr.findAll();//retorna todos os produtos
    }

    //Metodo de cadastrar produtos
        public ResponseEntity <?> cadastrar(ProdutoModelo pm){

            if (pm.getNome().equals("")){
                rm.setMensagem("Nome do produto não pode ser vazio");
                return new ResponseEntity<RespostaModelo>(rm,HttpStatus.BAD_REQUEST);
            }else if(pm.getMarca().equals("")){
                rm.setMensagem("Marca do produto não pode ser vazia");
                return new ResponseEntity<RespostaModelo>(rm,HttpStatus.BAD_REQUEST);
            }else{
                return new ResponseEntity<ProdutoModelo>(pr.save(pm),HttpStatus.CREATED);

            }
        }
    
} 