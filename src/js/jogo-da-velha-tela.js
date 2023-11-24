(function () {
  const jogoDaVelha = new JogoDaVelha();
  const jogada = document.querySelectorAll('[id*=jogada-]');
  const jogador = document.querySelectorAll('[id*=jogador-]');
  const rodada = document.querySelector('[id=rodada]');
  rodada.textContent = jogoDaVelha.obterRodada();

  jogada.forEach((el, i) => {
    el.addEventListener('click', () => {
      const jogo = jogoDaVelha.obterJogo();
      if (!jogo[i]) {
        jogoDaVelha.jogar(i);
        const sn = document.createElement('span');
        sn.textContent = jogoDaVelha.obterJogador().jogador;
        el.appendChild(sn);
      }

      if (jogoDaVelha.haVencedor()) {
        const vencedor = jogoDaVelha.obterVencedor();
        if (vencedor.jogador == 'x') {
          jogador[0].textContent = vencedor.pontuacao;
        } else if (vencedor.jogador == 'o') {
          jogador[1].textContent = vencedor.pontuacao;
        }
        reiniciarJogo();
      } else {
        const reiniciar = jogo.map((item) => item != null).includes(false);
        if (!reiniciar) {
          reiniciarJogo();
        }
      }
    });
  });

  function reiniciarJogo() {
    jogoDaVelha.reiniciarJogo();
    rodada.textContent = jogoDaVelha.obterRodada();
    jogada.forEach((el, i) => {
      if (el.firstElementChild) {
        el.removeChild(el.firstElementChild);
      }
    });
  }
})();