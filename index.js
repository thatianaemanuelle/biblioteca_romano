const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

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

