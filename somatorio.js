numeros = []
somatorio = 0
var input = prompt('Digite numeros a serem somados')
numeros = input.split(' ')
for (i=0;i<numeros.length;i++) numeros[i] = parseInt(numeros[i])
for (i=0;i<numeros.length;i++) somatorio = somatorio + numeros[i]
alert('Somatorio = ' + somatorio)
