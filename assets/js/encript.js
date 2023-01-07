function encriptar() {
    // Obtiene el mensaje del campo de entrada
    const mensajePorEncriptar = document.getElementById('messageInput').value;

    // Crea una lista de vocales
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    // Crea una lista de letras para reemplazar las vocales
    const reemplazos = ['ai', 'enter', 'imes', 'ober', 'ufat'];

    // Convierte el mensaje en una matriz de caracteres
    const mensajeLetras = mensajePorEncriptar.split('');

    // Recorre cada carácter del mensaje
    for (let i = 0; i < mensajeLetras.length; i++) {
      // Si el carácter es una vocal, lo reemplaza con la letra correspondiente
      if (vocales.includes(mensajeLetras[i])) {
        const indiceVocales = vocales.indexOf(mensajeLetras[i]);
        mensajeLetras[i] = reemplazos[indiceVocales];
      }
    }

    // Convierte la matriz de caracteres de nuevo en una cadena y la muestra en la página
    document.getElementById('output').value = mensajeLetras.join('');
    //document.getElementById('output').innerHTML = mensajeLetras.join('');
  }

  function copiatexto() {
    // Obtiene el elemento de salida
    const salida = document.getElementById('output');

    // Selecciona el contenido del elemento de salida
    salida.select();

    // Copia el contenido seleccionado al portapapeles
    document.execCommand('copy');
  }

  function limpiar() {
    document.getElementById("messageInput").value = "";
    document.getElementById("messageInput2").value = "";
    document.getElementById("output").value = "";
    document.getElementById("output2").value = "";
  }