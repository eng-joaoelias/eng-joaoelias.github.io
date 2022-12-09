let slides = document.querySelectorAll('.slide-container');

let index = 0;

function proxProjeto() {
    slides[index].classList.remove('activ');
    index = (index + 1) % slides.length;
    slides[index].classList.add('activ');
}

function prevProjeto() {
    slides[index].classList.remove("activ");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("activ");
}

setInterval(() => {
    proxProjeto();
}, 45000);

document.querySelector("#anterior").addEventListener("click", prevProjeto);

document.querySelector("#proximo").addEventListener("click", proxProjeto);
