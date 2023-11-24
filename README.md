# Jogo da Velha

## HTML CSS e JavaScript

![Jogo](/screencast.png)

## Exemplo de Uso da Class JogoDaVelha

```javascript
const jogo = new JogoDaVelha();
jogo.jogar(0);
console.log('jogador', jogo.obterJogador());
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

### Browser

Acessar o navegador no endereço configurado no arquivo `package.json`

Endereço padrão:

`http://localhost:8080/`

### Material para consulta:

[developer.mozilla.org](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)
