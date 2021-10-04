var botao = document.querySelector("#botao")

botao.addEventListener("click", function(){
    var nav = document.querySelector(".menu")
    nav.classList.add("hide")

    var inp = document.querySelector(".inp")
    inp.classList.remove("hide")
})

var fechar = document.querySelector("#fechar")

fechar.addEventListener("click", function(){
    var nav = document.querySelector(".menu")
    nav.classList.remove("hide")

    var inp = document.querySelector(".inp")
    inp.classList.add("hide")
})

let abrir = document.querySelector("#open")

abrir.addEventListener("mouseup", function(){
    var bag = document.querySelector("#bag")
    bag.classList.toggle("bag")
})




