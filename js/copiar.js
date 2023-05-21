function copiarTexto() {
    // Se obtiene el texto encriptado
    var texto_encriptado = document.getElementById("texto-final");
    // Se crea un elemento input
    var input = document.createElement("input");
    // Se agrega el texto encriptado al input
    input.setAttribute("value", texto_encriptado.innerHTML);
    // Se agrega el input al body
    document.body.appendChild(input);
    // Se selecciona el texto del input
    input.select();
    // Se copia el texto del input
    document.execCommand("copy");
    // Se elimina el input
    document.body.removeChild(input);
    // Se muestra un mensaje de copiado
    alert("Texto copiado");
}