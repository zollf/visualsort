

async function heapSort(arr){
    n = arr.length;
    for (var i = Math.floor(n / 2); i >= 0; i--) {
        totalLoop++;
        await heapify(arr, n, i); 
    }
    for (i = n - 1; i >= 0; i--){
        totalLoop++;
        swap(arr, 0, i);
        arrCount++;
        n--;
        await heapify(arr, i, 0); 
    }
            
}

async function heapify(arr, n, i){
    var max = i;
    var l = 2*i + 1;
    var r = 2*i + 2;
    if(i%8 == 0){
        await sleep(0);
    }
    arrComp++;
    totalComp++;
    if (l < n && arr[l] > arr[max]){
        max = l;
    }
    arrComp++;
    totalComp++;
    if (r < n && arr[r] > arr[max]){
        max = r; 
    }
    totalComp++;
    if (max != i) { 
        swap(arr, i, max);
        arrCount++;
        await heapify(arr, n, max); 
        
    } 
    
}
