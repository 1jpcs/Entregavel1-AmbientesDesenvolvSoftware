// Criei um loop infinito para essa questao porem se voce modificar o "true" para algo como "i<20" na linha 4 da para estabelecer um limite

fibonacci = [0,1]
for (i=2;true;i++) {
    fibonacci.push(fibonacci[(i-1)]+fibonacci[(i-2)])
}
