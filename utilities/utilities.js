// Given array, find maximum value
function getMax(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        totalLoop++;
        arrComp++;
        totalComp++;
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
// Given array, find minimum value
function getMin(arr){
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        totalLoop++;
        arrComp++;
        totalComp++;
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

// Swap arr[i] with arr[j]
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}

// Checks if all values are in order
function isSorted(arr){
    for(let i = 1; i < arr.length; i++){
        if(arr[i-1] > arr[i]){
            return false;
        }
    }
    return true;
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Radom int for spiral
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}