function doubleArrayElements(arr, callback) {
    return arr.map(callback);
}

function doubleValue(value) {
    return value * 2;
}


const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArrayElements(numbers, doubleValue);

console.log(doubledNumbers); 
