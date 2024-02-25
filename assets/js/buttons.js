
var shown = document.querySelector(".result");
let rep = ""

//vaciar la variable repeat guardada en el almacenamiento
localStorage.setItem('repeat', rep);

//funciones de numeros
function button_1() {
    rep = rep + "1"
    shown.textContent = rep
}
function button_2() {
    rep = rep + "2"
    shown.textContent = rep
}
function button_3() {
    rep = rep + "3"
    shown.textContent = rep
}
function button_4() {
    rep = rep + "4"
    shown.textContent = rep
}
function button_5() {
    rep = rep + "5"
    shown.textContent = rep
}
function button_6() {
    rep = rep + "6"
    shown.textContent = rep
}
function button_7() {
    rep = rep + "7"
    shown.textContent = rep
}
function button_8() {
    rep = rep + "8"
    shown.textContent = rep
}
function button_9() {
    rep = rep + "9"
    shown.textContent = rep
}
function button_0() {
    rep = rep + "0"
    shown.textContent = rep
}

function start() {
    console.log("el juego sera al mejor de"+" "+rep)

    if (rep > 0.5){
        //guardar variable rep
        localStorage.setItem('repeat', rep);
        //agregar la clase d-none a #section-repeat
        var section_repeat = document.getElementById("section-repeat");
        section_repeat.classList.add("d-none");
        //elmininar la clase d-none de #select
        var select = document.getElementById("select");
        select.classList.remove("d-none");


    } else {
        alert("el numero a ingresar debe ser mayor a 1")
    }
}

function all_clear() {
    rep = "";
    shown.textContent = rep;
}


