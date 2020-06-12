
async function countSort(arr){
    var min = getMin(arr);
    var max = getMax(arr);
    let i = min;
    let j = 0;
    count = [];

    for(i; i <= max; i++){
        count[i] = 0;
        totalLoop++;
    }
    for(i = 0; i < arr.length; i++){
        count[arr[i]]++;
        totalLoop++;
    }
    for(i = min; i <= max; i++){
        totalComp++;
        
        while(count[i] > 0){
            totalLoop++;
            arr[j] = i;
            await sleep(0);
            j++;
            count[i]--;
            totalComp++;
        }
    }

}
