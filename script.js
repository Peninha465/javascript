/* 
    Solicite ao usuário a inserção de dois números e calcular:

    - A soma de dois numeros
    - A subtração de dois numeros
    - A multiplicação de dois numeros
    - A divisão de dois numeros
    - O resto da divisão dos dois numeros

*/

let firstNumber = prompt('Insira o primeiro número.')
let secondNumber = prompt('Insira o segundo número.')

firstNumber  = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum  = firstNumber + secondNumber
const sub  = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div  = firstNumber / secondNumber
const rest = firstNumber % secondNumber

if(firstNumber === secondNumber){
    alert('Os numeros são iguais.')
} else {
    alert('Os numeros são diferentes.')
}

alert('A soma é: ' + sum)

if(sum % 2 === 0){
    alert('A soma é um número par.')
} else {
    alert('A soma é um número impar.')
}

alert('A subtração é: ' + sub)
alert('A multiplicação é: ' + mult)
alert('A divisão é: ' + div)
alert('O resto da divisão é: ' + rest)

