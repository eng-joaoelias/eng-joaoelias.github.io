let slides = document.querySelectorAll(".slide-container");
let index = 0;
let timer;

function proxProjeto() {
    slides[index].classList.remove("activ");
    index = (index + 1) % slides.length;
    slides[index].classList.add("activ");
    reiniciarTimer();
}

function prevProjeto() {
    slides[index].classList.remove("activ");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("activ");
    reiniciarTimer();
}

function iniciarTimer() {
    timer = setInterval(proxProjeto, 7500);
}

function reiniciarTimer() {
    clearInterval(timer);
    iniciarTimer();
}

iniciarTimer();

document.querySelector("#anterior").addEventListener("click", () => {
    prevProjeto();
});

document.querySelector("#proximo").addEventListener("click", () => {
    proxProjeto();
});
