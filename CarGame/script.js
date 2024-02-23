const car = document.getElementById('car');
const gameContainer = document.querySelector('.game-container');
const containerWidth = gameContainer.offsetWidth;
const containerHeight = gameContainer.offsetHeight;
const carWidth = 100; // Largura do carro após o redimensionamento
const carHeight = 260; // Altura do carro após o redimensionamento
let carX = containerWidth / 2 - carWidth / 2;
let carY = containerHeight / 2 - carHeight / 2;
let keysPressed = {};
let rotationAngle = 0;
let speedX = 0;
let speedY = 0;
const acceleration = 0.2; // Aceleração do carro
const maxSpeed = 5; // Velocidade máxima do carro
const rotationSpeed = 3; // Velocidade de rotação

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    keysPressed[key] = true;
});

document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    keysPressed[key] = false;
});

function moveCar() {
    if (keysPressed['w']) {
        speedX += Math.cos((rotationAngle - 90) * (Math.PI / 180)) * acceleration;
        speedY += Math.sin((rotationAngle - 90) * (Math.PI / 180)) * acceleration;
    }
    if (keysPressed['s']) {
        speedX -= Math.cos((rotationAngle - 90) * (Math.PI / 180)) * acceleration * 0.5;
        speedY -= Math.sin((rotationAngle - 90) * (Math.PI / 180)) * acceleration * 0.5;
    }
    if (keysPressed['a']) {
        rotationAngle -= rotationSpeed;
    }
    if (keysPressed['d']) {
        rotationAngle += rotationSpeed;
    }

    // Aplicar desaceleração
    speedX *= 0.98;
    speedY *= 0.98;

    // Limitar a velocidade
    const speed = Math.sqrt(speedX * speedX + speedY * speedY);
    if (speed > maxSpeed) {
        const ratio = maxSpeed / speed;
        speedX *= ratio;
        speedY *= ratio;
    }

    // Calcular os limites do carro
    const carLeft = carX;
    const carTop = carY;
    const carRight = carX + carWidth;
    const carBottom = carY + carHeight;

    // Calcular a nova posição do carro
    const newCarX = carX + speedX;
    const newCarY = carY + speedY;

    // Verificar colisão com as bordas da área jogável
    if (
        newCarX >= 0 &&
        newCarX <= containerWidth - carWidth &&
        newCarY >= 0 &&
        newCarY <= containerHeight - carHeight
    ) {
        carX = newCarX;
        carY = newCarY;
    }

    // Atualizar a posição e a rotação do carro
    car.style.left = carX + 'px';
    car.style.top = carY + 'px';
    car.style.transform = `rotate(${rotationAngle}deg)`;
}

setInterval(moveCar, 50);
