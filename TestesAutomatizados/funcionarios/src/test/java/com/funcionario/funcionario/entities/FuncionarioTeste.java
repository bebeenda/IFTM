package com.funcionario.funcionario.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.Test;

public class FuncionarioTeste {
    
@Test  //verificação das horas abaixo
public void testarConstrutorComHorasTrabalhadasAbaixoHoras(){
    //arrange
    String nome = "Brenda";
    int horasTrabalhadas = 3;
    double valorHora = 100.00;
    
    Funcionario f = new Funcionario(nome);
    f.setValorHora(valorHora);

    String mensagemEsperada = "O número de horas trabalhadas por funcionários próprios deve ser um valor entre 5 e 40";
    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        ()-> {f.setHorasTrabalhadas(horasTrabalhadas);}
    );
    
    String mensagemObtida = erro.getMessage();
    assertEquals(mensagemObtida, mensagemEsperada);

}

@Test //verificação das horas acima
public void testarConstrutorComHorasTrabalhadasAcimaHoras(){
    //arrange
    String nome = "Brenda";
    int horasTrabalhadas = 42;
    double valorHora = 100.0;

    Funcionario f = new Funcionario(nome);
    f.setValorHora(valorHora);

    String mensagemEsperada = "O número de horas trabalhadas por funcionários próprios deve ser um valor entre 5 e 40";
    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        ()-> {f.setHorasTrabalhadas(horasTrabalhadas);}
    );
    
    String mensagemObtida = erro.getMessage();
    assertEquals(mensagemObtida, mensagemEsperada);
}

@Test //verificação das horas CORRETO
public void testarConstrutorComHorasCorretas(){
     //arrange
       String nome = "Brenda";
       int horasTrabalhadas = 20;
       double valorHora = 100.0;

        Funcionario f = new Funcionario(nome);
        f.setValorHora(valorHora);
        f.setHorasTrabalhadas(horasTrabalhadas);
        double valorEsperadoResultado = 8000.00 ;
        // valida se setou corretamente
        assertEquals(valorEsperadoResultado, f.calcularSalario());
}
//-------------------------------------------------------------------------------------------------------------
//-- teste VALOR da horas acima
@Test
public void testarConstrutorValorAcimaLimite(){
     //arrange
    String nome = "Brenda";
    int horasTrabalhadas = 5;
    double valorHora = 1500.00;
  

    Funcionario f = new Funcionario(nome);
    

    String mensagemEsperada = "O valor de horas trabalhadas por funcionários próprios deve ser um valor entre";
    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        ()-> {f.setValorHora(valorHora);
            
        });
    
    String mensagemObtida = erro.getMessage();
    assertEquals(mensagemObtida, mensagemEsperada);
}

//teste VALOR da horas abaixo

@Test
public void testarConstrutorValorAbaixoLimite(){
       //arrange
    String nome = "Brenda";
    int horasTrabalhadas = 5;
    double valorHora = 14.00;
   

    Funcionario f = new Funcionario(nome);
    
    String mensagemEsperada = "O valor de horas trabalhadas por funcionários próprios deve ser um valor entre";
    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        ()-> {f.setValorHora(valorHora);

        });
    
    String mensagemObtida = erro.getMessage();
    assertEquals(mensagemObtida, mensagemEsperada);
}

// ----- Teste correto DE VALOR E HORAS TRABALHADOS
@Test
public void testarConstrutorValorEHorasCorreto(){
       //arrange
        String nome = "Brenda";
        int horasTrabalhadas = 10;
        double valorHora = 100.00;
       
        Funcionario f = new Funcionario(nome);
        f.setValorHora(valorHora);
        f.setHorasTrabalhadas(horasTrabalhadas);
        double valorEsperadoResultado = 4000.00;

        assertEquals(valorEsperadoResultado, f.calcularSalario(), 0.01);
        
}

//----------------------------------------------------------------------------------------------------------------

// -- Teste de calculo de pagamento do salário

//-- Salário acima do teto de 10.0000
@Test
public void validarSalarioFuncionarioAcima(){
    String nome = "Brenda";
    int horasTrabalhadas = 39;
    double valorHora = 1000.00;
    
    Funcionario f = new Funcionario(nome);
    f.setHorasTrabalhadas(horasTrabalhadas);
    f.setValorHora(valorHora);
    String mensagemEsperada = "O salário não pode ultrapassar R$ 10.000.00";

    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        () -> f.calcularSalario()
    );

    String mensagemRecebida = erro.getMessage();

    assertEquals(mensagemEsperada, mensagemRecebida);

}

//-- Salário abaixo do salário minimo
@Test
public void validarSalarioFuncionarioAbaixo(){
    String nome = "Brenda";
    int horasTrabalhadas = 6;
    double valorHora = 15.28;
   

    Funcionario f = new Funcionario(nome);
    f.setHorasTrabalhadas(horasTrabalhadas);
    f.setValorHora(valorHora);
    String mensagemEsperada = "O salário não pode ser menor que R$ 1518.00";

    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        () -> f.calcularSalario()
    );

    String mensagemRecebida = erro.getMessage();

    assertEquals(mensagemEsperada, mensagemRecebida);

}

//-- Teste salário correto
@Test
public void validarSalarioFuncionarioCorreto(){
    String nome = "Brenda";
    int horasTrabalhadas = 10;
    double valorHora = 100.00;
  

    Funcionario f = new Funcionario(nome);
    f.setHorasTrabalhadas(horasTrabalhadas);
    f.setValorHora(valorHora);
    double valorEsperadoParaOResultado = 4000;

    double salario = f.calcularSalario();

    assertEquals(valorEsperadoParaOResultado, f.calcularSalario());
}

}
//------------------------------------------------------------------------------------------------------------------



