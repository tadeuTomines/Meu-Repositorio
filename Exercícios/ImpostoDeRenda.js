let salarioBruto = 20000;
let inss;
let ir;

if (salarioBruto<= 1556.94){
    inss = 0.08*salarioBruto;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    inss = 0.09*salarioBruto;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    inss = 0.11*salarioBruto;
} else {
    inss = 570.88 
}
let salarioBase = salarioBruto - inss;

    //console.log(`O meu INSS está na faixa de ${inss} reais.`);

if (salarioBase<= 1903.98){
    ir = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65){
    ir = salarioBase*0.075 - 142.80;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05){
    ir = salarioBase*0.15 - 354.8;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68){
    ir = salarioBase*0.225 - 636.13;
} else {
    ir = 0.275*salarioBase - 869.36;
}

let salarioLiquido = salarioBruto -inss - ir;

console.log(`O meu INSS está na faixa de ${inss} reais e o meu Imposto de Renda está no valor de ${ir} reais. Portanto meu salário liquído é de ${salarioLiquido} reais.`)