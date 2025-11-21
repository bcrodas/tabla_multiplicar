//capturar el formulario
const form = document.getElementById('tabla');
const button = document.getElementById('button-addon2');

//agregar un evento al boton
button.addEventListener('click', function(event) {
    event.preventDefault();
    const numero = document.getElementById('numero').value;
    let resultado = '';
// se usa el ciclo do while para generar la tabla de multiplicar
    let i = 1;
    do {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
        i++;
    } while (i <= 12);

    document.getElementById('resultado').value = resultado; //mostrar el resultado
});
