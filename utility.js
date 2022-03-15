// implementation of map in-built function
export function map(numbers,customFunction){
    var result = [];
    for(var index = 0;index<numbers.length;index++){
        var modifiedNumber = customFunction(numbers[index]);
        result.push(modifiedNumber);
    }
    return result;
}
// implementation of filter in-built function
export function filter(numbers,customFunction){
    var result = [];
    for(var index = 0;index<numbers.length;index++){
        if(customFunction(numbers[index])){
            result.push(numbers[index]);
        }
    }
    return result;
}
// implementation of reduce in-built function
export function reduce(numbers,number,customFunction){
    var result = number;
    for(var index = 0;index<numbers.length;index++){
        result = customFunction(result,numbers[index]);
    }
    return result;
}
// implementation of forEach in-built function
export function forEach(numbers, customFunction){
    for(var index = 0;index<numbers.length;index++){
        customFunction(numbers[index],index,numbers);
    }
}