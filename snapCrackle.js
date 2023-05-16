let number = parseInt(prompt("Digite um valor aqui"));

function snapCracklePrime(maxValue) {
  let str = ""; 
  let array = []; 

  for (let i = 1; i <= maxValue; i++) {

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
    array.push(str); 
  }
  return array.join(", "); 
}
let resultadoSnapCracklePrime = snapCracklePrime(number);
alert(resultadoSnapCracklePrime);
console.log(resultadoSnapCracklePrime);

