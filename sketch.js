var MAX_VALUES;
const CANVAS_SIZE_X = 640;
const CANVAS_SIZE_Y = 530;
const CAVAS_X_PADDING = 30;
const CAVAS_Y_PADDING = 30;
const CENTER_POINT_X = CANVAS_SIZE_X/2;
const CENTER_POINT_Y = (CANVAS_SIZE_Y - 60)/2;
const pi = Math.PI;
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
var prevSliderValue = 200;

var arrCount = 0;
var arrComp = 0;
var ticks = 0;

var totalComp = 0;
var totalLoop = 0;

function setup(){
    initialiseMaxVal(200);
    colorMode(HSB);
    var canvas = createCanvas(CANVAS_SIZE_X, CANVAS_SIZE_Y);
    for(i = 0; i < MAX_VALUES-1; i++){
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
    let borderWidth = 2;
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
    let r = 8;
    let fracCircle = (2 * pi)/MAX_VALUES;
    for(let i = 0; i <= MAX_VALUES; i++){
        fill(color(values[i]**2 /1000, 100, 100));
        let angle = fracCircle * i * spiralVal;
        let x = (CENTER_POINT_X) +              (values[i]/150 * angle * Math.cos(angle));  
        let y = (CENTER_POINT_Y + r/2 + 20) +   (values[i]/150 * angle * Math.sin(angle));
        circle(x, y, r);
    }

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
    document.getElementById("arrLength").innerHTML = "Length:\t\t\t" + values.length;
    document.getElementById("arrChange").innerHTML = "Changes:\t\t" + arrCount;
    document.getElementById("arrComp").innerHTML = "Comparisons: \t" + arrComp;
    document.getElementById("arrTick").innerHTML = "Ticks: \t\t\t" + ticks;

    document.getElementById("totalComp").innerHTML = "Comparisons: \t\t" + totalComp;
    document.getElementById("totalLoop").innerHTML = "Loops: \t\t\t" + totalLoop;
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
            case 'Gnome':
                gnomeSort(values);
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






