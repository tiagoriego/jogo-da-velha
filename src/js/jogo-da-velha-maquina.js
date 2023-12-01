function JogoDaVelhaMaquina() {
  const jogada = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 2, 0],
    [4, 5, 3],
    [7, 8, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 0],
    [4, 7, 1],
    [5, 8, 2],
    [0, 2, 1],
    [3, 5, 4],
    [6, 8, 7],
    [0, 6, 3],
    [1, 7, 4],
    [2, 8, 5],
    [0, 8, 4],
    [2, 6, 4],
    [4, 8, 0],
    [4, 6, 2],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function rdn(n) {
    return Math.floor(Math.random() * n);
  }

  this.obterJogada = function (
    jogo = [],
    jogador = { jogador: "o", pontuacao: 0 }
  ) {
    let posicao = null;

    for (let i = 0; i < jogada.length; i++) {
      const p = [jogo[jogada[i][0]], jogo[jogada[i][1]], jogo[jogada[i][2]]];
      const pj = jogada[i][2];

      if (p[0] && p[1]) {
        if (
          p[0].jogador != jogador.jogador &&
          p[1].jogador != jogador.jogador
        ) {
          if (p[2]) continue;
          posicao = pj;
          break;
        }
      }
    }

    for (let i = 0; i < jogada.length; i++) {
      const p = [jogo[jogada[i][0]], jogo[jogada[i][1]], jogo[jogada[i][2]]];
      const pj = jogada[i][2];

      if (p[0] && p[1]) {
        if (
          p[0].jogador == jogador.jogador &&
          p[1].jogador == jogador.jogador
        ) {
          if (p[2]) continue;
          posicao = pj;
          break;
        }
      }
    }

    if (posicao == null) {
      const lance = jogo
        .map((v, i) => {
          return { v, i };
        })
        .filter((i) => i.v == null);
      if (lance.length) {
        if (jogo[4] == null) {
          posicao = 4;
        } else {
          posicao = lance[rdn(lance.length)].i;
        }
      }
    }

    return {
      posicao,
      jogador,
    };
  };
}
