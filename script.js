const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#ffd000";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if (!isDrawing) return; //stop the function from running when they are not moused down
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

change.addEventListener("click", changeBackground);



const audio = document.querySelector("audio");
const playPauseButton = document.querySelector(".playPause");
let count = 0;

function playPause() {
    if (count === 0) {
        count = 1;
        audio.play();
        playPauseButton.innerHTML = "&#9208;";
    } else {
        count = 0;
        audio.pause();
        playPauseButton.innerHTML = "&#9658;";

    }
}

playPauseButton.addEventListener("click", playPause);

const clearCanvas = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const clear = document.querySelector(".clear");

clear.addEventListener("click", clearCanvas);