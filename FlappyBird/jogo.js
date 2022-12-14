console.log("Flappy Bird by JE");

console.log("Agradecimentos especiais para Mario Souto - Dev Soutinho por me proporcionar tal experiência.");

let frames = 0;

const sprites = new Image();
sprites.src = "./images/sprites.png";

const canvas = document.querySelector("canvas");
const contexto = canvas.getContext("2d");

function fazColisao(passaro, chao) {
    const flappyBirdY = passaro.y + passaro.altura;
    const chaoY = chao.y;

    if (flappyBirdY >= chaoY) {
        return true;
    } else {
        return false;
    }
}

function criaFlappyBird() {
    const flappyBird = {
        spriteX: 0,
        spriteY: 0,
        largura: 33,
        altura: 24,
        x: 10,
        y: 50,
        pulo: 4.6,
        velocidade: 0,
        gravidade: 0.15,

        movimentos:[
            { spriteX: 0, spriteY: 0, }, //asa para cima
            { spriteX: 0, spriteY: 26, }, //asa no meio
            { spriteX: 0, spriteY: 52, }, //asa para baixo
        ],
    
        atualiza: function(){
    
            if (fazColisao(flappyBird, globais.chao)) {
                console.log("BATEU.");
                setTimeout(() => {
                    mudaTela(Telas.inicio);                    
                }, 500);

                return;
            } else {
                flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade;
                flappyBird.y = flappyBird.y + flappyBird.velocidade;
            }
        },

        frameAtual: 0,

        atualizaFrame: function(){
            //funcao para fazer o passaro "bater as asas"

            const intervaloDosFrames = 8; //se diminuimos esse valor, o passaro fica mais "frenetico". se aumentamos, fica mais lento

            const passouOIntervalo = (frames % intervaloDosFrames === 0); //retorna true se já se passaram 10, 20, 30... frames

            if (passouOIntervalo) {
                //a cada 10 frames, o passaro muda a posicao da asa.
                //acontece no frame 10, frame 20, frame 30, frame 40 e assim por diante...
                const baseIncremento = 1;
                const incremento = baseIncremento + flappyBird.frameAtual;
                const baseRepeticao = flappyBird.movimentos.length;
                flappyBird.frameAtual = incremento % baseRepeticao;    
            }
            
        },
    
        desenha: function() {

            flappyBird.atualizaFrame();

            const {spriteX, spriteY} = flappyBird.movimentos[flappyBird.frameAtual];
    
            contexto.drawImage(
                sprites,
                spriteX, spriteY, //coordenadas x e y
                flappyBird.largura, flappyBird.altura, //tamanho do passaro
                flappyBird.x, flappyBird.y,
                flappyBird.largura, flappyBird.altura
            );
    
        },
    
        pula: function() {
            flappyBird.velocidade = - flappyBird.pulo;
        }
    }

    return flappyBird;
}

function criaChao() {
    const chao = {
        spriteX: 0,
        spriteY: 610,
        largura: 224,
        altura: 112,
        x: 0,
        y: canvas.height - 112,
    
        atualiza: function(){
            const movimentoDoChao = 1;

            const repeteEm = chao.largura / 2; //metade do tamanho do chao

            const movimentacao = chao.x - movimentoDoChao;

            chao.x = movimentacao % repeteEm;
        },
    
        desenha: function () {
            contexto.drawImage(
                sprites,
                chao.spriteX, chao.spriteY, //coordenadas x e y
                chao.largura, chao.altura, //tamanho do passaro
                chao.x, chao.y,
                chao.largura, chao.altura
            );
    
            const larguraTot = chao.x + chao.largura;
            contexto.drawImage(
                sprites,
                chao.spriteX, chao.spriteY,
                chao.largura, chao.altura, 
                larguraTot, chao.y,
                chao.largura, chao.altura
            );
        },
    
    }
    return chao;
}

const planoDeFundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,

    desenha: function() {

        contexto.fillStyle = "#70c5ce";
        contexto.fillRect(0, 0, canvas.width, canvas.height)

        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY, //coordenadas x e y
            planoDeFundo.largura, planoDeFundo.altura, //tamanho do passaro
            planoDeFundo.x, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura
        );

        const larguraTot = planoDeFundo.x + planoDeFundo.largura;
        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura, 
            larguraTot, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura
        );
    }
    
}

const mensagemReady = {
    spriteX: 134,
    spriteY: 0,
    largura: 174,
    altura: 152,
    x: (canvas.width / 2) - 174 / 2,
    y: 50,

    desenha: function(){
        contexto.drawImage(
            sprites,
            mensagemReady.spriteX, mensagemReady.spriteY,
            mensagemReady.largura, mensagemReady.altura,
            mensagemReady.x, mensagemReady.y,
            mensagemReady.largura, mensagemReady.altura
        );
    }
};

const globais = {

};

let telaAtiva = {

};

function mudaTela(novaTela) {
    telaAtiva = novaTela;

    if (telaAtiva.inicializa) {
        telaAtiva.inicializa();    
    }
}

const Telas = {

    inicio:{
        inicializa: function () {
            globais.flappyBird = criaFlappyBird();
            globais.chao = criaChao();
        },
        desenha: function(){
            planoDeFundo.desenha();
            globais.chao.desenha();
            globais.flappyBird.desenha();
            mensagemReady.desenha();
        },
        click: function () {
            mudaTela(Telas.jogo);
        },
        atualiza: function(){
            globais.chao.atualiza();
        }
    },

    jogo:{
        desenha: function(){
            planoDeFundo.desenha();
            globais.chao.desenha();
            globais.flappyBird.desenha();
        },
        click: function(){
            globais.flappyBird.pula();
        },
        atualiza: function(){
            globais.flappyBird.atualiza();
        }
    }
};

function loop() {

    telaAtiva.desenha();
    telaAtiva.atualiza();

    frames = frames + 1;

    requestAnimationFrame(loop);   
}

window.addEventListener("click", function() {
    if (telaAtiva.click) {
        telaAtiva.click();
    }
});

mudaTela(Telas.inicio);
loop();
