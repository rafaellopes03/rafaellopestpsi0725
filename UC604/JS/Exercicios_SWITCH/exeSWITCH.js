const prompt = require("prompt-sync")();

function exe1 () {
    console.log("Exe 1");
    const r1 = prompt("Digite um dia da semana (em minusculas): ")

    if (r1 === "sabado" || r1 === "domingo") {
        console.log("Fim de semana");
    } else {
        console.log("Dia útil");
    }
}
exe1();

function exe2 () {
    let nota = Number(prompt("Insira a nota (0–100): "));
    
    if (nota >= 90) {
        console.log("Excelente");
    } else if (nota >= 70) {
        console.log("Bom");
    } else if (nota >= 50) {
        console.log("Suficiente");
    } else {
        console.log("Insuficiente");
    }
}
exe2();

function exe3 () {
    console.log("Exe 3");

    let pedido = {
        tipo: prompt("Insira o tipo (compra/venda): "),
        valor: prompt("Insira o valor: ")
    };

    if (pedido.tipo === "compra") {
        console.log("Compra de " + pedido.valor + "€");
    } else if (pedido.tipo === "venda") {
        console.log("Venda de " + pedido.valor + "€");
    } else {
        console.log("Pedido desconhecido");
    }

}
exe3();

function exe4 () {
    console.log("Exe 4");
    let r4 = prompt("Insira um valor: ");

    if (!isNaN(r4) && r4.trim() !== "") {
        let num = Number(r4);
        if (Number.isInteger(num)) {
            console.log("Número inteiro");
        } else {
            console.log("Número decimal");
        }
    } else {
        try {
            let avaliado = JSON.parse(r4);
            if (Array.isArray(avaliado)) {
                console.log("Lista");
            } else {
                console.log("String textual");
            }
        } catch (e) {
            if (r4.match(/^[0-9]+$/) || r4.match(/^[0-9]+\.[0-9]+$/)) {
                console.log("String numérica");
            } else {
                console.log("String textual");
            }
        }
    }
}
exe4();

function exe5 () {
    console.log("Exe 5");

    const mensagem = prompt("Insira uma mensagem: ").toLowerCase();

    if (mensagem === "olá" || mensagem === "bom dia") {
        console.log("Saudação");
    } else if (mensagem.endsWith("?")) {
        console.log("Pergunta");
    } else if (mensagem.includes("tchau") || mensagem.includes("adeus")) {
        console.log("Despedida");
    } else {
        console.log("Mensagem genérica");
    }
}
exe5();

function exe6 () {
    console.log("Exe 6");

    const servidor = {
        status: prompt("Insira o status (ok/erro): "),
        tempo_resposta: Number(prompt("Insira o tempo de resposta (ms): "))
    };

    if (servidor.status === "ok" && servidor.tempo_resposta > 200) {
        console.log("Servidor lento");
    } else if (servidor.status === "ok") {
        console.log("Servidor ativo");
    } else if (servidor.status === "erro") {
        console.log("Servidor indisponível");
    } else {
        console.log("Estado desconhecido");
    }
}
exe6();

function exe7 () {
    console.log("Exe 7");

    const produto = {
        categoria: prompt("Insira a categoria (eletronico ou alimento): ").toLowerCase(),
        preco: Number(prompt("Insira o preço: "))
    };

    if (produto.categoria === "eletronico" && produto.preco > 1000) {
        console.log("Produto de luxo");
    } else if (produto.categoria === "eletronico" && produto.preco <= 1000) {
        console.log("Produto comum");
    } else if (produto.categoria === "alimento") {
        console.log("Produto alimentar");
    } else {
        console.log("Categoria desconhecida");
    }
}
exe7();

function exe8 () {
    console.log("Exe 8");
    
    const operacao = prompt("Escolha a operação (soma, subtrai, multiplica, divide): ").toLowerCase();
    const num1 = Number(prompt("Número 1: "));
    const num2 = Number(prompt("Número 2: "));

    if (operacao === "soma") {
        console.log("Resultado: " + (num1 + num2));
    } else if (operacao === "subtrai") {
        console.log("Resultado: " + (num1 - num2));
    } else if (operacao === "multiplica") {
        console.log("Resultado: " + (num1 * num2));
    } else if (operacao === "divide") {
        if (num2 !== 0) {
            console.log("Resultado: " + (num1 / num2));
        } else {
            console.log("Erro: Divisão por zero");
        }
    } else {
        console.log("Operação inválida");
    }
}
exe8();

function exe9 () {
    console.log("Exe 9");

    const requisicao = {
        metodo: prompt("Insira o método (GET/POST): ").toUpperCase(),
        conteudo: prompt("Insira o conteúdo: ")
    };

    if (requisicao.metodo === "GET") {
        console.log("Requisição GET recebida");
    } else if (requisicao.metodo === "POST") {
        if (requisicao.conteudo.trim() !== "") {
            console.log("Requisição POST com dados válidos");
        } else {
            console.log("Requisição POST sem dados");
        }
    } else {
        console.log("Método não suportado");
    }
}
exe9();

function exe10 () {
    console.log("Exe 10");

    const j1 = prompt("Jogador 1 (pedra, papel ou tesoura): ").toLowerCase();
    const j2 = prompt("Jogador 2 (pedra, papel ou tesoura): ").toLowerCase();

    if (j1 === j2) {
        console.log("Empate");
    } else if (
        (j1 === "pedra" && j2 === "tesoura") ||
        (j1 === "tesoura" && j2 === "papel") ||
        (j1 === "papel" && j2 === "pedra")
    ) {
        console.log("Jogador 1 ganha!");
    } else if (
        (j2 === "pedra" && j1 === "tesoura") ||
        (j2 === "tesoura" && j1 === "papel") ||
        (j2 === "papel" && j1 === "pedra")
    ) {
        console.log("Jogador 2 ganha!");
    } else {
        console.log("Jogada inválida");
    }
}
exe10();