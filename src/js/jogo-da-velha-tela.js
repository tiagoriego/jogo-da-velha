(function () {
  const jogoDaVelha = new JogoDaVelha();
  const jogada = document.querySelectorAll("[id*=jogada-]");
  const jogador = document.querySelectorAll("[id*=jogador-]");
  const rodada = document.querySelector("[id=rodada]");
  const jogando = document.querySelector("[id=jogando");
  const placar = document.querySelectorAll("[id*=placar-]");

  atualizarRodada();
  atualizarProximoJogador();

  jogada.forEach((el, i) => {
    el.addEventListener("click", () => {
      const jogo = jogoDaVelha.obterJogo();
      if (!jogo[i]) {
        jogoDaVelha.jogar(i);
        const sn = document.createElement("span");
        sn.textContent = jogoDaVelha.obterJogador().jogador;
        el.appendChild(sn);
      }

      if (jogoDaVelha.haVencedor()) {
        const vencedor = jogoDaVelha.obterVencedor();
        if (vencedor.jogador == "x") {
          jogador[0].textContent = vencedor.pontuacao;
        } else if (vencedor.jogador == "o") {
          jogador[1].textContent = vencedor.pontuacao;
        }
        reiniciarJogo();
      } else {
        const reiniciar = jogo.map((item) => item != null).includes(false);
        if (!reiniciar) {
          reiniciarJogo();
        }
      }

      atualizarProximoJogador();
    });
  });

  function reiniciarJogo() {
    jogoDaVelha.reiniciarJogo();
    jogada.forEach((el, i) => {
      if (el.firstElementChild) {
        el.removeChild(el.firstElementChild);
      }
    });
    atualizarRodada();
  }

  function atualizarRodada() {
    rodada.textContent = jogoDaVelha.obterRodada();
  }

  function atualizarProximoJogador() {
    let jogada = jogoDaVelha.obterProximoJogador().jogador;
    if (jogada == "x") {
      placar[1].classList.remove("next-player");
      placar[0].classList.add("next-player");
    } else {
      placar[0].classList.remove("next-player");
      placar[1].classList.add("next-player");
    }
    jogando.innerText = jogada.toUpperCase();
  }
})();
