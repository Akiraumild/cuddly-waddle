import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('--- DESAFIO 3: Filtrando Cursos Disponíveis ---');
console.log('Exemplo de entrada: [{"nome":"Logica","disponivel":true},{"nome":"APIs","disponivel":false}]');

rl.question('Cole a string JSON do Array de cursos: ', (entrada) => {
    try {
        const cursos = JSON.parse(entrada);
        const cursosDisponiveis = cursos.filter(curso => curso.disponivel === true);

        if (cursosDisponiveis.length === 0) {
            console.log("Resultado: Nenhum curso disponivel");
        } else {
            const nomesCursos = cursosDisponiveis.map(curso => curso.nome);
            console.log("Resultado:", nomesCursos.join(', '));
        }
    } catch (erro) {
        console.log("Erro: Formato JSON inválido.");
    }
    rl.close();
});