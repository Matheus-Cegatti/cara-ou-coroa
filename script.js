btnJogar = document.querySelector("#btn-jogar");
btnResetar = document.querySelector("#btn-resetar");
moeda = document.querySelector(".imagens-moeda");
let cara = 0;
let coroa = 0;

btnJogar.addEventListener("click", ()=> {
    contador = Math.floor(Math.random() * 2);
    console.log(contador);
    moeda.style.animation = "none";

    if(contador) {
        setTimeout(function(){
            moeda.style.animation = "moeda-girando 2s forwards"
        }, 100)
        console.log("cara");
        cara++
    }else {
        setTimeout(function() {
            moeda.style.animation = "moeda-coroa 2s forwards"
        },100)
        coroa++
    }
    setTimeout(atualizaPlacar, 2000);
    desabilitarBtnJogar();
})

function atualizaPlacar() {
    document.querySelector("#cara").textContent = `Cara:${cara}`;
    document.querySelector("#coroa").textContent = `Coroa:${coroa}`
}

function desabilitarBtnJogar() {
    btnJogar.disabled = true;
    setTimeout(() => {
        btnJogar.disabled = false
    }, 2000);
}

btnResetar.addEventListener("click", () => {
    console.log("resetou");
    moeda.style.animation = "none";
    cara = 0;
    coroa = 0
    atualizaPlacar()
})