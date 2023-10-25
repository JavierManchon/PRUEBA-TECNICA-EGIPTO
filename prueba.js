// ENUNCIADO:
// EL faraón Nekgikis VII quiere traducir un nombre al egipcio antiguo. Para ello, debe eliminar las vocales y los espacios del nombre. Por ejemplo, si el nombre es "Juan", el nombre traducido será "Jn".

// También quiere saber cuántos días han pasado desde una fecha dada hasta el 20 de marzo de 2023. Por ejemplo, si la fecha es "15/03/2023", el número de días transcurridos será 5.

// Sin embargo si la fecha introducida fuera 10/03/2024, el número de días transcurridos sería -366.

// Es necesario que además se añada el evento de perder el foco (blur) a los inputs de nombre y fecha, para que el faraón pueda leer el nombre sin vocales ni espacios y los días transcurridos en los otros dos inputs correspondientes.

// Para ello, el faraón te pide que definas las siguientes funciones: calculateIntervalDays, removeVocalsAndSpaces, handleInputName y handleInputDate

// A TENER EN CUENTA:
// Te ayudará usar IDE, codepen o similar antes de pegar el código en la solución
// Ceñirse a codificar lo que se pide
// Puedes darle a comprobar tu código cuantas veces quieras, no hay límite
// Si el código no es correcto solo lo indicará, pero no da pistas
// Hazlo sencillo, simple, tal y como indica el enunciado. No te compliques
// Asegurate de haber seguido bien todas las instrucciones.

// PISTAS:
// Tu código va a interactuar con el formulario declarado más abajo
// Ten en cuenta el código HTML del formulario
// No puedes modificar el nombre de las funciones, pero puedes añadir otras si lo crees necesario.
// La función 'calculateIntervalDays' debe poder calcular días anteriores (resultado positivo) y posteriores (resultado negativo) a la fecha indicada por defecto en el parámetro toDate
// El callback del evento de perder el foco del input "Nombre" es handleInputName
// El callback del evento de perder el foco del input "Fecha" es handleInputDate.
// Averigua cómo hacer referencia a los inputs. Las devtools son tus amigas

let nameInput$$ = document.body.querySelector("#name");

//Defino el dia de referencia como valor numerico en formato ms
const referenceDayAsNum = 1679270400000;
//Defino un dia en formato ms (24x60x60x1000)
const oneDayAsNum = 86400000;

function calculateIntervalDays() {
    let dateInput$$ = document.body.querySelector("#date");
    dateInput$$.addEventListener("blur", handleInputDate);
}

function removeVocalsAndSpaces() {
    nameInput$$.addEventListener("blur", handleInputName);
}

function handleInputName() {
    let nameResult$$ = document.body.querySelector("#nameWhithoutVocals");
    let newInput$$ = document.body.querySelector("#name");
    nameResult$$.value = newInput$$.value;
    for (let i = 0; i < nameResult$$.value.length; i++) {
        if (nameResult$$.value[i] !== "a" && nameResult$$.value[i] !== "e" && nameResult$$.value[i] !== "i" && nameResult$$.value[i] !== "o" && nameResult$$.value[i] !== "u" && nameResult$$.value[i] !== " " && 
        nameResult$$.value[i] !== "A" && nameResult$$.value[i] !== "E" && nameResult$$.value[i] !== "I" && nameResult$$.value[i] !== "O" && nameResult$$.value[i] !== "U") {
            nameResult$$.value.splice(i, 1);
        }
    }
    return nameResult$$.value;
}

function handleInputDate() {
    let valueAsNumber$$ = this.valueAsNumber;
    let dayResult$$ = document.body.querySelector("#days");
    dayResult$$.value = (referenceDayAsNum - valueAsNumber$$) / oneDayAsNum;
}

removeVocalsAndSpaces();
calculateIntervalDays();
//aqui iran los eventos