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
    }else {
        setTimeout(function() {
            moeda.style.animation = "moeda-coroa 2s forwards"
        })
    }
})