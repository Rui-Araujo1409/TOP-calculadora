//let operador = ["+", "-", "x", "/"];

const soma = (num1, num2) => num1 + num2;
const subtracção = (num1, num2) => num1 - num2;
const multiplicação = (num1, num2) => num1 * num2;
const divisão = (num1, num2) => num1 / num2;

const operate = (num1, num2, operador) => {
    switch (operador) {
        case ("+"):
            return soma(num1, num2);
            break;
        case ("-"):
            return subtracção(num1, num2);
            break;
        case ("x"):
            return multiplicação(num1, num2);
            break;
        case ("/"):
            return divisão(num1, num2);
            break;
    }
}


const ecrã = document.querySelector("#ecrã");
const numero = document.querySelectorAll(".numero");
const operador = document.querySelector(".operador");



