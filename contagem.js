// O valor de numeros inteiros entre 1 e um numero N é igual a N. Por esse motivo, fiz essa questão de acordo com minha interpretação, mostrando os numeros entre 1 e N.

numeros = []
N = prompt('Digite um numero para saber os valores inteiros entre 1 (incluido) e ele (incluido)')
for (i=1;i<=parseInt(N);i++) {
    numeros.push(i)
}
alert(numeros)
