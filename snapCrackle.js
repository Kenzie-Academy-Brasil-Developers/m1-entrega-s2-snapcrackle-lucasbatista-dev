let number = parseInt(prompt("Digite um valor aqui"));

function snapCracklePrime(maxValue) {
  let str = ""; //string que recebe os valores
  let array = []; // array que recebe a string

  for (let i = 1; i <= maxValue; i++) {
    //lopp para definir os demais numeros

    if (i % 2 !== 0 && i % 5 == 0) {
      str = "SnapCrackle";
    } else if (i % 2 !== 0) {
      str = "Snap";
    } else if (i % 5 == 0) {
      str = "Crackle";
    } else if (i !== maxValue) {
      str = i;
    } else {
      str = i;
    }
    array.push(str); //envio dos dados da string para a array
  }
  return array.join(", "); //converter todos os elementos do array para uma string, concatenando com a" ,"" e o espaço
}
let resultadoSnapCracklePrime = snapCracklePrime(number);
alert(resultadoSnapCracklePrime);
console.log(resultadoSnapCracklePrime);

//resultado esperado: Snap, 2, Snap, 4, SnapCrackle, 6, Snap, 8, Snap, Crackle, Snap, 12
//resultado obtido:   Snap, 2, Snap, 4, SnapCrackle, 6, Snap, 8, Snap, Crackle, Snap, 12
