function desencriptar() {
    // Obtiene el mensaje encriptado del campo de entrada
    let mensajeEncriptado = document.getElementById('messageInput2').value;
  
    // Crear una lista de reemplazos
    const reemplazos = ['a', 'e', 'i', 'o', 'u'];
  
    // Reemplaza por la vocal correspondiente
    mensajeEncriptado = mensajeEncriptado.replace(/ai/g, reemplazos[0]);
    mensajeEncriptado = mensajeEncriptado.replace(/enter/g, reemplazos[1]);
    mensajeEncriptado = mensajeEncriptado.replace(/imes/g, reemplazos[2]);
    mensajeEncriptado = mensajeEncriptado.replace(/ober/g, reemplazos[3]);
    mensajeEncriptado = mensajeEncriptado.replace(/ufat/g, reemplazos[4]);
  
    // Muestra el mensaje desencriptado en la página
    document.getElementById('output2').value = mensajeEncriptado;
  }
  function copiatexto2() {
    // Obtiene el elemento de salida
    const salida = document.getElementById('output2');

    // Selecciona el contenido del elemento de salida
    salida.select();

    // Copia el contenido seleccionado al portapapeles
    document.execCommand('copy');
  }