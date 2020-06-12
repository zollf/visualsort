


async function selectionSort(arr){
    let prevInd = 0;
    n = arr.length;
    for(let i = 0; i < n - 1; i++){
        await sleep(0);
        let min = i;
        for(let j = i + 1; j < n; j++){
            totalLoop++;
            arrComp++;
            totalComp++;
            if(arr[j] < arr[min]){
                
                min = j;
            }
        }
        prevInd = min;
        swap(arr, min, i);
        arrCount++;
    }
}