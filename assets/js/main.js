



document.addEventListener("DOMContentLoaded", function() {
    var contador_rep = 0
    var contador_player = 0
    var contador_pc = 0
    var score_player = document.querySelector("#score_player")
    var score_pc = document.querySelector("#score_pc")
    var game_over = ""



    //seleccionar la ubicacion de la imagen
    var imagenContainer = document.getElementById("img-rps");
    var RPSimg = document.createElement("img");
    //Establecer atributos a la imagen
    RPSimg.src = "assets/img/rock-paper-scissors.png";
    RPSimg.height = "250";
    RPSimg.style.objectFit = "cover";
    RPSimg.alt = "rock,paper,scissors";

    // Agregar la imagen al contenedor
    imagenContainer.appendChild(RPSimg);


    let numero_imagen = 1
   

    //Contador para cambio de imagen Rock Paper Scissors
    const cambioimagen = setInterval(() => { 
        if (numero_imagen < 4){
            numero_imagen += 1
        }else {
            numero_imagen = 1
        }

        if (numero_imagen === 1){
            RPSimg.src = "assets/img/rock-paper-scissors.png";
        }else {if (numero_imagen === 2){
            RPSimg.src = "assets/img/rock.png";}
            else {if (numero_imagen === 3){
                RPSimg.src = "assets/img/paper.png";}
                else {if (numero_imagen === 4){
                    RPSimg.src = "assets/img/scissors.png";}                
                }
            }
        }

        /* Se movio esta función a js de gameplay

        //para aprovechar el temporizador agregare la actualización del score   
        
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

            if (contador_player == contador_pc){
                var draw = document.getElementById("draw");
                draw.classList.remove("d-none");
            }else{ if (contador_player > contador_pc){
                var win = document.getElementById("win");
                win.classList.remove("d-none");
            }else{
                var lose = document.getElementById("lose");
                lose.classList.remove("d-none");
            }}}  */

    }, 800); //1000 equivale a un segundo
});

