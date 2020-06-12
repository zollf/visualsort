# Sorting Visualised
Sorting algorithms visualised in form of a spiral, as well as basic sorting rectangle to fill the background. 
Uses promises to delay run time, so `draw()` can create animation that is humanly visable.

## How the spiral works
> Given an array of inputs arr[n], we will create a spiral using polar equations.

x = ricos(iθ) + c, y = risin(iθ) + c

r = arr[i]

θ = 2π/n 

i = current index of the array

c = centered value for corresponding axis

> 'spiralVal' is randomised value that to get a random design for the spiral. The random value will influence the modulus and arguement of the equation
```js
spiralVal = randomInt(3, 6) * Math.random() + 4;
```
> Coded spiral equation given array of values
```js
let dotsize = 8;
let fracCircle = (2 * pi)/MAX_VALUES;
for(let i = 0; i <= MAX_VALUES; i++){
    // Color of each dot, increasing in value
    fill(color(values[i]**2 /1000, 100, 100));

    let angle = fracCircle * i * spiralVal;
    let x = (CENTER_POINT_X)+                     (2*values[i]/spiralVal * Math.cos(angle));  
    let y = (CENTER_POINT_Y + dotsize/2 + 20) +   (2*values[i]/spiralVal * Math.sin(angle));

    circle(x, y, dotsize);
}
```

## Sorting Algorithms
- Bubble Sort
- Insert Sort
- Selection Sort
- Merge Sort
- Heap Sort
- Quick Sort
- Radix Sort
- Count Sort

### Uses p5.js library
> (https://p5js.org/)


