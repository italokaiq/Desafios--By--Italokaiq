let nome = "";
let idade = 0;
let estarAcompanhado = "";

while (true) {
    nome = prompt('Digite seu nome e sobrenome: ');

    if (nome.length < 5) {
        alert('Por favor, digite um nome com pelo menos 5 caracteres.');
    } else {
        while (true) {
            idade = parseInt(prompt('Digite sua idade: '));

            if (isNaN(idade)) {
                alert("Por favor, digite um número inteiro para a idade.");
            } else {
                if (idade < 18) {
                    alert(`Entrada não está permitida para ${nome}: Menor de idade! (${idade} anos!)`);
                    // Interrompe a execução do programa
                    throw new Error("Menor de idade");
                }
                break;
            }
        }

        estarAcompanhado = prompt('Você está acompanhado: (S) ou (N)?').toLowerCase();

        if (idade >= 18) {
            if (estarAcompanhado === 's') {
                console.log(`Entrada permitida para ${nome}: Conceder desconto`);
            } else if (estarAcompanhado === 'n') {
                console.log(`Entrada permitida para ${nome}: Valor integral.`);
            }
        }
        break;
    }
}