function printArray(arr) {
    console.log(arr);
}

function fillAndPrintRandomArray(length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    printArray(arr);
}

function findMin(a, b, c) {
    if (a <= b && a <= c) {
        return a;
    } else if (b <= a && b <= c) {
        return b;
    } else {
        return c;
    }
}

function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

function findMaxInArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMinInArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

function averageArray(arr) {
    let sum = sumArray(arr);
    return sum / arr.length;
}

function getObjectKeysArray(arr) {
    let keys = [];
    for (let obj of arr) {
        keys.push(...Object.keys(obj));
    }
    return keys;
}

function getObjectValuesArray(arr) {
    let values = [];
    for (let obj of arr) {
        values.push(...Object.values(obj));
    }
    return values;
}

function sumArraysByIndex(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    return result;
}

let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5];
let sumResult = sumArraysByIndex(arr1, arr2);
console.log(sumResult);
