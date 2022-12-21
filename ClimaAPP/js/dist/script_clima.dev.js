"use strict";

//Variáveis e seletores.
var apiKey = "70feb6d6967dfc0e8666f19348ca5f04"; //KEY DA API

var apiPaisURL = "https://countryflagsapi.com/svg/";
var cidadeTxt = document.querySelector("#cidadeInput");
var btnBusca = document.querySelector("#buscar");
var nomeCidade = document.querySelector("#cidade");
var temperatura = document.querySelector("#temperatura span");
var descricao = document.querySelector("#descricao");
var iconClima = document.querySelector("#clima-icon");
var bandeiraIcon = document.querySelector("#pais");
var umidade = document.querySelector("#umidade span");
var velVento = document.querySelector("#vento span"); //Funções

var consultaDadosAPI = function consultaDadosAPI(cidade) {
  var apiWeatherURL, res, dados;
  return regeneratorRuntime.async(function consultaDadosAPI$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          apiWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=".concat(cidade, "&units=metric&appid=").concat(apiKey, "&lang=pt_br");
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(apiWeatherURL));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          dados = _context.sent;
          return _context.abrupt("return", dados);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

var mostraDadosClima = function mostraDadosClima(cidade) {
  var dados;
  return regeneratorRuntime.async(function mostraDadosClima$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(consultaDadosAPI(cidade));

        case 2:
          dados = _context2.sent;
          nomeCidade.innerText = dados.name;
          temperatura.innerText = parseInt(dados.main.temp);
          descricao.innerText = dados.weather[0].description;
          iconClima.setAttribute("src", "http://openweathermap.org/img/wn/".concat(dados.weather[0].icon, ".png"));
          bandeiraIcon.setAttribute("src", apiPaisURL + dados.sys.country);
          umidade.innerText = "".concat(dados.main.humidity, "%");
          velVento.innerText = "".concat(dados.wind.speed, " km/h");

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //Eventos


btnBusca.addEventListener("click", function (e) {
  e.preventDefault();
  var cidade = cidadeTxt.value;
  mostraDadosClima(cidade);
});