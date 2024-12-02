# Quiz Interativo

Este é um **quiz interativo de conhecimento geral** com perguntas e respostas que armazenam o nome do jogador, os acertos e um ranking global de todos os jogadores que participaram. O jogo é simples, e o objetivo é acertar o maior número de perguntas. 

## Funcionalidade

O jogo possui as seguintes funcionalidades:
1. **Tela de Início**: O jogador insere o nome antes de começar o quiz.
2. **Perguntas e Respostas**: O jogador responde às perguntas do quiz, e o jogo avalia se a resposta está correta.
3. **Armazenamento de Resultados**: A cada resposta, o jogo armazena os acertos no `localStorage` do navegador.
4. **Ranking Global**: Após terminar o quiz, o ranking é exibido com os jogadores e o número de acertos.
5. **Reiniciar Quiz**: O jogador pode reiniciar o quiz, e o nome e o ranking são preservados. Apenas o número de acertos é reiniciado.

## Estrutura do Projeto

O projeto é composto por várias páginas HTML e arquivos JavaScript que trabalham juntos para criar a experiência do quiz.

### Páginas

- **`inicio.html`**: Página inicial onde o jogador insere seu nome e começa o quiz.
- **`pergunta1.html`**: Primeira pergunta do quiz com opções de resposta.
- **`pergunta2.html`**: Segunda pergunta do quiz.
- **`pergunta3.html`**: Terceira pergunta do quiz.
- **`resultado.html`**: Página final onde o jogador vê o número de acertos e o ranking de todos os jogadores.

### Arquivos JavaScript

- **`01.js`**: Responsável pela lógica de validação da primeira pergunta e armazenamento dos acertos.
- **`02.js`**: Responsável pela lógica de validação da segunda pergunta e armazenamento dos acertos.
- **`03.js`**: Responsável pela lógica de validação da terceira pergunta e armazenamento dos acertos.

### Arquivo CSS

- **`style.css`**: Estilos básicos do jogo.

## Como Jogar

1. **Início**: O jogador deve digitar seu nome na tela inicial e clicar em "Iniciar Quiz".
2. **Respostas**: Durante o quiz, o jogador deve escolher uma das opções de resposta para cada pergunta.
3. **Resultado**: Após todas as perguntas, o jogo exibirá o número de acertos do jogador e o ranking de todos os jogadores.
4. **Reiniciar**: O jogador pode reiniciar o quiz, mas seus acertos e ranking serão atualizados na próxima vez que jogar.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilos para o layout do quiz.
- **JavaScript**: Lógica do jogo, incluindo validação das respostas e armazenamento no `localStorage`.

## Como Executar o Jogo

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/quiz-interativo.git
