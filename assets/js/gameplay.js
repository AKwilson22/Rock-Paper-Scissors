
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

    
    //ejecutar la función transform
    transform();
}
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
}
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
}




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
}



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
        alert(result);
        reload();
    
     }setTimeout(result_alert, 200);
}

function reload(){
     //recuperar la variable
     let game = localStorage.getItem('game_over');
     if (game === 1){
        console.log ("el juego a terminado, desde gameplay.js")
     }else { 
        let draw = document.getElementById("select");
        draw.classList.remove("d-none");

        // remover las imagenes
        document.getElementById("player-pick").innerHTML = "";
        document.getElementById("pc-pick").innerHTML = "";
     }
}
