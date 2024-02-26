var game = ""
//resetear la variable
localStorage.setItem('game_over', game);
let player_select = ""
let pc_select = ""
var result = ""

// 0 = rock          1 = paper        2 = scissors
function select_rock(){

    //ocultar la section select
    let select = document.getElementById("select");
    select.classList.add("d-none");


    player_select = "rock"
              //math.floor , redondea el numero hacia abajo, Math.random()*3 genera un numero entre 0 y 3, excluyendo 3
              //genera un numero aleatorio entre 0,1,2
    pc_select = Math.floor(Math.random()*3)
    //verificar el resultado
    if (pc_select === 0){
        result = "draw"
    }else {if (pc_select === 1){
        result = "lose"
    }else {if (pc_select === 2){
        result = "win"
    }else {
        result = "Fatal error"
            }
        }
    }
    //Guardar el resultado 
    //'nombre con la que se guardara la variable' , lo que se guardara en la variable
    localStorage.setItem('result', result);

    
    //ejecutar la función transform y la función game_load
    transform();
    game_load();
};
function select_paper(){

    //ocultar la section select
    let select = document.getElementById("select");
    select.classList.add("d-none");


    player_select = "paper"
    pc_select = Math.floor(Math.random()*3)
    //verificar el resultado
    if (pc_select === 1){
        result = "draw"
    }else {if (pc_select === 2){
        result = "lose"
    }else {if (pc_select === 0){
        result = "win"
    }else {
        result = "Fatal error"
            }
        }
    }
    //Guardar el resultado 
    localStorage.setItem('result', result);

    
    //ejecutar la función transform
    transform();
    game_load();
};
function select_scissors(){

    //ocultar la section select
    let select = document.getElementById("select");
    select.classList.add("d-none");


    player_select = "scissors"
    pc_select = Math.floor(Math.random()*3)
    //verificar el resultado
    if (pc_select == 2){
        result = "draw"
    }else {if (pc_select == 0){
        result = "lose"
    }else {if (pc_select == 1){
        result = "win"
    }else {
        result = "Fatal error"
            }
        }
    }
    //Guardar el resultado 
    localStorage.setItem('result', result);

    //ejecutar la función transform
    transform();
    game_load();
};

function transform(){
    if (pc_select === 0){
        pc_select = "rock"
    }else{ if(pc_select === 1){
        pc_select = "paper"
    }else{ if(pc_select === 2){
        pc_select = "scissors"
    }}}

    //ejecutar la función battle
    battle();
};



//en este momento me di cuenta que podia ejecutar otras funciones dentro de js pero ya tenia la mayor parte del codigo hecho y funcionando

function battle(){

    // Seleccionar el contenedor de la imagen del jugador
    var player_pick = document.getElementById("player-pick");

    // Crear un elemento de imagen
    var player_img = document.createElement("img");

    // Establecer atributos a la imagen
    player_img.src = "assets/img/"+ player_select + ".png";
    player_img.style.width = "40%";
    player_img.style.objectFit = "cover";
    player_img.alt = player_select;

    // Agregar la imagen al contenedor del jugador
    player_pick.appendChild(player_img);

    /////////////////////////////////////////////////////////////////////

     // Seleccionar el contenedor de la imagen del pc
     var pc_pick = document.getElementById("pc-pick");

     // Crear un elemento de imagen
     var pc_img = document.createElement("img");
 
     // Establecer atributos a la imagen
     pc_img.src = "assets/img/"+ pc_select + ".png";
     pc_img.style.width = "40%";
     pc_img.style.objectFit = "cover";
     pc_img.alt = pc_select;
     
 
     // Agregar la imagen al contenedor del jugador
     pc_pick.appendChild(pc_img);

     function result_alert(){ 
        reload();
    
     }setTimeout(result_alert, 1500);
};

function reload(){
     //recuperar la variable
     var game = localStorage.getItem('game_over');
     if (game === 1){
        console.log ("el juego a terminado, desde gameplay.js")
     }else { if (game === "") {
        // remover las imagenes
        document.getElementById("player-pick").innerHTML = "";
        document.getElementById("pc-pick").innerHTML = "";
        reload_select();
     }else{
        document.getElementById("player-pick").innerHTML = "";
        document.getElementById("pc-pick").innerHTML = "";
        if (contador_player == contador_pc){
            var draw = document.getElementById("draw");
            draw.classList.remove("d-none");
        }else{ if (contador_player > contador_pc){
            var win = document.getElementById("win");
            win.classList.remove("d-none");
        }else{
            var lose = document.getElementById("lose");
            lose.classList.remove("d-none");
        }}
     }}
};



var contador_rep = 0
var contador_player = 0
var contador_pc = 0
var score_player = document.querySelector("#score_player")
var score_pc = document.querySelector("#score_pc")
var game_over = ""



function game_load(){
        //recupera la variable guardada como result
        let temp_result = localStorage.getItem('result');
        //recuperar la variable repeat como repeat
        let repeat = localStorage.getItem('repeat');

        if (temp_result === "win"){
            console.log("Haz ganado");
            contador_player = 1 + contador_player;
            score_player.textContent = contador_player;
            temp_result = ""
            localStorage.setItem('result', temp_result);
            contador_rep = contador_rep + 1
            

        }else {if (temp_result === "lose"){
            console.log("perdiste");
            contador_pc = 1 + contador_pc;
            score_pc.textContent = contador_pc;
            temp_result = ""
            localStorage.setItem('result', temp_result);
            contador_rep = contador_rep + 1

        }else {if (temp_result === "draw"){
            console.log("empate");
            temp_result = ""
            localStorage.setItem('result', temp_result);
            contador_rep = contador_rep + 1
        }}}

        if (contador_rep == repeat && contador_rep > 0.5){
            //Game over
            game_over = 1
            localStorage.setItem('game_over', game_over);

            //agregar la clase d-none a #select
            var select = document.getElementById("select");
            select.classList.add("d-none");
            } 
};


function reload_select(){
    if (contador_rep > .5 && game_over != 1){
    let sect_select = document.getElementById("select");
    sect_select.classList.remove("d-none");
    }
}setTimeout(reload_select, 1500);

