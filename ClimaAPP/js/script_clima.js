//Variáveis e seletores.

const apiKey = "70feb6d6967dfc0e8666f19348ca5f04"; //KEY DA API
const apiPaisURL = "https://countryflagsapi.com/svg/";
const cidadeTxt = document.querySelector("#cidadeInput");
const btnBusca = document.querySelector("#buscar");
const nomeCidade = document.querySelector("#cidade");
const temperatura = document.querySelector("#temperatura span");
const descricao = document.querySelector("#descricao");
const iconClima = document.querySelector("#clima-icon");
const bandeiraIcon = document.querySelector("#pais");
const umidade = document.querySelector("#umidade span");
const velVento = document.querySelector("#vento span");
const dadosClimaContainer = document.querySelector("#clima-dados");


//Funções

const consultaDadosAPI = async(cidade) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const dados = await res.json();

    return dados;
}

const mostraDadosClima = async (cidade) => {
    const dados = await consultaDadosAPI(cidade);

    nomeCidade.innerText = dados.name;
    temperatura.innerText = parseInt(dados.main.temp);
    descricao.innerText = dados.weather[0].description;
    iconClima.setAttribute("src", `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`);
    bandeiraIcon.setAttribute("src", apiPaisURL + dados.sys.country);
    umidade.innerText = `${dados.main.humidity}%`;
    velVento.innerText = `${dados.wind.speed} km/h`;
    dadosClimaContainer.classList.remove("hide");
}


//Eventos
btnBusca.addEventListener("click", (e) => {
    e.preventDefault();

    const cidade = cidadeTxt.value;

    mostraDadosClima(cidade)
});

cidadeTxt.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();

        const cidade = cidadeTxt.value;

        mostraDadosClima(cidade)
    }
})
