const decimal = [1449, 600, 500, 400, 100, 80, 50, 6, 5, 4, 3, 2, 1];
const roman = ["MCDXLIX", "DC", "D", "CD", "C", "LXXX", "L", "VI", "5", "IV", "III", "II", "I"];

function romanToInt(str) {
  try {
    if (str === "" || str === undefined) {
      throw new Error("Falta parametro.");
    } else if (typeof str !== "string") {
      throw new Error("Digite apenas letras");
    } else {
      let result = 0;
      for (let i in decimal) {
        while (str.indexOf(roman[i]) === 0) {
          result += decimal[i];
          str = str.replace(roman[i], "");
        }
      }
      return result;
    }
  } catch (e) {
    return e.message;
  }
}
function intToRoman(num) {
  try {
    if (num === "" || num === undefined) {
      throw new Error("Falta parametro.");
    } else if (num === 0) {
      throw new Error("Não existe 0 em algarismos romanos.");
    } else if (typeof num !== "number") {
      throw new Error("Por favor digite somente numero.");
    } else {
      let result = "";
      for (let i in decimal) {
        while (num % decimal[i] < num) {
          result += roman[i];
          num -= decimal[i];
        }
      }
      return result;
    }
  } catch (e) {
    return e.message;
  }
}
module.exports.romanToInt = romanToInt;
module.exports.intToRoman = intToRoman;

