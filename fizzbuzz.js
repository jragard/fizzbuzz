function fizzbuzz(maxValue) {
    let string = "";
    for(let i = 1; i <= maxValue; i++) {
        if(i % 2 == 0 && i % 3 == 0) {
            string += 'Fizzbuzz,'
        }
        else if(i % 2 == 0) {
            string += 'Fizz,'
        }
        else if(i % 3 == 0) {
            string += 'Buzz,'
        }
        else {
            string += i + ','
        }
    }
    return string;
}