import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('--- DESAFIO 2: Ordenação Alfabética de Lista de Presença ---');
rl.question('Digite os nomes separados por vírgula (Ex: Lucas,Ana,Pedro): ', (entrada) => {
    if (entrada) {
        let nomes = entrada.split(',');
        let nomesOrdenados = nomes.map(nome => nome.trim()).sort((a, b) => {
            return a.localeCompare(b, undefined, { sensitivity: 'base' });
        });
        
        console.log("Resultado:", nomesOrdenados.join(','));
    } else {
        console.log("Entrada vazia.");
    }
    rl.close();
});