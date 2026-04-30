// Exercise 02: FizzBuzz
// Print numbers from 1 to 100.
// For multiples of 3, print "Fizz".
// For multiples of 5, print "Buzz".
// For numbers divisible by both 3 and 5, print "FizzBuzz".


let number = 1
let fizz = 'Fizz'
let buzz = 'Buzz'
let fizzBuzz = 'FizzBuzz'

while (number <= 100) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log(
            fizzBuzz
        );
    }
    else if (number % 3 === 0) {
        console.log (
            fizz
        );
        
    } 
    else if (number % 5 === 0) {
        console.log (
            buzz
        );
        
    }  
    
    else{
        console.log(
            number
        );
    }
       
    number++
}