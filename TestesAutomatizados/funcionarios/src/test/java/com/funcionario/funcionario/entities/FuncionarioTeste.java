package com.funcionario.funcionario.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.Test;

public class FuncionarioTeste {

    
@Test 
public void testarConstrutorComHorasTrabalhadasAbaixoCincoHoras(){
    //arrange
    String nome = "Brenda";
    Funcionario f = new Funcionario(nome);
    double valorHora = 50.00;
    int horasTrabalhadas = 3;
    f.setValorHora(valorHora);
    String mensagemEsperada = "O número de horas trabalhadas por funcionários próprios deve ser um valor entre";
    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        ()-> {f.setHorasTrabalhadas(horasTrabalhadas);}
    );
    
    String mensagemObtida = erro.getMessage();
    assertEquals(mensagemEsperada, mensagemObtida);

}

}


