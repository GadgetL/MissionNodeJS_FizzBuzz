const FizzBuzzService = require('../../lib/services/FizzBuzzService')

describe("Test for FizzBuzzService", () => {
    test("'Trick' equals to '1' when explorer's score is '1'", () => {
        const explorer1 = { name: "Explorer1", score: 1 }
        const fizzBuzz = FizzBuzzService.applyValidationInExplorer(explorer1)
        expect(fizzBuzz.trick).toBe(0);
    })

    test("'Trick' equals to score's explorer when score is not divisible by 3 or 5", () => {
        const explorer1 = { name: "Explorer1", score: 2 }
        const fizzBuzz = FizzBuzzService.applyValidationInExplorer(explorer1)
        expect(fizzBuzz.trick).toBe(2);
    })

    test("'Trick' equals to 'FIZZ' when explorer's score is divisible by '3'", () => {
        const explorer1 = { name: "Explorer1", score: 3 }
        const fizzBuzz = FizzBuzzService.applyValidationInExplorer(explorer1)
        expect(fizzBuzz.trick).toBe('FIZZ');
    })

    test("'Trick' equals to 'BUZZ' when explorer's score is divisible by '5'", () => {
        const explorer1 = { name: "Explorer1", score: 5 }
        const fizzBuzz = FizzBuzzService.applyValidationInExplorer(explorer1)
        expect(fizzBuzz.trick).toBe('BUZZ');
    })

    test("'Trick' equals to 'FIZZBUZZ' when explorer's score is divisible by '5' and '3'", () => {
        const explorer1 = { name: "Explorer1", score: 15 }
        const fizzBuzz = FizzBuzzService.applyValidationInExplorer(explorer1)
        expect(fizzBuzz.trick).toBe('FIZZBUZZ');
    })
})