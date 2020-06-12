
async function insertSort(arr){
    n = arr.length;
    for(let i = 0; i < n; i++){
        let key = arr[i];
        let j = i - 1;
        arrComp++;
        totalComp++;
        while(j >= 0 && arr[j] > key){
            totalLoop++;
            if(j%25 == 0){
                await sleep(0);
            }
            swap(arr, j+1, j);
            arrCount++;
            j--;
            arrComp++;
            totalComp++;
        }
        arr[j + 1] = key;
        arrCount++;
    }
}