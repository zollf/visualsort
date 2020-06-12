async function mergeSort(arr, l, r){
    totalComp++;
    if(l < r){
        let m = Math.floor((l+r)/2);

        await mergeSort(arr, l, m);
        await mergeSort(arr, m+1, r);

        await merge(arr, l, m, r);
    }
}

async function merge(arr, l, m, r){
    
    let i = 0;
    let j = 0;
    let k = 0;
    let n1 = m - l + 1;
    let n2 = r - m;

    L = [];
    R = [];
    for(i = 0;i < n1;i++){
        totalLoop++;
        L[i] = arr[l+i];
    }
    for(j = 0; j < n2; j++){
        totalLoop++;
        R[j] = arr[m + 1 + j];
    }

    i = 0;
    j = 0;
    k = l;
    totalComp++;
    while (i < n1 && j < n2) 
    { 
        totalLoop++;
        if(k%4 == 2){
            await sleep(0);
        }
        totalComp++;
        arrComp++;
        if (L[i] <= R[j]) { 
            arr[k] = L[i]; 
            arrCount++;
            i++; 
            
        }else{ 
            arr[k] = R[j]; 
            arrCount++;
            j++; 
        } 
        k++; 
        totalComp++;
    } 
    arrComp++;
    totalComp++;
    while (i < n1){ 
        totalLoop++;
        arr[k] = L[i]; 
        arrCount++;
        totalComp++;
        i++; 
        k++; 
    } 
    arrComp++;
    totalComp++;
    while (j < n2){ 
        totalLoop++;
        arr[k] = R[j]; 
        arrCount++;
        totalComp++;
        j++; 
        k++; 
    } 
    
}