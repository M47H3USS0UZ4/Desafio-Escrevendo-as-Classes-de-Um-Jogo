class Heroi {
    // Construtor: define as propriedades iniciais do herói
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Executa o ataque sorteado e exibe no console
    atacar() {
        let ataqueSorteado = this.sortearAcao('ataque');
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataqueSorteado} !`);
    }

    // Executa a defesa sorteada e exibe no console
    defender() {
        let defesaSorteada = this.sortearAcao('defesa');
        console.log(`O ${this.tipo} ${this.nome} se defendeu com ${defesaSorteada} !`);
    }

    // Lógica para sortear uma ação aleatória da lista
    sortearAcao(acao) {
        const opcoes = this.obterListaDeAcoes(acao);
        // Gera um índice aleatório baseado no tamanho do array (length)
        const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
        return opcoes[indiceAleatorio];
    }

    // Retorna a lista de golpes disponíveis baseada na classe do herói
    obterListaDeAcoes(acao) {
        // Normaliza para minúsculo para garantir a comparação correta
        const tipoHeroi = this.tipo.toLowerCase();

        if (acao === 'ataque') {
            switch (tipoHeroi) {
                case 'mago': return ['Bola de Fogo', 'Raio de Gelo', 'Trovão', 'Meteoro'];
                case 'guerreiro': return ['Espadada Frontal', 'Corte Giratório', 'Estocada', 'Chute Espartano'];
                case 'monge': return ['Punho do Dragão', 'Voadora', 'Palma de Buda', 'Sequence de Socos'];
                case 'ninja': return ['Shuriken', 'Kunai Explosiva', 'Corte das Sombras', 'Arremesso de Foice'];
                default: return ['Soco Básico'];
            }
        } else { // Lista de Defesas
            switch (tipoHeroi) {
                case 'mago': return ['Barreira Arcana', 'Teleporte', 'Campo de Força'];
                case 'guerreiro': return ['Escudo Grande', 'Armadura de Aço', 'Aparar com a Espada'];
                case 'monge': return ['Meditação', 'Esquiva Rápida', 'Desvio de Fluxo'];
                case 'ninja': return ['Substituição (Tronco)', 'Bomba de Fumaça', 'Pulo nas Sombras'];
                default: return ['Correu'];
            }
        }
    }
}

// Configuração dos jogadores
const jogadores = [
    new Heroi("Miyag Sam", 50, "Ninja"),
    new Heroi("Saruman", 2000, "Mago")
];

const totalRodadas = 4; 

console.log("INICIANDO O COMBATE !\n");

// Laço de repetição que controla as rodadas
for (let i = 0; i < totalRodadas; i++) {
    // Alterna entre atacante e defensor usando o resto da divisão (%)
    let atacante = jogadores[i % jogadores.length];
    let defensor = jogadores[(i + 1) % jogadores.length];

    console.log(`--- RODADA ${i + 1} ---`);
    atacante.atacar();
    defensor.defender();
    console.log(""); 
}