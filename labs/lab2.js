let mixedArray = [42, 'apple', true, 7, 'banana', false, 'carrot', 99];

let numbers = mixedArray.filter(element => typeof element === 'number');

console.log(numbers);

let longStrings = mixedArray.filter(element => typeof element === 'string' && element.length >= 4);
console.log(longStrings);

let trueBooleans = mixedArray.filter(element => typeof element === 'boolean' && element === true);
console.log(trueBooleans);

let hundredArray = Array.from({ length: 100 }, (_, i) => i + 1);

console.log(hundredArray);

let evenIndexes = hundredArray.filter((_, index) => index % 2 === 0);
console.log(evenIndexes);

let multiplesOfThreeIndexes = hundredArray.filter((_, index) => index % 3 === 0);
console.log(multiplesOfThreeIndexes);

let languages1 = ['js', 'css', 'jq'];
console.log(languages1.shift());

let languages2 = ['js', 'css', 'jq'];
console.log(languages2.pop());

let numbersArray1 = [1, 2, 3, 4, 5];
let removedElements1 = numbersArray1.splice(3, 2);
numbersArray1.push('a', 'b', 'c');
numbersArray1.push(...removedElements1);
console.log(numbersArray1);

let numbersArray2 = [1, 2, 3, 4, 5];
numbersArray2.splice(1, 0, 'a', 'b');
numbersArray2.splice(6, 0, 'c');
numbersArray2.push('e');
console.log(numbersArray2);

let tenNumbersArray = [12, 15, 22, 29, 30, 42, 56, 63, 70, 81];
let evenNumbers = tenNumbersArray.filter(number => number % 2 === 0);
console.log(evenNumbers);


let newArray1 = [];
tenNumbersArray.forEach(number => newArray1.push(number));
console.log(newArray1);

let newArray2 = [];
for (let i = 0; i < tenNumbersArray.length; i++) {
    newArray2[i] = tenNumbersArray[i];
}
console.log(newArray2);
