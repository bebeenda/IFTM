package com.funcionario.funcionario.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.junit.jupiter.api.Test;

public class FuncionarioTerceirizadoTeste {

    @Test
    public void testarModificarDespesageraPagamentoAbaixoDoMinimo(){
    String nome = "Brenda";
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
    String nome = "Brenda";
    int horasTrabalhadas = 20;
    double valorHora = 120.0;
    double despesasAdicionais = 1000.00;
    
    FuncionarioTerceirizado ft = new FuncionarioTerceirizado(nome);
    ft.setHorasTrabalhadas(horasTrabalhadas);
    ft.setValorHora(valorHora);
    ft.setDespesasAdicionais(despesasAdicionais);

    String mensagemEsperada = "O salário não pode ser maior que R$ 10.000.00";

    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        () -> ft.calcularSalario()
    );

     String mensagemRecebida = erro.getMessage();

    assertEquals(mensagemEsperada, mensagemRecebida);
}


//-------------------------------------------------------------------------------------------------------------

//---------- testar DESPESA ACIMA
    @Test
    public void testarModificarDespesaAcimadoLimite(){
    // arrange
    String nome = "Brenda";
    int horasTrabalhadas = 6;
    double valorHora = 15.28;
    double despesasAdicionais = 1200;
   
    // act + assert
    FuncionarioTerceirizado ft = new FuncionarioTerceirizado(nome);
        ft.setHorasTrabalhadas(horasTrabalhadas);
        ft.setValorHora(valorHora);

     String mensagemEsperada = "As despesas adicionais não podem ser acima de R$ 1.000,00";
    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        () -> ft.setDespesasAdicionais(despesasAdicionais)
    );

    String mensagemRecebida = erro.getMessage();
    assertEquals(mensagemEsperada, mensagemRecebida);

   }
    
//----- testar DESPESA NEGATIVA 

     @Test
    public void testarModificarDespesaNegativa(){
    // arrange
    String nome = "Brenda";
    FuncionarioTerceirizado ft = new FuncionarioTerceirizado(nome);

    double despesasAdicionais = -1;
    String mensagemEsperada = "As despesas adicionais não podem ser acima de R$ 1000,00";

    // act + assert
    IllegalArgumentException erro = assertThrows(IllegalArgumentException.class,
        () -> ft.setDespesasAdicionais(despesasAdicionais)
    );
    assertEquals(mensagemEsperada, erro.getMessage());

   }
   //-----------------------------------------------------------------------------------------------------------

    @Test
    public void testarModificarDespesaGeraPagementoValido(){
        String nome = "Brenda";
        int horasTrabalhadas = 20;
        double valorHora = 110;
        double despesasAdicionais = 1000.00;

        FuncionarioTerceirizado ft = new FuncionarioTerceirizado(nome);
        ft.setHorasTrabalhadas(horasTrabalhadas);
        ft.setValorHora(valorHora);
        ft.setDespesasAdicionais(despesasAdicionais);
        double resultadoEsperado = 9800.00;

        assertEquals(resultadoEsperado, ft.calcularSalario());

    }
    
}
