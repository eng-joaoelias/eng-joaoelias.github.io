let musica = document.querySelector("audio");

musica.addEventListener("timeupdate", ()=>{
    avancaDuracaoAudio();
})

document.querySelector("#botao-play").addEventListener("click", ()=>{
    tocarMusica();
});

document.querySelector("#botao-pause").addEventListener("click", ()=>{
    pausarMusica();
});

function tocarMusica() {
    musica.play();
    document.querySelector("#botao-pause").style.display = "block";
    document.querySelector(".botao-pause").style.display = "block";
    document.querySelector("#botao-play").style.display = "none";
}

function pausarMusica(){
    musica.pause();
    document.querySelector("#botao-play").style.display = "block";
    document.querySelector(".botao-play").style.display = "block";
    document.querySelector("#botao-pause").style.display = "none";
}

function avancaDuracaoAudio(){
    setInterval(() => {
        let percentualDucaraoMusica = 100*(musica.currentTime/musica.duration);
        document.querySelector("progress").style.width = percentualDucaraoMusica + "%";
        let tempoDecorrido = document.querySelector(".inicio");
        tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
    }, 0.001);
}

function segundosParaMinutos(tempo) {
    let minutos = tempo / 60;
    let segundos = tempo % 60;
    if (minutos<1) {
        if (segundos<10) {
            return "00:0"+segundos;
        }
        else{
            return "00:"+segundos;
        }
    } else {
        if (minutos<10) {
            if (segundos<10) {
                return "0" + Math.trunc(minutos) + ":0" + Math.trunc(segundos);
            } else {
                return "0" + Math.trunc(minutos) + ":" + Math.trunc(segundos);
            }
        }
        else {
            return Math.trunc(minutos)+":"+ Math.trunc(segundos);
        }
    }
    
}
