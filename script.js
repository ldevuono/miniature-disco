const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#fffc33";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if (!isDrawing) return; //stop the function from running when they are not moused down
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


const closeIt = document.querySelector(".close");
const instructions = document.querySelector(".instructions");
const change = document.querySelector(".changeBackground");
const body = document.querySelector("body")

closeIt.addEventListener("click", () => instructions.style.display = "none");


const changeBackground = function () {
    body.classList.toggle("forest");
};

change.addEventListener("click", changeBackground);
