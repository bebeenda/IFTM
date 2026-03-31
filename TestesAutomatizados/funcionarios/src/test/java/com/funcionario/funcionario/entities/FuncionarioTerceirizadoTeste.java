package com.funcionario.funcionario.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.TestPropertySource;

public class FuncionarioTerceirizadoTeste {

    @Test
    public void testarModificarDespesageraPagamentoAbaixoDoMinimo(){
    String nome = "Kiwi";
    FuncionarioTerceirizado f = new FuncionarioTerceirizado(nome);
    double valorHora = 20.0;
    int horasTrabalhadas = 20;
    double despesasAdicionais = 100;

    f.setHorasTrabalhadas(horasTrabalhadas);
    f.setValorHora(valorHora);
    f.setDespesasAdicionais(despesasAdicionais);

    String mensagemEsperada = "O salário não pode ser menor que R$ 1518.00";

    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        () -> f.calcularSalario()
    );

    assertEquals(mensagemEsperada, erro.getMessage());
}


//--- Salário acima de 10.0000

@Test
    public void testarModificarDespesageraPagamentoAcimaDoMinimo(){
    String nome = "Kiwi";
    FuncionarioTerceirizado f = new FuncionarioTerceirizado(nome);
    double valorHora = 160.0;
    int horasTrabalhadas = 151;
    double despesasAdicionais = 1000;
    
    f.setHorasTrabalhadas(horasTrabalhadas);
    f.setValorHora(valorHora);
    f.setDespesasAdicionais(despesasAdicionais);

    String mensagemEsperada = "O salário não pode ser maior que R$ 10.000.00";

    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        () -> f.calcularSalario()
    );

    assertEquals(mensagemEsperada, erro.getMessage());
}

//------ Salário CORRETO

@Test
    public void testarModificarDespesageraPagamentoAcimaDoMinimo(){
    String nome = "Kiwi";
    FuncionarioTerceirizado f = new FuncionarioTerceirizado(nome);
    double valorHora = 20;
    int horasTrabalhadas = 110;
    double despesasAdicionais = 500;
    
    f.setHorasTrabalhadas(horasTrabalhadas);
    f.setValorHora(valorHora);
    f.setDespesasAdicionais(despesasAdicionais);

    String mensagemEsperada = "O salário não pode ser maior que R$ 10.000.00";

    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        () -> f.calcularSalario()
    );

    assertEquals(mensagemEsperada, erro.getMessage());
}
   
//-------------------------------------------------------------------------------------------------------------

//---------- testar DESPESA ACIMA
    @Test
    public void testarModificarDespesaAcimadoLimite(){
    // arrange
    String nome = "Brenda";
    FuncionarioTerceirizado f = new FuncionarioTerceirizado(nome);

    double despesasAdicionais = 1200;
    String mensagemEsperada = "As despesas adicionais não podem ser acima de R$ 1000,00";

    // act + assert
    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        () -> f.setDespesasAdicionais(despesasAdicionais)
    );
    assertEquals(mensagemEsperada, erro.getMessage());

   }
    
//----- testar DESPESA NEGATIVA 

     @Test
    public void testarModificarDespesaNegativa(){
    // arrange
    String nome = "Brenda";
    FuncionarioTerceirizado f = new FuncionarioTerceirizado(nome);

    double despesasAdicionais = -1;
    String mensagemEsperada = "As despesas adicionais não podem ser acima de R$ 1000,00";

    // act + assert
    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        () -> f.setDespesasAdicionais(despesasAdicionais)
    );
    assertEquals(mensagemEsperada, erro.getMessage());

   }
   //-----------------------------------------------------------------------------------------------------------

    @Test
    public void testarModificarDespesaGeraPagementoValido(){

    }
}
