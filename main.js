function calcularResultadoMateria() {
    let materia = prompt("BIENVENID@S AL CALCULADOR DE PROMEDIOS :  \nPor favor ingrese el nombre de la materia a consultar:");

    let nota1;
    while (true) {
        nota1 = parseFloat(prompt("Ingrese la nota del primer cuatrimestre:"));
        if (!isNaN(nota1) && nota1 >= 1 && nota1 <= 10) {
            break;
        }
        alert("La nota del primer cuatrimestre debe ser un número válido entre 1 y 10.");
    }

    let nota2;
    while (true) {
        nota2 = parseFloat(prompt("Ingrese la nota del segundo cuatrimestre:"));
        if (!isNaN(nota2) && nota2 >= 1 && nota2 <= 10) {
            break;
        }
        alert("La nota del segundo cuatrimestre debe ser un número válido entre 1 y 10.");
    }

    let nota3;
    while (true) {
        nota3 = parseFloat(prompt("Ingrese la nota del tercer cuatrimestre:"));
        if (!isNaN(nota3) && nota3 >= 1 && nota3 <= 10) {
            break;
        }
        alert("La nota del tercer cuatrimestre debe ser un número válido entre 1 y 10.");
    }

    let sumaNotas = nota1 + nota2 + nota3;
    let promedio = sumaNotas / 3;

    let resultado;
    switch (true) {
        case promedio >= 7:
            resultado = "Felicitaciones :) aprobaste la materia !";
            break;
        case promedio >= 4:
            resultado = "Debes rendir en diciembre";
            break;
        default:
            resultado = "Debes rendir en marzo";
            break;
    }

    alert(`PARA LA MATERIA: ${materia} \nTU PROMEDIO ES: ${promedio.toFixed(2)} \nPOR LO TANTO: ${resultado}`);
}

calcularResultadoMateria();