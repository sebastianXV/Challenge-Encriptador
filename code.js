

function toggleDarkMode() {
    var body = document.querySelector('body');
    body.classList.toggle('dark-mode');
}

document.getElementsByClassName("alerta").style.display = "none";

function ocultarTextoAside() {
    const textoAside = document.querySelector(".texto-aside");
    const textoCopiar = document.querySelector(".textoCopiar");
    const botonCopiar = document.querySelector(".copiar");
  
    if (textoCopiar.value.trim() === "") {
      textoAside.style.display = "block";
      botonCopiar.style.display = "none";
      
    } else {
      textoAside.style.display = "none";
      botonCopiar.style.display = "block";
      textoCopiar.style.backgroundImage = "none";
    }
  
    
  }
  
  function encriptarTexto() {
    const textoOriginal = document.querySelector(".encriptar").value;
    const textoEncriptado = encriptar(textoOriginal);
    document.querySelector(".textoCopiar").value = textoEncriptado;
    ocultarTextoAside(); // Ocultar texto aside después de encriptar
    document.querySelector(".encriptar").value = ""; // Limpiar el campo de encriptar
    document.querySelector(".copiar").style.display = "block"; // Mostrar el botón de copiar
  }
  
  function desencriptarTexto() {
    const textoEncriptado = document.querySelector(".encriptar").value;
    const textoOriginal = desencriptar(textoEncriptado);
    document.querySelector(".textoCopiar").value = textoOriginal;
    ocultarTextoAside(); // Ocultar texto aside después de desencriptar
    document.querySelector(".copiar").style.display = "block"; // Mostrar el botón de copiar
  }
  
  
  // Resto del código...
  
  
  

  function encriptar(texto) {
    let textoEncriptado = texto.toLowerCase();
    textoEncriptado = textoEncriptado.replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
    return textoEncriptado;
  }

  function desencriptar(textoEncriptado) {
    let textoOriginal = textoEncriptado;
    textoOriginal = textoOriginal.replace(/enter/g, "e");
    textoOriginal = textoOriginal.replace(/imes/g, "i");
    textoOriginal = textoOriginal.replace(/ai/g, "a");
    textoOriginal = textoOriginal.replace(/ober/g, "o");
    textoOriginal = textoOriginal.replace(/ufat/g, "u");
    return textoOriginal;
  }

  function copiarResultado() {
    const resultado = document.querySelector(".textoCopiar");
    resultado.select();
    resultado.setSelectionRange(0, 99999);
    
      const successful = document.execCommand("copy");
  }
  
