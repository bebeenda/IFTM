package com.funcionario.funcionario.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.TestPropertySource;

public class FuncionarioTeste {
    
@Test  //verificação das horas abaixo
public void testarConstrutorComHorasTrabalhadasAbaixoHoras(){
    //arrange
    String nome = "Brenda";
    Funcionario f = new Funcionario(nome);
    double valorHora = 50.00;
    int horasTrabalhadas = 3;
    f.setValorHora(valorHora);
    String mensagemEsperada = "O número de horas trabalhadas por funcionários próprios deve ser um valor entre 5 e 40";
    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        ()-> {f.setHorasTrabalhadas(horasTrabalhadas);}
    );
    
    String mensagemObtida = erro.getMessage();
    assertEquals(mensagemEsperada, mensagemObtida);

}

@Test //verificação das horas acima
public void testarConstrutorComHorasTrabalhadasAcimaHoras(){
    //arrange
    String nome = "Brenda";
    Funcionario f = new Funcionario(nome);
    double valorHora = 50.0;
    int horasTrabalhadas = 42;
    f.setValorHora(valorHora);
    String mensagemEsperada = "O número de horas trabalhadas por funcionários próprios deve ser um valor entre 5 e 40";
    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        ()-> {f.setHorasTrabalhadas(horasTrabalhadas);}
    );
    
    String mensagemObtida = erro.getMessage();
    assertEquals(mensagemEsperada, mensagemObtida);
}

@Test //verificação das horas CORRETO
public void testarConstrutorComHorasCorretas(){
     //arrange
       String nome = "Brenda";
        Funcionario f = new Funcionario(nome);
        double valorHora = 250.0;
        int horasTrabalhadas = 30;

        f.setValorHora(valorHora);
        f.setHorasTrabalhadas(horasTrabalhadas);

        // valida se setou corretamente
        assertEquals(30, f.getHorasTrabalhadas());
}
//-------------------------------------------------------------------------------------------------------------
//-- teste VALOR da horas acima
@Test
public void testarConstrutorValorAcimaLimite(){
     //arrange
    String nome = "Brenda";
    Funcionario f = new Funcionario(nome);
    double valorHora = 1500.00;
    int horasTrabalhadas = 40;
    f.setValorHora(valorHora);
    String mensagemEsperada = "O valor de horas trabalhadas por funcionários próprios deve ser um valor entre";
    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        ()-> {f.setHorasTrabalhadas(horasTrabalhadas);}
    );
    
    String mensagemObtida = erro.getMessage();
    assertEquals(mensagemEsperada, mensagemObtida);
}

//teste VALOR da horas abaixo

@Test
public void testarConstrutorValorAbaixoLimite(){
       //arrange
    String nome = "Brenda";
    Funcionario f = new Funcionario(nome);
    double valorHora = 14.00;
    int horasTrabalhadas = 40;
    f.setValorHora(valorHora);
    String mensagemEsperada = "O valor de horas trabalhadas por funcionários próprios deve ser um valor entre";
    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        ()-> {f.setHorasTrabalhadas(horasTrabalhadas);}
    );
    
    String mensagemObtida = erro.getMessage();
    assertEquals(mensagemEsperada, mensagemObtida);
}

// ----- Teste correto DE VALOR E HORAS TRABALHADOS
@Test
public void testarConstrutorValorEHorasCorreto(){
       //arrange
        String nome = "Brenda";
        Funcionario f = new Funcionario(nome);
        double valorHora = 250.00;
        int horasTrabalhadas = 30;

        f.setValorHora(valorHora);
        f.setHorasTrabalhadas(horasTrabalhadas);

        assertEquals(250, f.getValorHora());
        assertEquals(30, f.getHorasTrabalhadas());
}

//----------------------------------------------------------------------------------------------------------------

// -- Teste de calculo de pagamento do salário

//-- Salário acima do teto de 10.0000
@Test
public void validarSalarioFuncionarioAcima(){
    String nome = "Brenda";
    Funcionario f = new Funcionario(nome);
    double valorHora = 100.00;
    int horasTrabalhadas = 160;
    String mensagemEsperada = "O salário não pode ultrapassar R$ 10000.00";

    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        () -> f.calcularSalario()
    );

    assertEquals(mensagemEsperada, erro.getMessage());

}

//-- Salário abaixo do salário minimo
@Test
public void validarSalarioFuncionarioAbaixo(){
    String nome = "Brenda";
    Funcionario f = new Funcionario(nome);
    double valorHora = 20.00;
    int horasTrabalhadas = 20;
    String mensagemEsperada = "O salário não pode ser menor que R$ 1518.00";

    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        () -> f.calcularSalario()
    );

    assertEquals(mensagemEsperada, erro.getMessage());

}

//-- Teste salário correto
@Test
public void validarSalarioFuncionarioCorreto(){
    String nome = "Brenda";
    Funcionario f = new Funcionario(nome);
    double valorHora = 50.00;
    int horasTrabalhadas = 20;
    
    f.setHorasTrabalhadas(horasTrabalhadas);
    f.setValorHora(valorHora);
    double salario = f.calcularSalario();

    assertEquals(2000, salario);
}

}
//------------------------------------------------------------------------------------------------------------------



