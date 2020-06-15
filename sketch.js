var MAX_VALUES;
const CANVAS_SIZE_X = 640;
const CANVAS_SIZE_Y = 530;
const CAVAS_X_PADDING = 30;
const CAVAS_Y_PADDING = 30;
const CENTER_POINT_X = CANVAS_SIZE_X/2;
const CENTER_POINT_Y = (CANVAS_SIZE_Y - 60)/2;
const pi = Math.PI;
const borderWidth = 2;
var spiralVal = 5;

var rectWidth; 

var values = [];

var isRunning = false;
var isOrdered = false;
var statusVal = 0;

let status = [
    'READY',
    'RUNNING',
    'FINISHED'
];
var stringStatus = status[statusVal];

var hasSliderChanged = false;
var prevSliderValue = 201;

var arrCount = 0;
var arrComp = 0;
var ticks = 0;

var totalComp = 0;
var totalLoop = 0;

function setup(){
    initialiseMaxVal(201);
    colorMode(HSB);
    var canvas = createCanvas(CANVAS_SIZE_X, CANVAS_SIZE_Y);
    for(i = 0; i < MAX_VALUES; i++){
        values[i] = round(Math.random() * (CANVAS_SIZE_X - 2*CAVAS_X_PADDING));
    }
    frameRate(60);
    canvas.parent('canvasAlgorithm');
}

function draw(){

    var slider = document.getElementById("amountSlider").value;
    if(prevSliderValue == slider){
        hasSliderChanged = false;
    }else{
        hasSliderChanged = true;
        prevSliderValue = slider;
    }
    
    if(isRunning == false && hasSliderChanged == true){
        initialiseMaxVal(slider);
        resetSort();
    }
    if(isRunning == true){
        ticks++;
    }

    background(20);
    strokeWeight(0);
    
    rect(CAVAS_X_PADDING - borderWidth, 30 - borderWidth, rectWidth * (MAX_VALUES) + 2*borderWidth, CANVAS_SIZE_Y - 60 + 2*borderWidth);
    fill(color(15));
    rect(CAVAS_X_PADDING, 30, rectWidth * (MAX_VALUES), CANVAS_SIZE_Y - 60);
    fill(color(12));
    rect(CAVAS_X_PADDING, CANVAS_SIZE_Y - 30, CANVAS_SIZE_X-60, 0);
    textSize(12);
    textAlign(LEFT, CENTER);
    strokeWeight(0.1);

    // RECTANGLES
    for(let i = 0; i <= MAX_VALUES; i++){
        
        fill(20);
        rect(CAVAS_X_PADDING + i*rectWidth, CANVAS_SIZE_Y -30 , rectWidth, -values[i]/2);
    }

    // SPIRAL
    var dotsize = 8;
    var fracCircle = (2 * pi)/MAX_VALUES;

    
    // as MAX_VALUES -> 500, modVal -> 32
    for(let i = 0; i <= MAX_VALUES; i++){
        // Color of each dot, increasing in value
        fill(color(values[i]**2 /1000, 100, 100));
        
        var angle = fracCircle * i * spiralVal;
        
        var x = (CENTER_POINT_X) +                    (1.5*values[i]/spiralVal * Math.cos(angle));  
        var y = (CENTER_POINT_Y + dotsize/2 + 20) +   (1.5*values[i]/spiralVal * Math.sin(angle));
        stroke(color(values[i]**2 /1000, 100, 100));
        for(var j = i; j <= i+15; j++){
            
            var angle2 = fracCircle * j * spiralVal;
            var x2 = (CENTER_POINT_X) +                    (1.5*values[j]/spiralVal * Math.cos(angle2));  
            var y2 = (CENTER_POINT_Y + dotsize/2 + 20) +   (1.5*values[j]/spiralVal * Math.sin(angle2));
            
            //if( sqrt(pow(abs(x - x2), 2) + pow(abs(y - y2), 2))){
                line(x, y, x2, y2);
            //}

        }

        circle(x, y, dotsize);
    }
    stroke(0);
    //

    if(isSorted(values) == true){
        isRunning = false;
        isOrdered = true;
        statusVal = 2;
    }
        
    if(statusVal == 1){
        fill(color('RED'));
    }else{
        fill(color('LIME'));
    }
    strokeWeight(0);


    text('STATUS: ' + status[statusVal], CAVAS_X_PADDING , CANVAS_SIZE_Y - 12.5);
    
    // Running Statistics
    document.getElementById("arrLength-val").innerHTML =  values.length-1;
    document.getElementById("arrChange-val").innerHTML =  arrCount;
    document.getElementById("arrComp-val").innerHTML =  arrComp;
    document.getElementById("arrTick-val").innerHTML = ticks;

    document.getElementById("totalComp-val").innerHTML = totalComp;
    document.getElementById("totalLoop-val").innerHTML =  totalLoop;
}

function initialiseMaxVal(max){
    values = [];
    spiralVal = randomInt(3, 6) * Math.random() + 4;
    MAX_VALUES = max;
    rectWidth = (CANVAS_SIZE_X - 2*CAVAS_X_PADDING)/(max); 
    for(i = 0; i < MAX_VALUES; i++){
        values[i] = round(Math.random() * (CANVAS_SIZE_X - 2*CAVAS_X_PADDING));
    }
}

function startSort(){
    if(isRunning == false && isOrdered == false){
        isRunning = true;
        statusVal = 1;
        switch(document.getElementById("methods").value){
            case 'Bubble':
                bubbleSort(values);
                break;
            case 'Insert':
                insertSort(values);
                break;
            case 'Selection':
                selectionSort(values);
                break;
            case 'Merge':
                mergeSort(values, 0, values.length - 1);
                break;
            case 'Heap':
                heapSort(values);
                break;
            case 'Quicksort':
                quickSort(values, 0, values.length-1);
                break;
            case 'Radix':
                radixSort(values);
                break;
            case 'Count':
                countSort(values);
                break;
            default:
                bubbleSort(values);     
        }
    }
}

function resetSort(){
    if(isRunning == false && isOrdered == true){
        isOrdered = false;
        statusVal = 0;
        arrCount = 0;
        arrComp = 0;
        ticks = 0;
        totalComp = 0;
        totalLoop = 0;
        spiralVal = randomInt(3, 6) * Math.random() + 4;
        for(i = 0; i < MAX_VALUES; i++){
            values[i] = round(Math.random() * (CANVAS_SIZE_X - 2*CAVAS_X_PADDING));
        }
    }
}






