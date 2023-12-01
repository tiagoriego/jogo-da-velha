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
  let posicaoJogadaVencedor = null;
  const jogo = [null, null, null, null, null, null, null, null, null];

  // jogada
  function retornaJogada(jogo, jogador) {
    const jogada = [
      { jogo: jogo[0] == jogador && jogo[1] == jogador && jogo[2] == jogador, posicao: [0, 1, 2] },
      { jogo: jogo[3] == jogador && jogo[4] == jogador && jogo[5] == jogador, posicao: [3, 4, 5] },
      { jogo: jogo[6] == jogador && jogo[7] == jogador && jogo[8] == jogador, posicao: [6, 7, 8] },
      { jogo: jogo[0] == jogador && jogo[4] == jogador && jogo[8] == jogador, posicao: [0, 4, 8] },
      { jogo: jogo[2] == jogador && jogo[4] == jogador && jogo[6] == jogador, posicao: [2, 4, 6] },
      { jogo: jogo[0] == jogador && jogo[3] == jogador && jogo[6] == jogador, posicao: [0, 3, 6] },
      { jogo: jogo[1] == jogador && jogo[4] == jogador && jogo[7] == jogador, posicao: [1, 4, 7] },
      { jogo: jogo[2] == jogador && jogo[5] == jogador && jogo[8] == jogador, posicao: [2, 5, 8] },
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
      if (jogada.map(item => item.jogo).includes(true)) {
        jogando.pontuacao++;
        jogo.forEach((v, i) => {
          jogo[i] = !v ? {} : jogo[i];
        });
        vencedor = Object.assign({}, jogando);
        posicaoJogadaVencedor = jogada.filter(j => j.jogo == true)[0].posicao;
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
    posicaoJogadaVencedor = null;
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

  this.obterPosicaoJogadaVencedor = function() {
    return posicaoJogadaVencedor;
  }

  return this;
}
