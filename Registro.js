// Definimos las expresiones regulares que se usaran.

// Expresion regular para nombres y apellidos.
const nombreApellidoRegex= /^[a-zA-ZáéíóúñÁÉÍÓÚÑäëïöüÄËÏÖÜ]{2,}$/i;

// Expresion regular para correos electronicos
const correoRegex = /^[\w]+@[\w]+\.[a-zA-Z]{2,}$/i;

// Expresion regular para claves
const claveRegex = /^[a-zA-Z0-9!?@#$%&*_\-\.]+$/i;



// Seleccionamos el boton de registrar.
//let btnRegistrar = document.getElementById("registrar");
let btnRegistrar = document.getElementById("registrar");


// Agregamos el evento que evalua los campor ingresados.
btnRegistrar.addEventListener("click", ()=>{
    //let contenedoresInputs = document.getElementsByClassName("contenedorInput");
    let contenedoresInputs = document.getElementsByClassName("form-group");
    let inputs = document.getElementsByClassName("form-control");

    if(inputs[2].value === inputs[3].value){
        // Validamos si las expresiones regulares se pueden aplicar a los values de los imputs.
        let nombreValido = nombreApellidoRegex.test(inputs[0].value);
        let correoValido = correoRegex.test(inputs[1].value);
        let claveValida = claveRegex.test(inputs[2].value);
        let claveValida2 = claveRegex.test(inputs[3].value);

        // Si todos los campos pasaron la validacion, se registra el usuario.
        //if(nombreValido && apellidoValido && correoValido && claveValida && claveValida2){
          if(nombreValido && correoValido && claveValida && claveValida2){  
            alert("Registro exitoso");
            console.log(`
                Se registro el usuario:
                Nombre: ${inputs[0].value}
                Correo: ${inputs[1].value}
                Clave: ${inputs[2].value}
            `);
        };

        const alertas = [];
        for(let contador = 1; contador <= 4; contador++){
            alertas.push(document.createElement("span"))
        };

        switch(nombreValido){
            case true:
                inputs[0].style.borderColor = "green";
                if(document.getElementById("alertaNombre")){
                    contenedoresInputs[0].removeChild(document.getElementById("alertaNombre"));
                }
                break;
            case false:
                if(contenedoresInputs[0].childElementCount == 2){
                    console.log("ya existe la alerta nombre");
                    console.log(contenedoresInputs[0].childElementCount);
                }else{
                    console.log(alertas[0]);
                    inputs[0].style.borderColor = "red";
                    alertas[0].innerText = "Nombre inválido";
                    alertas[0].style.color = "red";
                    alertas[0].style.fontSize = "1rem";
                    alertas[0].setAttribute("id", "alertaNombre");
                    contenedoresInputs[0].appendChild(alertas[0]);
                }
                break;
        };

        switch(correoValido){
            case true:
                inputs[1].style.borderColor = "green";
                if(document.getElementById("alertaCorreo")){
                    contenedoresInputs[1].removeChild(document.getElementById("alertaCorreo"));
                }
                break;
            case false:
                if(contenedoresInputs[1].childElementCount == 2){
                    console.log("ya existe la alerta correo");
                }else{
                    inputs[1].style.borderColor = "red";
                    alertas[1].innerText = "Correo inválido";
                    alertas[1].style.color = "red";
                    alertas[1].style.fontSize = "1rem";
                    alertas[1].setAttribute("id", "alertaCorreo");
                    contenedoresInputs[1].appendChild(alertas[1]);
                }
                break;
        };

        switch(claveValida){
            case true:
                inputs[2].style.borderColor = "green";
                if(document.getElementById("alertaClave1")){
                    contenedoresInputs[2].removeChild(document.getElementById("alertaClave1"));
                }
                break;
            case false:
                if(contenedoresInputs[2].childElementCount == 2){
                    console.log("ya existe la alerta clave1");
                }else{
                    inputs[2].style.borderColor = "red";
                    alertas[2].innerText = "Clave inválida";
                    alertas[2].style.color = "red";
                    alertas[2].style.fontSize = "1rem";
                    alertas[2].setAttribute("id", "alertaClave1");
                    contenedoresInputs[2].appendChild(alertas[2]);
                }
                break;
        };

        switch(claveValida2){
            case true:
                inputs[3].style.borderColor = "green";
                if(document.getElementById("alertaClave2")){
                    contenedoresInputs[3].removeChild(document.getElementById("alertaClave2"));
                }
                break;
            case false:
                if(contenedoresInputs[3].childElementCount == 2){
                    console.log("ya existe la alerta clave2");
                }else{
                    inputs[3].style.borderColor = "red";
                    alertas[3].innerText = "Clave inválida";
                    alertas[3].style.color = "red";
                    alertas[3].style.fontSize = "1rem";
                    alertas[3].setAttribute("id", "alertaClave2");
                    contenedoresInputs[3].appendChild(alertas[3]);
                }
                break;
        };

    }else{
        alert("Las claves no coinciden");
    };
});



// Actividad extra: Realizar la validacion para cada input con el evento keyUp.