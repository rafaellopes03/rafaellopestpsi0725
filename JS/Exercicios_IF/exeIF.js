const prompt = require("prompt-sync")();

function exe1 () {
    console.log("Exe 1");
    const r1 = prompt("Digite um tempo em segundos: ");

    const horas = Math.floor(r1 / 3600);
    const minutos = Math.floor((r1 % 3600) / 60);
    const segundos = r1 % 60;

    console.log(`${horas} hora, ${minutos} minuto e ${segundos} segundos.`);
}

exe1();

function exe2 () {
    console.log("Exe 2");
    const int1 = prompt("Digite o primeiro número inteiro:");
    const int2 = prompt("Digite o segundo número inteiro:");
    const int3 = prompt("Digite o terceiro número interio:");

    let maior = int1;
    let menor = int2

    if (int2 > maior) maior = int2;
    if (int3 > maior) maior = int3;

    if (int2 < menor) menor = int2;
    if (int3 < menor) menor = int2;

    console.log(`Maior: ${maior}`);
    console.log(`Menor: ${menor}`);
}

exe2();

function exe3 () {
    console.log("Exe 3");
    const num1 = 7;
    const num2 = 2;

    if (num1 > num2) {
        console.log(`Crescente: ${num2}, ${num1}`);
        console.log(`Decrescente: ${num1}, ${num2}`)
    } 
    else if (num2 > num1) {
        console.log(`Crescente: ${num1}, ${num2}`);
        console.log(`Decrescente: ${num2}, ${num1}`)
    } 

}

exe3();

function exe4 () {
    console.log("Exe 4");
    let saldo = Number(prompt("Digite o valor do seu saldo: "));
    const cheque = Number(prompt("Digite qual é o valor do cheque a levantar: "));

    if (cheque > saldo) {
        console.log("Não têm dinheiro suficiente para levantar.");
    } else {
        saldo = saldo - cheque;
        console.log(`Cheque descontado, saldo: ${saldo}`);
    }

}

exe4();

function exe5 () {
console.log("Exe 5");
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    let n3 = Number(prompt("Digite o terceiro número:"));

    let maior, meio, menor;

    if (n1 >= n2 && n1 >= n3) {
        maior = n1;
        if (n2 >= n3) {
            meio = n2;
            menor = n3;
        } else {
            meio = n3;
            menor = n2;
        }
    } else if (n2 >= n1 && n2 >= n3) {
        maior = n2;
        if (n1 >= n3) {
            meio = n1;
            menor = n3;
        } else {
            meio = n3;
            menor = n1;
        }
    } else {
        maior = n3;
        if (n1 >= n2) {
            meio = n1;
            menor = n2;
        } else {
            meio = n2;
            menor = n1;
        }
    }

    console.log(`Crescente: ${menor}, ${meio}, ${maior}`);
    console.log(`Decrescente: ${maior}, ${meio}, ${menor}`);
}

exe5();

function exe6 () {
    console.log("Exe 6");
    const nome = prompt("Digite o seu nome: ");
    const valorCompra = Number(prompt("Digite o valor da compra:"));
    let descontado;

    if (valorCompra <= 200.00) {
        desconto = valorCompra * 0.10;
    } 
    else if (valorCompra > 200 && valorCompra <= 500) {
        desconto = valorCompra * 0.15;
    }
    else {
        desconto = valorCompra * 0.20;
    }
    
    const valorFinal = valorCompra - desconto;

    console.log(`Cliente: ${nome}`)
    console.log(`Compra: ${valorCompra}`);
    console.log(`Desconto: ${desconto}`);
    console.log(`Total a pagar: ${valorFinal}`);
}

exe6();

function exe7 () {
    console.log("Exe 7");
    const nota1 = Number(prompt("Digite a primeira nota: "));
    const nota2 = Number(prompt("Digite a segunda nota: "));
    const nota3 = Number(prompt("Digite a terceira nota: "));

    const media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10;
    let nota;

    if (media >= 6) {
        nota = "APROVADO"
    } 
    else {
        nota = "REPROVADO"
    }

    console.log(`Média: ${media}`);
    console.log(nota);
}

exe7();

function exe8 () {
console.log("Exe 8");
    let notas = [];
    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        let nota = Number(prompt(`Digite a nota do aluno ${i} (0-20):`));
        notas.push(nota);
        soma += nota;
    }

    const media = soma / notas.length;

    let acimaDaMedia = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= media) {
            acimaDaMedia++;
        }
    }

    console.log(`Média da turma: ${media.toFixed(2)}`);
    console.log(`Alunos com nota igual ou superior à média: ${acimaDaMedia}`);
}

exe8();

function exeSwitch () {
    console.log("Exe Switch");
    const opcao = Number(prompt("Escolha um número de 1 a 12: "));

    switch (opcao) {
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro");
            break;
        case 3:
            console.log("Março");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Maio");
            break;
        case 6:
            console.log("Junho");
            break;
        case 7:
            console.log("Julho");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 11:
            console.log("Novembro");
            break;
        case 12:
            console.log("Dezembro");
            break;
        default:
            console.log("ERRO: Digite um valor entre 1 e 12.");
    }
}

exeSwitch();

function exeLoop () {
    console.log("Exe Loop");
    
    let pares = 0;
    let impares = 0;

    for (let i = 1; i <= 10; i++) {
        let num = Number(prompt(`Digite o ${i}º número:`));

        if (num % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log(`Pares: ${pares}`);
    console.log(`Ímpares: ${impares}`);
}

exeLoop();