import { isLowerCase } from "./lower-case.validator";

describe('O validator LowerCase', () => {

    it('Deve aceitar letras minusculas', () => {
        expect(isLowerCase('test')).toBeTruthy();
    });

    it('Deve validar quando um valor recebido é minusculo', () => {
        expect(isLowerCase('TESTes')).toBeFalsy();
    });

    it('Deve validar quando o valor recebido for nulo', () => {
        expect(isLowerCase('')).toBeFalsy();
    });
})