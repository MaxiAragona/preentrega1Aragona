function calcularResultadoMateria() {
    let materia = prompt("Bienvenid@s al calculador de promedios :D  Por favor ingrese el nombre de la materia a consultar:");
    
    let nota1;
    while (true) {
        nota1 = parseFloat(prompt("Ingrese la nota del primer cuatrimestre:"));
        if (!isNaN(nota1)) {
            break; 
        }
        alert("La nota del primer cuatrimestre no es un número válido.");
    }
    
    let nota2;
    while (true) {
        nota2 = parseFloat(prompt("Ingrese la nota del segundo cuatrimestre:"));
        if (!isNaN(nota2)) {
            break; 
        }
        alert("La nota del segundo cuatrimestre no es un número válido.");
    }
    
    let nota3;
    while (true) {
        nota3 = parseFloat(prompt("Ingrese la nota del tercer cuatrimestre:"));
        if (!isNaN(nota3)) {
            break; 
        }
        alert("La nota del tercer cuatrimestre no es un número válido.");
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
  
    alert("Para la Materia: " + materia + "\nTu Promedio es: " + promedio.toFixed(2) + "\nPor lo tanto : " + resultado);
}

calcularResultadoMateria();