package com.funcionario.funcionario.entities;

public class FuncionarioTerceirizado extends Funcionario{
    
    private double despesasAdicionais;

    public FuncionarioTerceirizado(String nome) {
        super(nome);
    }

    public void setDespesasAdicionais(double despesasAdicionais) {
        if (despesasAdicionais>1000.00 || despesasAdicionais<0.0) {
            throw new IllegalArgumentException("O valor das despesas tem que ser abaixo de R$1.000,00");
        }
        this.despesasAdicionais = despesasAdicionais;
    }

    @Override
    public double calcularSalario() {
        double salario = super.calcularSalario()+despesasAdicionais;
        if (salario > 10000.00) {
            throw new IllegalArgumentException("O valor do salario esta à cima do salario maximo de R$10.000,00");
        }else if(salario <1518.00){
            throw new IllegalArgumentException("O valor do salario esta abaixo do salario minimo de R$1.518,00");
        }
        return salario;
    }
}
