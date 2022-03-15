import {map,filter,reduce, forEach} from './utility.js';

mapFunction();
filterFunction();
reduceFunction();
forEachFunction();

function mapFunction(){
    var numbers = [1,2,3,4,5,6];
    var modifiedNumbers = map(numbers,multiplyByFive);
    //Displaying the list of numbers after modifying with the map function
    console.log("Result of map function : "+modifiedNumbers);
}

function filterFunction(){
    var numbers = [1,2,3,4,5,6];
    var modifiedNumbers = filter(numbers,checkIfEven);
    //Displaying the list of numbers after modifying with the filter function
    console.log("Result of filter function : "+modifiedNumbers);
}

function reduceFunction(){
    var numbers = [1,2,3,4,5,6];
    var reducedValue = reduce(numbers,0,sumOfSquareRoot);
    //Displaying the value after reducing the array into single value with the reduce function
    console.log("Result of reduce function : "+ reducedValue);
}

function forEachFunction(){
    var numbers = [1,2,3,4,5,6];
    forEach(numbers,divideNumberByTwo);
    //Displaying the numbers after modifying them with the forEach function
    console.log("Result of forEach function : "+ numbers);
}

function multiplyByFive(number){
    return number*5;
}

function checkIfEven(number){
    return number%2==0;
}
function sumOfSquareRoot(total, number){
    return total + Math.sqrt(number);
}
function divideNumberByTwo(item,index,arr){
    arr[index] = item/2;
}