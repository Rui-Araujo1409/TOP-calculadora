//let operador = ["+", "-", "x", "/"];

const soma = (num1, num2) => parseInt(num1) + parseInt(num2);
const subtracção = (num1, num2) => parseInt(num1) - parseInt(num2);
const multiplicação = (num1, num2) => parseInt(num1) * parseInt(num2);
const divisão = (num1, num2) => parseInt(num1) / parseInt(num2);

const operate = (num1, num2, operador) => {
    switch (operador) {
        case ("+"):
            return soma(num1, num2);
            break;
        case ("-"):
            return subtracção(num1, num2);
            break;
        case ("X"):
            return multiplicação(num1, num2);
            break;
        case ("/"):
            return divisão(num1, num2);
            break;
    }
}


const ecrã = document.querySelector("#ecrã");
const teclado = document.querySelector("#teclado");
/* const n0 = document.querySelector("#n0");
const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const n3 = document.querySelector("#n3");
const n4 = document.querySelector("#n4");
const n5 = document.querySelector("#n5");
const n6 = document.querySelector("#n6");
const n7 = document.querySelector("#n7");
const n8 = document.querySelector("#n8");
const n9 = document.querySelector("#n9");
const adição = document.querySelector("#soma");
const sub = document.querySelector("#sub");
const multi = document.querySelector("#multi");
const divi = document.querySelector("#divi");
const igual = document.querySelector("#igual");
const apagar = document.querySelector("#apagar"); */

let valor = "";
let resultado = 0;
let regex = /[+-/X]/g;
let operador;
let numeros;


teclado.addEventListener("click", (e) => {
    let target = e.target;

    switch (target.id) {
        case "n0":
            ecrã.value += "0";
            break;
        case "n1":
            ecrã.value += "1";
            break;
        case "n2":
            ecrã.value += "2";
            break;
        case "n3":
            ecrã.value += "3";
            break;
        case "n4":
            ecrã.value += "4";
            break;
        case "n5":
            ecrã.value += "5";
            break;
        case "n6":
            ecrã.value += "6";
            break;
        case "n7":
            ecrã.value += "7";
            break;
        case "n8":
            ecrã.value += "8";
            break;
        case "n9":
            ecrã.value += "9";
            break;
        case "soma":
            valor = ecrã.value;
            operador = valor.match(regex);
            if (operador) {
                numeros = valor.split(regex);
                resultado = operate(numeros[0], numeros[1], operador[0]);
                console.log(resultado);
                ecrã.value = resultado;
                ecrã.value += "+";
            } else {
                ecrã.value += "+";
                valor = ecrã.value;
                console.log(valor);
            }
            break;
        case "sub":
            valor = ecrã.value;
            operador = valor.match(regex);
            if (operador) {
                numeros = valor.split(regex);
                resultado = operate(numeros[0], numeros[1], operador[0]);
                console.log(resultado);
                ecrã.value = resultado;
                ecrã.value += "-";
            } else {
                ecrã.value += "-";
                valor = ecrã.value;
                console.log(valor);
            }
            break;
        case "multi":
            valor = ecrã.value;
            operador = valor.match(regex);
            if (operador) {
                numeros = valor.split(regex);
                resultado = operate(numeros[0], numeros[1], operador[0]);
                console.log(resultado);
                ecrã.value = resultado;
                ecrã.value += "X";
            } else {
                ecrã.value += "X";
                valor = ecrã.value;
                console.log(valor);
            }
            break;
        case "divi":
            valor = ecrã.value;
            operador = valor.match(regex);
            if (operador) {
                numeros = valor.split(regex);
                resultado = operate(numeros[0], numeros[1], operador[0]);
                console.log(resultado);
                ecrã.value = resultado;
                ecrã.value += "/";
            } else {
                ecrã.value += "/";
                valor = ecrã.value;
                console.log(valor);
            }
            break;
        case "igual":
            valor = ecrã.value;
            console.log(valor);
            operador = valor.match(regex);
            numeros = valor.split(regex);
            resultado = operate(numeros[0], numeros[1], operador[0]);
            console.log(resultado);
            ecrã.value = resultado;
            break;
        case "apagar":
            ecrã.value = "";
            valor = "";
            break;
    }
})


