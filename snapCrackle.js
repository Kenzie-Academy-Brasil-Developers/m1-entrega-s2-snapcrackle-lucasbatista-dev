let number = parseInt(prompt("Digite um valor aqui"));

function snapCrackle(maxValue) {
  let str = "";
  for (let i = 1; i <= maxValue; i++) {
    if (i % 2 !== 0 && i % 5 == 0) {
      str += `SnapCrackle, `;
    } else if (i % 2 !== 0) {
      str += `Snap, `;
    } else {
      if (i % 5 == 0) {
        str += `Crackle, `;
      }
      if (i !== maxValue) {
        str += `${i}, `;
      } else {
        str += `${i},`;
      }
    }
  }
  return str;
}
let resultadoSnapCrackle = snapCrackle(number);
console.log(resultadoSnapCrackle);
