// Bubble Sort



async function bubbleSort(arr){
    n = arr.length;
    for(let i = 0; i < n-1; i++){
        await sleep(0);
        for(let j = 0; j< n-i-1; j++){
            arrComp++;
            totalComp++;
            totalLoop++;
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
                arrCount++;
                
            }
        }
    }
}