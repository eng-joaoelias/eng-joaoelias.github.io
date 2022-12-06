"use strict";

var musicas = [{
  titulo: "Play With Me",
  artista: "Extreme",
  album: "Extreme",
  src: "assets/musics/Extreme Play With Me.mp3",
  img: "assets/images/extreme.jfif"
}, {
  titulo: "Cum on Feel the Noize",
  artista: "Quiet Riot",
  album: "Metal Health",
  src: "assets/musics/Quiet Riot Cum on Feel the Noize.mp3",
  img: "assets/images/metal_health.jpg"
}, {
  titulo: "Round and Round",
  artista: "Ratt",
  album: "Out Of The Cellar",
  src: "assets/musics/Ratt Round and Round.mp3",
  img: "assets/images/out_of_cellar.jpg"
}, {
  titulo: "In My Dreams",
  artista: "Dokken",
  album: "Under Lock and Key",
  src: "assets/musics/Dokken - In My Dreams.mp3",
  img: "assets/images/under_lock_and_key.jpg"
}, {
  titulo: "Keep on Loving You",
  artista: "REO Speedwagon",
  album: "Hi Infidelity",
  src: "assets/musics/REO Speedwagon - Keep on Loving You.mp3",
  img: "assets/images/Hi_Infidelity.jpg"
}];
var musica = document.querySelector("audio");
var posicaoMusica = 0;
var capaAlbum = document.querySelector("img");
var nomeMusica = document.querySelector(".descricao h2");
var nomeArtista = document.querySelector(".descricao i");
renderizarMusica(posicaoMusica);
document.querySelector("#anterior").addEventListener("click", function () {
  if (posicaoMusica > 0) {
    posicaoMusica--;
    renderizarMusica(posicaoMusica);
  } else {
    window.alert("INÍCIO DA LISTA!\n");
    renderizarMusica(posicaoMusica);
  }

  mudaEstiloPlay();
});
document.querySelector("#proxima").addEventListener("click", function () {
  if (posicaoMusica < musicas.length - 1) {
    posicaoMusica++;
    renderizarMusica(posicaoMusica);
    mudaEstiloPlay();
  } else {
    window.alert("FIM DA LISTA!\n");
  }
});
musica.addEventListener("timeupdate", function () {
  avancaDuracaoAudio();
});
document.querySelector("#botao-play").addEventListener("click", function () {
  tocarMusica();
});
document.querySelector("#botao-pause").addEventListener("click", function () {
  pausarMusica();
});

function renderizarMusica(index) {
  musica.setAttribute("src", musicas[index].src);
  musica.addEventListener("loadeddata", function () {
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    capaAlbum.src = musicas[index].img;
    document.querySelector(".fim").textContent = segundosParaMinutos(Math.floor(musica.duration));
  });
}

function tocarMusica() {
  musica.play();
  mudaEstiloPlay();
}

function mudaEstiloPlay() {
  document.querySelector("#botao-pause").style.display = "block";
  document.querySelector(".botao-pause").style.display = "block";
  document.querySelector("#botao-play").style.display = "none";
}

function pausarMusica() {
  musica.pause();
  mudaEstiloPause();
}

function mudaEstiloPause() {
  document.querySelector("#botao-play").style.display = "block";
  document.querySelector(".botao-play").style.display = "block";
  document.querySelector("#botao-pause").style.display = "none";
}

function avancaDuracaoAudio() {
  setInterval(function () {
    var percentualDucaraoMusica = 100 * (musica.currentTime / musica.duration);
    document.querySelector("progress").style.width = percentualDucaraoMusica + "%";
    var tempoDecorrido = document.querySelector(".inicio");
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
    var duracaoMusica = document.querySelector(".fim");
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
  }, 0.001);
}

function segundosParaMinutos(tempo) {
  var minutos = tempo / 60;
  var segundos = tempo % 60;

  if (minutos < 1) {
    if (segundos < 10) {
      return "00:0" + segundos;
    } else {
      return "00:" + segundos;
    }
  } else {
    if (minutos < 10) {
      if (segundos < 10) {
        return "0" + Math.trunc(minutos) + ":0" + Math.trunc(segundos);
      } else {
        return "0" + Math.trunc(minutos) + ":" + Math.trunc(segundos);
      }
    } else {
      return Math.trunc(minutos) + ":" + Math.trunc(segundos);
    }
  }
}