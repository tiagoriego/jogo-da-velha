# Jogo da Velha

## Regra do jogo
O "jogo da velha" acontece em um tabuleiro na forma de uma grade 3×3; de 9 de casas vazias; dois jogadores se revezam marcando nas casas vazias, o primeiro jogador marca os xis (X) e o segundo os círculos (o); se um jogador fizer três marcas iguais em uma fileira (horizontal/vertical ou diagonal), ele ganha. Se todas as lacunas forem preenchidas e não houver um vencedor, o jogo termina em empate.

[Quero jogar!](https://tiagoriego.github.io/jogo-da-velha/src/)

![Jogo](/screencast.png)

## Exemplo de Uso da Class JogoDaVelha

```javascript
const jogo = new JogoDaVelha();
const maquina = new JogoDaVelhaMaquina();
jogo.jogar(0);
console.log('jogador', jogo.obterJogador());
console.log('proximo jogador', jogo.obterProximoJogador());
// jogada
jogo.jogar(3);
console.log('jogador', jogo.obterJogador());
jogo.jogar(1);
console.log('jogador', jogo.obterJogador());
jogo.jogar(4);
console.log('jogador', jogo.obterJogador());
jogo.jogar(2); 
console.log('jogador', jogo.obterJogador());
jogo.jogar(5); // será desconsiderado esta jogada
jogo.jogar(7); // será desconsiderado esta jogada

console.log('jogo', jogo.obterJogo());
console.log('rodada', jogo.obterRodada());
console.log('placar', jogo.obterPlacar());
console.log('vencedor', jogo.obterVencedor(), jogo.haVencedor());

jogo.reiniciarJogo();

// jogando com a maquina
jogo.jogar(1);
console.log('jogador', jogo.obterJogador());
console.log('proximo jogador', jogo.obterProximoJogador());
// jogada da maquina
let jogada = maquina.obterJogada(
    jogo.obterJogo(),
    jogo.obterProximoJogador()
);
jogo.jogar(jogada.posicao);
```

## Rodando em ambiente

Instalação do Node [v18.x](https://nodejs.org/dist/v18.18.2/)

Para rodar nossos programas usaremos o `light-server` sendo executado pelo `Node JS`

Sobre o [light-server](https://www.npmjs.com/package/light-server)

## Iniciando

### Instalando os Pacotes

Executar o seguinte comando:

```
yarn install
```

Aguardar a instalação dos pacotes.

### Iniciando o Ambiente

```
yarn start
```

### Build

```
yarn build
```

Publicar o conteúdo do diretório `./dist`

### Browser

Acessar o navegador no endereço configurado no arquivo `package.json`

Endereço padrão:

`http://localhost:8080/`

### Material para consulta:

[developer.mozilla.org](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)
