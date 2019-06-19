// 1. Using push and unshift, make this array contain the numbers from zero through seven:
const arr = [2, 3, 4];

arr.unshift(0,1);
arr.push(5,6,7);

arr; // => [0, 1, 2, 3, 4, 5, 6, 7]

//extra
arr.push([8,9,10]); //[0, 1, 2, 3, 4, 5, 6, 7, Array(3)]
arr.flat(); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// 2. What is returned by push? Before throwing this into the console, form a hypothesis about what you think the return value will be:
const arr = [5, 7, 9];
arr.push(6); // returns [5, 7, 9, 6]


// 3. Change all numbers to be those numbers multiplied by two:
const numbers = [4, 9, 7, 2, 1, 8];

for(let i = 0; i < numbers.length; i++){
	numbers[i] = numbers[i] *2;
}

numbers; // => [8, 18, 14, 4, 2, 16]


// 4. Change all odd numbers to be those numbers multiplied by two:
const numbers = [4, 9, 7, 2, 1, 8];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 !== 0)
	numbers[i] = numbers[i] *2;
}

numbers; // => [4, 18, 14, 2, 2, 8]


// 5. Create an array to hold your favorite colors. For each choice, log to the screen a string like: My #1 choice is blue.
const colors = ['blue','pink','black','green'];
for(let i = 0; i < colors.length; i++){
	console.log(`My #1 choice is ${colors[i]}`);
}


// 6. Create an array of ages. Loop through and log only the ages that are over 21.
const ages = [12,20,17,23,19,34,40,2];
for(let i = 0; i < ages.length; i++){
    if(ages[i] > 21)
	console.log(ages[i]);
}


// 7. Starting with an empty array called rainbowColors:
const rainbowColors = [];
//Add "orange" to the end of the array
rainbowColors.push('orange');
//Add "red" to the start of the array
rainbowColors.unshift('red');
//Add "yellow" to the end
rainbowColors.push('yellow');
//Add "green", "blue", "indigo", and "violet" to the end of the array
rainbowColors.push('green', 'blue', 'indigo', 'violet');
/*Try and do this using one method
Print the length of the array
Print the second item
Print the last item (make this flexible/dynamic!)
Print the index of the string "blue" */
const printArr = function(){
    console.log(rainbowColors.length);
    console.log(rainbowColors[1]);
    console.log(rainbowColors[rainbowColors.length - 1]);
    console.log(rainbowColors.indexOf('blue'));
}


// 8. Find out the difference between .slice and .splice
//Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
const twoColors = rainbowColors.slice(1,3);

//Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)
var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(2,2);
nums.splice(3,1);

// 9. Work with arrays of arrays
//Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
//Access "inner array first item" and print it out"
console.log(arrOfArrs[0][0]);
//Print "third" by using a dynamic index
console.log(arrOfArrs[1][arrOfArrs[1].length-1]);


// 10. Create an array to hold your top five choices of something (music, books, movies, whatever).
const choices = ['music', 'books', 'movies', 'whatever'];
//For each choice, log to the screen a string like: "My #1 choice is blue."
//Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
let choiceNum = 1;
for(let i = 0; i < choices.length; i++){
    console.log(`My #${choiceNum} choice is ${choices[i]}`);
    choiceNum++;
}