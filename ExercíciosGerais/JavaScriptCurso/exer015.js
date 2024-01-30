let num = [5,4,6,7,8]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posiçôes`)
console.log(`O primeiro valor do nosso vetor é ${num[0]}`)
let pos = num.indexOf(6)
if(pos == -1) {
    console.log('O valor não foi encontrado!')
}
else {
    console.log(`O valor está na posição ${pos}`)
} 
