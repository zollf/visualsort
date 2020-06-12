
async function radixSort(arr){
    var radix = 10;
    var max = getMax(arr);
    var min = getMin(arr);
    var exp = 1;
    totalComp++;
    while((max - min) / exp >=1){
        totalLoop++;
        arr = await radixCountSort(arr, radix, exp, min);
        exp *= radix;
        totalComp++;
    }
}

async function radixCountSort(arr, radix, exp, min){
    var i;
    var bucketIndex;
    var buckets = new Array(radix);
    var output = new Array(arr.length);
    
    for(i = 0; i < radix; i++){
        buckets[i] = 0;
        totalLoop++;
    }

    for(i = 0; i < arr.length; i++){
        bucketIndex = Math.floor(((arr[i] - min)/exp)%radix);
        buckets[bucketIndex]++;
        totalLoop++;
    }

    for(i = 1; i < radix; i++){
        buckets[i] += buckets[i - 1];
        totalLoop++;
    }

    for(i = arr.length -1; i >= 0; i--){
        
        bucketIndex = Math.floor(((arr[i] - min)/exp)%radix);
        output[--buckets[bucketIndex]] = arr[i];
        totalLoop++;
    }

    for(i = 0; i < arr.length; i++){
        totalLoop++;
        if(i%3 == 0){
            await sleep(0);
        }
        
        arr[i] = output[i]; 
        arrCount++;
    }
    return arr;
}
