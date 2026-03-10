const prompt = require("prompt-sync")();

function exe1() {
    console.log("Exe 1");
    let pares = [], impares = [];
    for (let i = 0; pares.length < 30 || impares.length < 30; i++) {
        if (i % 2 === 0 && pares.length < 30) pares.push(i);
        else if (i % 2 !== 0 && impares.length < 30) impares.push(i);
    }
    console.log("Pares:", pares.join(", "));
    console.log("Ímpares:", impares.join(", "));
}
exe1();

function exe2() {
    console.log("Exe 2");
    for (let i = 0; i < 10; i++) {
        let num = parseInt(prompt(`Exe 2 - Digite o número ${i + 1}:`));
        console.log(`${num} é ${num % 2 === 0 ? "Par" : "Ímpar"}`);
    }
}
exe2();

function exe3() {
    console.log("Exe 3");
    let soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseFloat(prompt(`Nota do aluno ${i + 1}:`));
    }
    console.log("Média:", soma / 10);
}
exe3();

function exe4() {
    console.log("Exe 4");
    let num = parseInt(prompt("Digite um número para verificar se é primo:"));
    let primo = num > 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) { primo = false; break; }
    }
    console.log(`${num} ${primo ? "é" : "não é"} primo.`);
}
exe4();

function exe5() {
    console.log("Exe 5");
    for (let i = 1; i <= 10000; i++) console.log(i);
}
exe5();

function exe6() {
    console.log("Exe 6");
    let primos = [], num = 2;
    while (primos.length < 10) {
        let ePrimo = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) { ePrimo = false; break; }
        }
        if (ePrimo) primos.push(num);
        num++;
    }
    console.log("10 primeiros primos:", primos.join(", "));
}
exe6();

function exe7() {
    console.log("Exe 7");
    for (let i = 10; i <= 1000; i += 10) console.log(i);
}
exe7();

function exe8() {
    console.log("Exe 8");
    for (let i = 10; i <= 1000; i += 10) console.log("Série 1:", i);
    for (let j = 15; j <= 995; j += 10) console.log("Série 2:", j);
}
exe8();

function exe9() {
    console.log("Exe 9");
    let num;
    do {
        num = parseInt(prompt("Digite um número entre 1 e 100:"));
    } while (num < 1 || num > 100);
    console.log("Número válido:", num);
}
exe9();

function exe10() {
    console.log("Exe 10");
    let num = parseInt(prompt("Digite um número para contar divisores:"));
    let conta = 0;
    for (let i = 1; i <= num; i++) if (num % i === 0) conta++;
    console.log(`O número ${num} tem ${conta} divisores.`);
}
exe10();

function exe11() {
    console.log("Exe 11");
    for (let i = 1; i <= 5; i++) {
        console.log(i.toString().repeat(i));
    }
}
exe11();

function exe12() {
    console.log("Exe 12");
    let n = parseInt(prompt("Introduza um número (ex: 60):"));
    let operacoes = 0;
    for (let i = 1; i < n; i++) {
        console.log(`${n} + ${i} = ${n+i} | ${n} - ${i} = ${n-i} | ${n} * ${i} = ${n*i} | ${n} / ${i} = ${n/i}`);
        operacoes += 4;
    }
    console.log(`Total de operações efetuadas: ${operacoes}`);
}
exe12();

function exe13() {
    console.log("Exe 13");
    let num = parseInt(prompt("Tabuada de qual número?"));
    for (let i = 1; i <= 10; i++) console.log(`${num} x ${i} = ${num * i}`);
}
exe13();

function exe14() {
    console.log("Exe 14");
    for (let i = 1; i <= 100; i++) {
        console.log(`--- Tabuada do ${i} ---`);
        for (let j = 1; j <= 10; j++) console.log(`${i} x ${j} = ${i * j}`);
    }
}
exe14();

function exe15() {
    console.log("Exe 15");
    for (let i = 0; i <= 255; i++) {
        console.log(`Código ${i}: ${String.fromCharCode(i)}`);
        if ((i + 1) % 20 === 0) {
            if (!confirm("Continuar a listar ASCII?")) break;
        }
    }
}
exe15();

function exe16() {
    console.log("Exe 16");
    let soma = 0, conta = 0;
    while (conta < 30) {
        let num = parseInt(prompt(`Digite um número par entre 1 e 50 (${conta + 1}/30):`));
        if (num >= 1 && num <= 50 && num % 2 === 0) {
            soma += num;
            conta++;
        } else {
            alert("Número inválido! Deve ser par entre 1 e 50.");
        }
    }
    console.log("Média dos pares:", soma / 30);
}
exe16();

function exe17() {
    console.log("Exe 17");
    for (let i = 1; i <= 1000; i++) {
        if (i % 5 === 0 && i % 3 !== 0) console.log(i);
    }
}
exe17();

function exe18() {
    console.log("Exe 18");
    let limite = parseInt(prompt("Verificar perfeitos até que número?"));
    let perfeitos = 0;
    for (let i = 1; i <= limite; i++) {
        let soma = 0;
        for (let j = 1; j < i; j++) if (i % j === 0) soma += j;
        if (soma === i) {
            console.log(`${i} é um número perfeito.`);
            perfeitos++;
        }
    }
    console.log(`Total de números perfeitos encontrados: ${perfeitos}`);
}
exe18();

function exe19() {
    console.log("Exe 19 - Série Fibonacci (60 números):");
    let a = BigInt(1), b = BigInt(1);
    console.log("1: 1");
    console.log("2: 1");
    for (let i = 3; i <= 60; i++) {
        let temp = a + b;
        console.log(`${i}: ${temp.toString()}`);
        a = b;
        b = temp;
    }
}
exe19();