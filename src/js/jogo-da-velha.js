function JogoDaVelha() {
  const jogador = {
    um: {
      jogador: "x",
      pontuacao: 0,
    },
    dois: {
      jogador: "o",
      pontuacao: 0,
    },
  };
  let jogando = null;
  let rodada = 1;
  let vencedor = null;
  const jogo = [null, null, null, null, null, null, null, null, null];

  // jogada
  function retornaJogada(jogo, jogador) {
    const jogada = [
      jogo[0] == jogador && jogo[1] == jogador && jogo[2] == jogador,
      jogo[3] == jogador && jogo[4] == jogador && jogo[5] == jogador,
      jogo[6] == jogador && jogo[7] == jogador && jogo[8] == jogador,
      jogo[0] == jogador && jogo[4] == jogador && jogo[8] == jogador,
      jogo[2] == jogador && jogo[4] == jogador && jogo[6] == jogador,
      jogo[0] == jogador && jogo[3] == jogador && jogo[6] == jogador,
      jogo[1] == jogador && jogo[4] == jogador && jogo[7] == jogador,
      jogo[2] == jogador && jogo[5] == jogador && jogo[8] == jogador,
    ];
    return jogada;
  }

  this.jogar = function (posicao) {
    // valida a posicao da jogada
    if (posicao < 0 || posicao > jogo.length) return;
    // pega o jogador invertendo conforme a jogada
    jogando = jogando === jogador.um ? jogador.dois : jogador.um;
    // atribui o jogador na posicao
    if (!jogo[posicao]) {
      jogo[posicao] = jogando;
      const jogada = retornaJogada(jogo, jogando);
      // se retornar algum valor verdadeiro quer dizer que houve vitória
      if (jogada.includes(true)) {
        jogando.pontuacao++;
        jogo.forEach((v, i) => {
          jogo[i] = !v ? {} : jogo[i];
        });
        vencedor = Object.assign({}, jogando);
      }
    }
  };

  this.obterJogo = function () {
    return jogo;
  };

  this.obterRodada = function () {
    return rodada;
  };

  this.obterPlacar = function () {
    return {
      ...jogador,
    };
  };

  this.reiniciarJogo = function () {
    jogo.forEach((_, i) => {
      jogo[i] = null;
    });
    vencedor = null;
    rodada++;
  };

  this.obterJogador = function () {
    return jogando;
  };

  this.obterVencedor = function () {
    return vencedor;
  };

  this.haVencedor = function () {
    return vencedor ? true : false;
  };

  this.obterProximoJogador = function () {
    let proximo = this.obterJogador();
    let jogada = proximo
      ? proximo.jogador == "x"
        ? jogador.dois
        : jogador.um
      : jogador.um;
    return jogada;
  };

  return this;
}
