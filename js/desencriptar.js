function desencriptar() {
    var texto = document.getElementById("texto-ingresado").value;
    var texto_desencriptado = "";
    var salida = document.getElementById("texto-salida");
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === "a" && texto[i + 1] === "i") {
            // Si es ai se transforma en "a" en la posición i
            texto_desencriptado += "a";
            i++;
        } else if (texto[i] === "e" && texto[i + 1] === "n" && texto[i + 2] === "t" && texto[i + 3] === "e" && texto[i + 4] === "r") {
            // Si es enter se transforma en "e" en la posición i
            texto_desencriptado += "e";
            i += 4;
        } else if (texto[i] === "i" && texto[i + 1] === "m" && texto[i + 2] === "e" && texto[i + 3] === "s") {
            // Si es imes se transforma en "i" en la posición i
            texto_desencriptado += "i";
            i += 3;
        } else if (texto[i] === "o" && texto[i + 1] === "b" && texto[i + 2] === "e" && texto[i + 3] === "r") {
            // Si es ober se transforma en "o" en la posición i
            texto_desencriptado += "o";
            i += 3;
        } else if (texto[i] === "u" && texto[i + 1] === "f" && texto[i + 2] === "a" && texto[i + 3] === "t") {
            // Si es ufat se transforma en "u" en la posición i
            texto_desencriptado += "u";
            i += 3;
        } else {
            // Si no es ninguna vocal se deja igual
            texto_desencriptado += texto[i];
        }
    }
    console.log(texto_desencriptado);
    salida.innerHTML = "";
    // Nuevo div para mostrar el texto desencriptado
    var texto_desencriptado_div = document.createElement("div");
    texto_desencriptado_div.setAttribute("id", "texto-final");
    texto_desencriptado_div.setAttribute("class", "texto-final");
    texto_desencriptado_div.innerHTML = texto_desencriptado;
    // Se agrega el div a la salida
    salida.appendChild(texto_desencriptado_div);
    // Se agrega el botón para copiar el texto desencriptado
    var boton_copiar = document.createElement("button");
    boton_copiar.setAttribute("id", "boton-copiar");
    boton_copiar.setAttribute("class", "boton-copiar");
    boton_copiar.setAttribute("onclick", "copiarTexto()");
    boton_copiar.innerHTML = "Copiar";
    // Se agrega el botón a la salida
    salida.appendChild(boton_copiar);
    
}