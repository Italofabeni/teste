var hora = 0
console.log (`Agora são exatamente ${hora} horas.`)
if( hora <= 12 && hora > 5) {
    console.log ('Bom dia')
} else if (hora <= 18 && hora > 12) {
    console.log('Boa tarde')
} else if (hora <= 23 && hora > 18){
    console.log('Boa noite')
} else {
    console.log('Boa madrugada')
}
    

