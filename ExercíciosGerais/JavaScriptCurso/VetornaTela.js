let valores = [7,8,9,6,4,2,1]
valores.sort()
/*for(let pos=0;pos < valores.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}