function changeName (elemento_button){

    console.log(elemento_button);

    if (elemento_button.innerText === "Logout"){
        elemento_button.innerText = "Login"
    }else{ 
        elemento_button.innerText ="Logout"


    elemento_button.innerText ="Logout"
    }
}

function eliminarBoton(elemento_add_definition){
    elemento_add_definition.remove();
}

function clickLike (){
    alert("Ninja was liked")
}