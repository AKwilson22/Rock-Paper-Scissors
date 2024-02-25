
let player_select = ""
let pc_select = ""
let result = ""

// 0 = rock          1 = paper        2 = scissors
function select_rock(){
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
    alert(result)
}
function select_paper(){
    player_select = "paper"
    pc_select = Math.floor(Math.random()*3)
    //verificar el resultado
    if (pc_select === 2){
        result = "draw"
    }else {if (pc_select === 1){
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
    alert(result)
}
function select_scissors(){
    player_select = "scissors"
    pc_select = Math.floor(Math.random()*3)
    //verificar el resultado
    if (pc_select === 2){
        result = "draw"
    }else {if (pc_select === 1){
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
    alert(result)
}



