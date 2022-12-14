"use strict";

console.log("Flappy Bird by JE");
console.log("Agradecimentos especiais para Mario Souto - Dev Soutinho por me proporcionar tal experiência.");
var sprites = new Image();
sprites.src = "./images/sprites.png";
var canvas = document.querySelector("canvas");
var contexto = canvas.getContext("2d");

function fazColisao(passaro, chao) {
  var flappyBirdY = passaro.y + passaro.altura;
  var chaoY = chao.y;

  if (flappyBirdY >= chaoY) {
    return true;
  } else {
    return false;
  }
}

function criaFlappyBird() {
  var flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    pulo: 4.6,
    velocidade: 0,
    gravidade: 0.15,
    atualiza: function atualiza() {
      if (fazColisao(flappyBird, chao)) {
        console.log("FEZ COLISÃO PORRAAA");
        setTimeout(function () {
          mudaTela(Telas.inicio);
        }, 500);
        return;
      } else {
        flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade;
        flappyBird.y = flappyBird.y + flappyBird.velocidade;
      }
    },
    desenha: function desenha() {
      contexto.drawImage(sprites, flappyBird.spriteX, flappyBird.spriteY, //coordenadas x e y
      flappyBird.largura, flappyBird.altura, //tamanho do passaro
      flappyBird.x, flappyBird.y, flappyBird.largura, flappyBird.altura);
    },
    pula: function pula() {
      flappyBird.velocidade = -flappyBird.pulo;
    }
  };
  return flappyBird;
}

var chao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,
  desenha: function desenha() {
    contexto.drawImage(sprites, chao.spriteX, chao.spriteY, //coordenadas x e y
    chao.largura, chao.altura, //tamanho do passaro
    chao.x, chao.y, chao.largura, chao.altura);
    var larguraTot = chao.x + chao.largura;
    contexto.drawImage(sprites, chao.spriteX, chao.spriteY, chao.largura, chao.altura, larguraTot, chao.y, chao.largura, chao.altura);
  }
};
var planoDeFundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,
  desenha: function desenha() {
    contexto.fillStyle = "#70c5ce";
    contexto.fillRect(0, 0, canvas.width, canvas.height);
    contexto.drawImage(sprites, planoDeFundo.spriteX, planoDeFundo.spriteY, //coordenadas x e y
    planoDeFundo.largura, planoDeFundo.altura, //tamanho do passaro
    planoDeFundo.x, planoDeFundo.y, planoDeFundo.largura, planoDeFundo.altura);
    var larguraTot = planoDeFundo.x + planoDeFundo.largura;
    contexto.drawImage(sprites, planoDeFundo.spriteX, planoDeFundo.spriteY, planoDeFundo.largura, planoDeFundo.altura, larguraTot, planoDeFundo.y, planoDeFundo.largura, planoDeFundo.altura);
  }
};
var mensagemReady = {
  spriteX: 134,
  spriteY: 0,
  largura: 174,
  altura: 152,
  x: canvas.width / 2 - 174 / 2,
  y: 50,
  desenha: function desenha() {
    contexto.drawImage(sprites, mensagemReady.spriteX, mensagemReady.spriteY, mensagemReady.largura, mensagemReady.altura, mensagemReady.x, mensagemReady.y, mensagemReady.largura, mensagemReady.altura);
  }
};
var globais = {};
var telaAtiva = {};

function mudaTela(novaTela) {
  telaAtiva = novaTela;

  if (telaAtiva.inicializa) {
    telaAtiva.inicializa();
  }
}

var Telas = {
  inicio: {
    inicializa: function inicializa() {
      globais.flappyBird = criaFlappyBird();
    },
    desenha: function desenha() {
      planoDeFundo.desenha();
      chao.desenha();
      globais.flappyBird.desenha();
      mensagemReady.desenha();
    },
    click: function click() {
      mudaTela(Telas.jogo);
    },
    atualiza: function atualiza() {}
  },
  jogo: {
    desenha: function desenha() {
      planoDeFundo.desenha();
      chao.desenha();
      globais.flappyBird.desenha();
    },
    click: function click() {
      globais.flappyBird.pula();
    },
    atualiza: function atualiza() {
      globais.flappyBird.atualiza();
    }
  }
};

function loop() {
  telaAtiva.desenha();
  telaAtiva.atualiza();
  requestAnimationFrame(loop);
}

window.addEventListener("click", function () {
  if (telaAtiva.click) {
    telaAtiva.click();
  }
});
mudaTela(Telas.inicio);
loop();