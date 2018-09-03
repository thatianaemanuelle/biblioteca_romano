var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
const convert = require('../index');


describe('romanToInt()', function () {
    it('Deve lançar um erro', () => {
        assert(convert.romanToInt(), 'Falta parametro.');
        assert(convert.romanToInt(""), 'Falta parametro.');
    });
    it('Deve lançar um erro', () => {
        assert(convert.romanToInt(1234), 'Apenas letras.');
    });
    it('Deve receber um int e retornar uma string', () => {
        assert(convert.romanToInt('LXVI'), 66);
    });
    it('Deve receber um int e retornar uma string', () => {
        assert(convert.romanToInt('CDLXXXV'), 485);
    });
    it('Deve receber um int e retornar uma string', () => {
        assert(convert.romanToInt('XXVI'), 26);
    });
    it('Deve receber um int e retornar uma string', () => {
        assert(convert.romanToInt('MI'), 1001);
    });
    it('Deve receber um int e retornar uma string', () => {
        assert(convert.romanToInt('DCLXVI'), 666);
    });
});
describe('intToRoman()', function () {
    it('Deve lançar um erro', () => {
        assert(convert.intToRoman(), 'Falta parametro.');
        assert(convert.intToRoman(""), 'Falta parametro.');
    });
    it('Deve lançar um erro', () => {
        assert(convert.intToRoman(0), 'Não existe 0.');
    });
    it('Deve lançar um erro', () => {
        assert(convert.intToRoman("abc"), 'Digite apenas números.');
    });
    it('Deve receber uma string e retornar um int', () => {
        assert(convert.intToRoman(1), 'I');
    });
    it('Deve receber uma string e retornar um int', () => {
        assert(convert.intToRoman(2), 'II');
    });
    it('Deve receber uma string e retornar um int', () => {
        assert(convert.intToRoman(3), 'II');
    });
    it('Deve receber uma string e retornar um int', () => {
        assert(convert.intToRoman(4), 'IV');
    });
    it('Deve receber uma string e retornar um int', () => {
        assert(convert.intToRoman(100), 'C');
    });
    it('Deve receber uma string e retornar um int', () => {
        assert(convert.intToRoman(34), 'XXXIV');
    });
});