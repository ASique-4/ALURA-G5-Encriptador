function encriptar() {
    var texto_ingresado = document.getElementById("texto-ingresado");
    var texto = texto_ingresado.value;
    var texto_encriptado = "";
    var salida = document.getElementById("texto-salida");
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            // Si es a se transforma en "ai" en la posición i
            texto_encriptado += "ai";
        } else if (texto[i] === "e") {
            // Si es e se transforma en "enter" en la posición i
            texto_encriptado += "enter";
        } else if (texto[i] === "i") {
            // Si es i se transforma en "imes" en la posición i
            texto_encriptado += "imes";
        } else if (texto[i] === "o") {
            // Si es o se transforma en "ober" en la posición i
            texto_encriptado += "ober";
        } else if (texto[i] === "u") {
            // Si es u se transforma en "ufat" en la posición i
            texto_encriptado += "ufat";
        } else {
            // Si no es ninguna vocal se deja igual
            texto_encriptado += texto[i];
        }
    }
    console.log(texto_encriptado);
    salida.innerHTML = "";
    // Nuevo div para mostrar el texto encriptado
    var texto_encriptado_div = document.createElement("div");
    texto_encriptado_div.setAttribute("id", "texto-final");
    texto_encriptado_div.setAttribute("class", "texto-final");
    texto_encriptado_div.innerHTML = texto_encriptado;
    // Se agrega el div a la salida
    salida.appendChild(texto_encriptado_div);
    // Se agrega el botón para copiar el texto encriptado
    var boton_copiar = document.createElement("button");
    boton_copiar.setAttribute("id", "boton-copiar");
    boton_copiar.setAttribute("class", "boton-copiar");
    boton_copiar.setAttribute("onclick", "copiarTexto()");
    boton_copiar.innerHTML = "Copiar";
    // Se agrega el botón a la salida
    salida.appendChild(boton_copiar);

}