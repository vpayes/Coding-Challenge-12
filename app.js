// Get the canvas element
const canvas = document.getElementById('myCanvas');

// Get the 2D drawing context
const ctx = canvas.getContext('2d');

const colorInput = document.getElementById('color');
const clearButton = document.getElementById('clear-canvas');
let drawing = false;
let startX, startY;

// Add event listener for mouse events to handle drawing
// Mousedown
canvas.addEventListener('mousedown',(event) => {
    drawing = true;
    startX = event.offsetX;
    startY = event.offsetY;
});

// Mouseup
canvas.addEventListener('mouseup',() => {
    drawing = false;
    ctx.beginPath();
});

// Mousemove
canvas.addEventListener('mousemove', (event) => {
    if (!drawing) return;
    const tool = document.querySelector('input[name="tool"]:checked').value;
    const currentX = event.offsetX;
    const currentY = event.offsetY;
    ctx.strokeStyle = colorInput.value;
})

