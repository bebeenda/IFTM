
package com.funcionario.funcionario.entities;

public class Funcionario {

    private String nome;
    private int horasTrabalhadas;
    private double valorHora;

    public Funcionario(String nome) {
        this.nome = nome;
    }

    //Horas trabalhadas
    public void setHorasTrabalhadas(int horasTrabalhadas) {
        if (horasTrabalhadas > 40 || horasTrabalhadas < 5) {
            throw new IllegalArgumentException(
                "O número de horas trabalhadas por funcionários próprios deve ser no mínimo 5 horas e no máximo 40 horas"
            );
            
        }
         this.horasTrabalhadas = horasTrabalhadas;
    }

    //Valor horas trabalhadas
    public void setValorHora (double valorHora){
        if (valorHora < 15.18 || valorHora > 1000.00) {
            throw new IllegalArgumentException(
                "O valor em reais por horas trabalhadas deve ser um valor entre R$ 15,28 e R$1000,00");
        }
          this.valorHora = valorHora;
    }

      
    //calculo de salário
    public double calcularSalario() {
        double salario = ((horasTrabalhadas * 4) * valorHora);

        if (salario > 10000.00) {
            throw new IllegalArgumentException(
                "O valor do salário não pode ultrapassar R$ 10000.00"
            );
        }

        else if (salario < 1518.00) {
            throw new IllegalArgumentException(
                "O valor salário não pode ser menor que R$ 1518.00"
            );
        }

        return salario;
    }
}