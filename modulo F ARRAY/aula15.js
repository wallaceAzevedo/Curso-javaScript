//https://www.youtube.com/watch?v=XdkW62tkAgU&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=22

var num = [4, 5, 6, 7, 8]

//num.sort() coloca em ordem crescente
num.sort()
// este for vai executar ate terminar a quantidade de indices que vem do array intependente a quantidade se for 10 indices seram 10 se for mil sera mil vezes
//FOR SO FUNCIONA EM ARRAY E EM OBJETOS 

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
