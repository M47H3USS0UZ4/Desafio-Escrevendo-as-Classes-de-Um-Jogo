# ⚔️ Classes de um Jogo - Simulador de Batalha

Desafio de projeto do **Bootcamp da DIO**. O objetivo inicial era criar uma classe de Herói, mas o projeto foi evoluído para um **Simulador de Batalha PvP (Player vs Player)** com sistema de turnos e aleatoriedade.

> 🚀 **Status:** Concluído (Com sistema de RNG e Defesa)

## 💻 Sobre o Projeto

Este código utiliza o conceito de **Orientação a Objetos (POO)** para criar heróis de diferentes classes (Guerreiro, Mago, Monge, Ninja). Além do requisito básico de ataque, foi implementado um sistema que:

1.  **Simula uma Batalha:** Dois heróis se enfrentam em rodadas alternadas.
2.  **Ações Variadas:** Cada classe possui um "banco de dados" de ataques e defesas específicas.
3.  **Fator Aleatório (RNG):** O herói nunca repete o mesmo movimento de forma previsível; ele sorteia uma ação da sua lista.

## ⚙️ Funcionalidades

- **Classes e Objetos:** Estrutura moldável para criar qualquer herói.
- **Métodos Inteligentes:**
    - `atacar()`: Sorteia um ataque temático.
    - `defender()`: Sorteia uma defesa temática.
- **Game Loop:** Um laço de repetição que gerencia os turnos da batalha.

## 🛠 Tecnologias

- **JavaScript** (Node.js)

## 🚀 Como Rodar

1. Clone este repositório.
2. Navegue até a pasta do projeto.
3. Execute no terminal:
```bash
node index.js

// Exemplo da lógica de sorteio
sortearAcao(acao) {
    const opcoes = this.obterListaDeAcoes(acao);
    const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
    return opcoes[indiceAleatorio];
}