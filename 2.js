let peso = 60;
let altura = 1.67;
let imc = peso / (altura * altura)

if(imc < 18.5){
    console.log('Abaixo de 18.5: Seu IMC é de ' + imc.toFixed(1) + ' Você está abaixo do peso.')
}else if(imc > 18.5 && imc < 25 ){
    console.log('Entre 18.5 e 25: Seu IMC é de ' + imc.toFixed(1) + ' Seu peso está normal.')
}else if(imc > 25 && imc < 30){
    console.log('Entre 25 e 30: Seu IMC é de ' + imc.toFixed(1) + ' Você está com sobrepeso.')
}else if(imc > 30 && imc < 40){
    console.log('Entre 30 e 40: Seu IMC é de ' + imc.toFixed(1) + ' Você está Obeso.')
}else{
    console.log('Maior que 40: Seu IMC é de ' + imc.toFixed(1) + ' Você está Obeso Grave.')
}


