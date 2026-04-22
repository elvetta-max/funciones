/**
 * EJERCICIO 1  
 */
console.log("============== EJERCICIO 1 ==============");
function saludar() {

    let nombre = prompt(`Escribe tu numbre`);

    console.log(`Hola! ${nombre}`);
}
// saludar();

/**
 * EJERCICIO 2 
 */
console.log("============== EJERCICIO 2 ==============");

function sumaDosNumeros(a, b) {
    console.log(a + b);
}

sumaDosNumeros(4, 66);

/**
 * EJERCICIO 3 
 */
console.log("============== EJERCICIO 3 ==============");
function esPar(a) {
    return (a % 2 == 0) ? true : false;
}
console.log(esPar(21));

/**
 * EJERCICIO 4 
 */
console.log("============== EJERCICIO 4 ==============");
function mayorDeTres(a, b, c) {
    if (a > b && a > c) {
        console.log(`El MAYOR es ${a}`)
    } else if (b > c) {
        console.log(`El MAYOR es ${b}`)
    }
    else {
        console.log(`El MAYOR es ${c}`)
    }
}
mayorDeTres(2, 33, 23);

/**
 * EJERCICIO 5 
 */
console.log("============== EJERCICIO 5 ==============");
function celsiusAFahrenheit(gradosCelsius) {

    let gradosFahrenheit = (gradosCelsius * 9 / 5) + 32;
    
    console.log(`${gradosCelsius}°C = ${gradosFahrenheit}F`);
}

celsiusAFahrenheit(10);