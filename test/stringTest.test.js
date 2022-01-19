import {stringLength, reverseString, capitalizeString} from '../string';
import Calculator from '../calculator'
describe('string task', () => {
    test('Valid text length', ()=> {
        expect(stringLength('hello')).toBe(5);
    })
    
    test('String range', ()=> {
        expect(()=> {
            stringLength('');
        }).toThrow();
    })
    
    test('String range', ()=> {
        expect(()=> {
            stringLength('dwqdwqdwqdqdsadadw');
        }).toThrow();
    })
    
    test('Reverse String', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('Capitalize string', () => {
        expect(capitalizeString('hello')).toBe('Hello');
    })
})


describe("Calculator task", () => {
    
    test('Add numbers', () => {
        const sum = new Calculator()
        expect(sum.add(2,6)).toBe(8)
    })
    
    test('Subtract numbers', () => {
        const sub = new Calculator()
        expect(sub.subtract(2,6)).toBe(-4)
    })

    test('Multiply numbers', () => {
        const times = new Calculator()
        expect(times.multiply(2,6)).toBe(12)
    })

    test('Divide numbers', () => {
        const div = new Calculator()
        expect(div.divide(6,2)).toBe(3)
    })
})
