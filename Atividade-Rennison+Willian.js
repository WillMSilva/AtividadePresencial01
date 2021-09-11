const peças = ['Parafuso','TL','martelo']
const peso = 120;

console.log("Peso Inferior a 100g?");

if(peso <= 100){
    console.log("Peça não pode ser cadastrada")
}
else {
    console.log (": peça pode ser cadastrada!!!");
}



console.log("Quantidade de caracteres");
for(let index = 0; index < peças.length; index++){
    const atual = peças[index];
    if (atual.length <3){
    console.log(atual + ": peça possui caracteres inferior a 3 e não pode ser cadastrado!!!");
    }
    else {
        console.log (atual + ": peça pode ser cadastrado!!!");
    }
}
const caixa = 0;
for (var x = 1; x<=10; x++){
    console.log(caixa);
    console.log ("Tem " + x +" peças na caixa ");
}