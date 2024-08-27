const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensajes");

let historial = [];

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = 'none'; // Oculta la imagen del muñeco
    agregarAlHistorial(textoEncriptado);
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(mensaje.value);
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = 'none'; // Oculta la imagen del muñeco
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return stringDesencriptada;
}

function agregarAlHistorial(texto) {
    historial.push(texto);
    actualizarHistorial();
}

function actualizarHistorial() {
    mensaje.value = historial.join('\n'); // Muestra el historial en el textarea
}

function copiarTexto() {
    navigator.clipboard.writeText(mensaje.value).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar al portapapeles:', err);
    });
}
