const data = new Date();

const diasMeses = document.querySelector(".dias");

const mes = data.getMonth();

const ultimoDiaMes = new Date(data.getFullYear(),
data.getMonth() + 1, 0);

console.log(ultimoDiaMes);

const listaMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

document.querySelector(".data h1").innerHTML = listaMeses[mes];

document.querySelector(".data p").innerHTML = data.toDateString();

let listaDias = "";

for (let index = 1; index <= parseInt(ultimoDiaMes.getDate()); index++) {
    listaDias = listaDias + `<div>${index}</div>`;
    diasMeses.innerHTML = listaDias;
}

/*switch (mes) {
    case 0:
        console.log("Janeiro");
        break;
    case 1:
        console.log("Fevereiro");
        break;
    case 2:
        console.log("Março");
        break;
    case 3:
        console.log("Abril");
        break;
    case 4:
        console.log("Maio");
        break;
    case 5:
        console.log("Junho");
        break;
    case 6:
        console.log("Julho");
        break;
    case 7:
        console.log("Agosto");
        break;
    case 8:
        console.log("Setembro");
        break;
    case 9:
        console.log("Outubro");
        break;
    case 10:
        console.log("Novembro");
        break;
    case 11:
        console.log("Dezembro");
        break;

    default:
        break;
}*/