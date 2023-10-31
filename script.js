let canvas = document.getElementById("my-canvas");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

let colorPalette = {
    oceanblue: "rgba(28, 108, 199, 1)",
    oceanreflectionblue: "rgba(69, 131, 225, 1)",

    iceblue: "rgb(182, 219, 242)",
    icewhite: "rgb(242, 242, 242)",

    bearyellow: "rgb(242, 219, 174)",
    bearorange: "rgb(242, 199, 145)",
}

let gradient = ctx.createLinearGradient(500, 800, 500, 1000);
gradient.addColorStop(0, "rgba(28, 108, 199, 1)");
gradient.addColorStop(1, "rgba(69, 131, 225, 0.4)");

// Circle generator
for (let i = 0; i < 500; i++) {

    const circleSpacing = 2;
    const radius = 16 - circleSpacing // Circle radius

    let isFull;


// X - axis //

    const gridVarX = canvas.width / ((radius + circleSpacing) * 2) // Create grid positions based on radius
    const gridAmountX = canvas.width / gridVarX // Fit grid positions to canvas.width

    const xFragment = Math.floor(randomX() * (gridVarX + 1)) // Choose a random spot on the grid

    const x = xFragment * gridAmountX; // Set X-value to fit to grid


// Y - axis //

    const gridVarY = canvas.height / ((radius + circleSpacing) * 2) // Create grid positions based on radius
    const gridAmountY = canvas.width / gridVarY // Fit grid positions to canvas.width

    const yFragment = Math.floor(randomY() * (gridVarY + 1)) // Choose a random spot on the grid

    const y = yFragment * gridAmountY; // Set Y-value to fit to grid


// Circle Coloration
    ctx.fillStyle = gradient;

    fillCircle(x, y, radius, isFull);
}

// Iceberg-bottom
ctx.beginPath();
ctx.moveTo(150, 700)
ctx.lineTo(150, 750)
ctx.lineTo(200, 780)
ctx.lineTo(300, 800)
ctx.lineTo(700, 800)
ctx.lineTo(900, 750)
ctx.lineTo(900, 700)
ctx.closePath()
ctx.fillStyle = "rgba(182, 219, 242, 0.97)";
ctx.globalCompositeOperation = "normal";
ctx.fill()



// Iceberg-top
ctx.beginPath();
ctx.moveTo(300, 750)
ctx.lineTo(700, 750)
ctx.lineTo(900, 700)
ctx.lineTo(800, 675)
ctx.lineTo(500, 665)
ctx.lineTo(250, 680)
ctx.lineTo(150, 700)
ctx.lineTo(200, 730)
ctx.lineTo(300, 750)
ctx.closePath()
ctx.globalCompositeOperation = "normal";
ctx.fillStyle = colorPalette.icewhite;
ctx.fill()

// Helper functions

function fillCircle(x, y, radius, isFull) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function randomX() {
    var mean = 0.5; // Mean of the Gaussian distribution
    var standardDeviation = 0.2; // Standard deviation of the Gaussian distribution
    
    return Math.abs(randomGaussian(mean, standardDeviation));
}

function randomY() {
    var mean = 0.3; // Mean of the Gaussian distribution
    var standardDeviation = 0.07; // Standard deviation of the Gaussian distribution
    

    return 0.7 + Math.abs(0.3 - randomGaussian(mean, standardDeviation));
}

function randomGaussian(mean, standardDeviation) {
    var x1, x2, w;
    do {
        x1 = 2 * Math.random() - 1;
        x2 = 2 * Math.random() - 1;
        w = x1 * x1 + x2 * x2;
    } while (w >= 1);

    w = Math.sqrt((-2 * Math.log(w)) / w);
    var z1 = x1 * w;
    // z2 = x2 * w;  // If you need two random numbers

    return mean + z1 * standardDeviation;
}