(function () {
  let jogoDaVelha = new JogoDaVelha();
  let jogarComMaquina = true;
  const jogoDaVelhaMaquina = new JogoDaVelhaMaquina();
  const jogada = document.querySelectorAll("[id*=jogada-]");
  const jogador = document.querySelectorAll("[id*=jogador-]");
  const rodada = document.querySelector("[id=rodada]");
  const jogando = document.querySelector("[id=jogando");
  const placar = document.querySelectorAll("[id*=placar-]");
  const reiniciar = document.querySelector("[id=reiniciar]");

  atualizarRodada();
  atualizarProximoJogador();

  document.querySelector("[id=menu]").addEventListener("click", function () {
    const menuItem = document.querySelector("[id=menu-item]");
    let menuState = menuItem.style.display;
    menuState = menuState == "block" ? "none" : "block";
    menuItem.style.display = menuState;
  });

  document
    .querySelector("[id=menu-item]")
    .addEventListener("click", function (e) {
      selecionarOpcao(e.target.getAttribute("option"));
      this.style.display = "none";
    });

  jogada.forEach((el, i) => {
    el.addEventListener("click", () => {
      jogar(el, i);
    });
  });

  reiniciar.addEventListener("click", function () {
    this.style.display = "none";
    removerGanhador();
    reiniciarJogo();
    atualizarRodada();
  });

  function selecionarOpcao(option) {
    jogarComMaquina = option == "0" ? true : false;
    ocultarReiniciar();
    removerGanhador();
    reiniciarJogo();
    jogoDaVelha = new JogoDaVelha();
    jogador[0].textContent = "-";
    jogador[1].textContent = "-";
    rodada.textContent = "1";
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
      marcarGanhador();
      exibirReiniciar();
    } else {
      const reiniciar = jogo.map((item) => item != null).includes(false);
      if (!reiniciar) {
        exibirReiniciar();
      }
    }

    atualizarProximoJogador();
  }

  function marcarGanhador() {
    const posicaoVencedor = jogoDaVelha.obterPosicaoJogadaVencedor();
    posicaoVencedor.forEach((posicao) => {
      jogada[posicao].classList.add("winner");
    });
  }

  function exibirReiniciar() {
    reiniciar.style.display = "block";
  }

  function ocultarReiniciar() {
    reiniciar.style.display = "none";
  }

  function removerGanhador() {
    jogada.forEach((el) => {
      el.classList.remove("winner");
    });
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
