
async function quickSort(arr, l, h){
    totalComp++;
    if(l < h){ 
        let index = await partition(arr, l, h);

        await Promise.all([
            quickSort(arr, l, index - 1),
            quickSort(arr, index+1, h)
        ])
    }
}

async function partition(arr, l, h){
    let piv = arr[h];
    let i = l - 1;
    for(let j = l; j < h ; j++){
        totalLoop++;
        arrComp++;
        totalComp++;
        if(arr[j] < piv){
            i++;
            if(i%2 == 0){
                await sleep(0);
            }
            
            swap(arr, i, j);   
            arrCount++;
        }    
    }
    swap(arr, i+1, h);
    arrCount++;
    return (i+1);
}
