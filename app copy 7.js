const strokeBtn = document.getElementById("stroke-btn");
const fillBtn = document.getElementById("fill-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width=CANVAS_WIDTH;
canvas.height=CANVAS_HEIGHT;

ctx.lineWidth=lineWidth.value;

let isPainting=false;
let isFilling=false;


function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX,event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();

    ctx.moveTo(event.offsetX,event.offsetY);
};


function startPainting(){
    isPainting=true;
};
function cancelPainting(){
    isPainting=false;
};
function onLineWidthChange(event){
   ctx.lineWidth=event.target.value ;
};

function onColorChange(event){
    ctx.strokeStyle=event.target.value ;
    ctx.fillStyle=event.target.value ;
   
};


function onColorClick(event){
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle=colorValue;
    ctx.fillStyle=colorValue;
    color.value=colorValue;
};

function onStrokeClick(){
    if(isFilling){
    isFilling=false;
    } else{
        }
};


function onFillClick(event){
    if(isFilling){
        } else{
            isFilling=true;
            }
};


function onCanvasClick(){
    if(isFilling){
        ctx.fill();
    };
};



canvas.addEventListener("mousemove",onMove);
canvas.addEventListener("mousedown",startPainting);
canvas.addEventListener("mouseup",cancelPainting);
canvas.addEventListener("mouseleave",cancelPainting);
canvas.addEventListener("click",onCanvasClick)

lineWidth.addEventListener("change",onLineWidthChange);
color.addEventListener("change",onColorChange);

colorOptions.forEach(color =>color.addEventListener("click",onColorClick));

fillBtn.addEventListener("click",onFillClick)
strokeBtn.addEventListener("click",onStrokeClick);
// destroyBtn.addEventListener("click",onDestroyClick);
// eraserBtn.addEventListener("click",onEraserClick);
