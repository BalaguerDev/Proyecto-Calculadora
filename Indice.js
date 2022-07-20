//
// INDICE

// Variables creadas de display, botones y operadores

/* creo las dos variables para el display el "anterior=ya marcado" "actual=recien pulsado" */
let displayValorAnterior =document.queryElementById("valoranterior")
let displayValorActual =document.queryElementById("valoractual")


/* variable con todos los botones "numero y operadores" */
let botonesNumeros = Document.querySelectorAll(".numero")
let botonesOperadores = document.querySelectorAll(".operador")


/* creamos la "funcion para que calcule la clase que hemos creado*/
let calculadora = new Calculadora()

let display = new Display (displayValorAnterior, displayValorActual)


//cada uno de los botones (elegimos forEach)
botonesNumeros.forEach(boton => {
    boton.addEventListener ('click', () => display.agregarNumero(boton.innerHTML));
});


//
//
// CALCULADORA

/* creamos la clase calculadora para indicarle que acciones queremos que haga*/
class Calculadora{
    sumar(num1, num2){
        return num1 + num2;
    }


    restar(num1, num2){
        return num1 - num2;
    }

    multiplicar(num1, num2){
        return num1 * num2;
    }

    dividir(num1, num2){
        return num1 / num2;
    }
}



//
//
// DISPLAY

// creamos la "funcion para que calcule la clase que hemos creado
// vamos a añadirle los dos valores de display"valoractual y valoranterior"
// "constructor" nos permite pasarle valores para instanciarla
// "this"

class Display{
    constructor(displayValorAnterior, displayValorActual){
       this.displayValorActual = displayValorActual;
       this.displayValorAnterior = displayValorAnterior; 
       this.calculadora = new Calculadora();
       this.valorActual = '';
       this.valorAnterior = '';
    }
}

agregarNumero(numero){
    this.valorActual = numero;
    this.imprimirValores();
}
    

imprimirValores() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = this.valorAnterior;
}


