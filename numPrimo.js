function ePrimo(num) {
    for (var i=2;i<num;i++) {
        if (num%i===0) {
            alert('Nao e primo')
        }
        else {
            alert('E primo')
        }
    }
}
var numero = prompt('Digite um numero para saber se ele e primo')
ePrimo(numero)
