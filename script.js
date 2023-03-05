// canvas
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

// top buttons
const closeIt = document.querySelector(".close");
const instructions = document.querySelector(".instructions");
const change = document.querySelector(".changeBackground");
const body = document.querySelector("body")

closeIt.addEventListener("click", () => instructions.style.display = "none");


const background = [
    "./assets/canyon.jpg",
    "./assets/desert.jpg",
    "./assets/forest.jpg",
    "./assets/lake.jpg",
    "./assets/meadow.jpg"
]

let counter = 0;
function changeBackground() {
    counter += 1;
    if (counter > background.length - 1) {
        counter = 0;
    }
    console.log(`canvas width: ${canvas.width}, height: ${canvas.height}`);
    body.style.backgroundImage = `url(${background[counter]})`
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

change.addEventListener("click", changeBackground);

const clearCanvas = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const clear = document.getElementById("clear");

clear.addEventListener("click", clearCanvas);


// audio
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


// modal
const modal = document.querySelector(".modal")
const credits = document.querySelector(".credits");

const closeModal = document.querySelector(".closeModal")

const showCredits = function () {
    modal.style.display = "block";
}

const closeCredits = function () {
    modal.style.display = "none";
}

credits.addEventListener("click", showCredits);

closeModal.addEventListener("click", closeCredits);