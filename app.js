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

//Implement Shape Drawing Logic 
// Drawing a Line
ctx.beginPath();  // Begin a new path
ctx.moveTo(50, 200);  // Move the pen to starting point (50, 200)
ctx.lineTo(300, 200);  // Draw a line to the point (300, 200)
ctx.strokeStyle = '#2ecc71';
ctx.lineWidth = 4;
ctx.stroke();  // Render the line

// Drawing a Rectangle 
// Filled rectangle
ctx.fillStyle = '#3498db';
ctx.fillRect(50, 50, 150, 100);

// Rectangle outline
ctx.strokeStyle = '#e74c3c';
ctx.lineWidth = 5;
ctx.strokeRect(250, 50, 150, 100);



