(function () {
  let jogoDaVelha = new JogoDaVelha();
  let jogarComMaquina = false;
  const jogoDaVelhaMaquina = new JogoDaVelhaMaquina();
  const jogada = document.querySelectorAll("[id*=jogada-]");
  const jogador = document.querySelectorAll("[id*=jogador-]");
  const rodada = document.querySelector("[id=rodada]");
  const jogando = document.querySelector("[id=jogando");
  const placar = document.querySelectorAll("[id*=placar-]");
  const opcaoDeJogada = document.querySelector('[id=jogo]');

  atualizarRodada();
  atualizarProximoJogador();

  opcaoDeJogada.addEventListener('click', (e) => {
    selecionarOpcao(e);
  });

  jogada.forEach((el, i) => {
    el.addEventListener("click", () => {
      jogar(el, i);
    });
  });

  function selecionarOpcao(e) {
    jogarComMaquina = e.target.value == "0" ? true : false;
    reiniciarJogo();
    jogoDaVelha = new JogoDaVelha();
    jogador[0].textContent = '-';
    jogador[1].textContent = '-';
    rodada.textContent = '1';
    atualizarProximoJogador();
  }

  function jogar(el, i) {
    const jogo = jogoDaVelha.obterJogo();
    if (!jogo[i]) {
      if (jogarComMaquina) {
        jogoDaVelha.jogar(i);
        marcarJogada(el);
        const jogadaMaquina = jogoDaVelhaMaquina.obterJogada(
          jogoDaVelha.obterJogo(),
          jogoDaVelha.obterProximoJogador()
        );
        jogoDaVelha.jogar(jogadaMaquina.posicao);
        if (jogadaMaquina.posicao != null) {
          marcarJogada(jogada[jogadaMaquina.posicao]);
        }
      } else {
        jogoDaVelha.jogar(i);
        marcarJogada(el);
      }
    }

    if (jogoDaVelha.haVencedor()) {
      const vencedor = jogoDaVelha.obterVencedor();
      if (vencedor.jogador == "x") {
        jogador[0].textContent = vencedor.pontuacao;
      } else if (vencedor.jogador == "o") {
        jogador[1].textContent = vencedor.pontuacao;
      }
      reiniciarJogo();
      atualizarRodada();
    } else {
      const reiniciar = jogo.map((item) => item != null).includes(false);
      if (!reiniciar) {
        reiniciarJogo();
        atualizarRodada();
      }
    }

    atualizarProximoJogador();
  }

  function reiniciarJogo() {
    jogoDaVelha.reiniciarJogo();
    jogada.forEach((el, i) => {
      if (el.firstElementChild) {
        el.removeChild(el.firstElementChild);
      }
    });   
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

  function marcarJogada(el) {
    const sn = document.createElement("span");
    sn.textContent = jogoDaVelha.obterJogador().jogador;
    el.appendChild(sn);
  }
})();
