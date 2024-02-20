package br.com.api.produtos.modelo;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

//sera usada para problemas
@Component //indica que a classe é um componente do Spring e pode ser injetada em outras classes 
@Getter
@Setter
public class RespostaModelo {
    private String mensagem;
}
