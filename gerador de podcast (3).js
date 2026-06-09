import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('--- DESAFIO 1: Validação de Senha Temporária ---');
rl.question('Digite a senha para validação: ', (entrada) => {
    const senha = entrada ? entrada.trim() : "";
    const padraoValido = /^[a-z]+[1-9][0-9]*$/;

    if (padraoValido.test(senha)) {
        console.log("Resultado: valida");
    } else {
        console.log("Resultado: invalida");
    }
    rl.close();
});