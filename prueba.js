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


//Defino el dia de referencia como valor numerico en formato ms
const referenceDayAsNum = 1679270400000;
//Defino un dia en formato ms (24x60x60x1000)
const oneDayAsNum = 86400000;

//Hago la funcion que tiene el evento blur que coge como valor el input date
function calculateIntervalDays() {
    let dateInput$$ = document.body.querySelector("#date");
    dateInput$$.addEventListener("blur", handleInputDate);
}

function removeVocalsAndSpaces() {
    let nameInput$$ = document.body.querySelector("#name");
    nameInput$$.addEventListener("blur", handleInputName);
}

function handleInputName() {
    let nameResult$$ = document.body.querySelector("#nameWithoutVocals");
    //Hago una variable string vacia a la que le añado los caracteres que necesito
    let result = "";
    nameResult$$.value = this.value;
    for (let i = 0; i < this.value.length; i++) {
        if (this.value[i] !== "a" && this.value[i] !== "e" && this.value[i] !== "i" && this.value[i] !== "o" && this.value[i] !== "u" && this.value[i] !== " " && 
        this.value[i] !== "A" && this.value[i] !== "E" && this.value[i] !== "I" && this.value[i] !== "O" && this.value[i] !== "U") {
            result += this.value[i];
        }
    }
    nameResult$$.value = result;
    return nameResult$$.value;
}


//Hago el evento que traduce el valueAsNumber en dias y calcula la diferencia con respecto al valor de referencia
function handleInputDate() {
    let valueAsNumber$$ = this.valueAsNumber;
    let dayResult$$ = document.body.querySelector("#days");
    dayResult$$.value = (referenceDayAsNum - valueAsNumber$$) / oneDayAsNum;
}

removeVocalsAndSpaces();
calculateIntervalDays();
//aqui iran los eventos