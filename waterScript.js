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

    sunorange: "hsl(39, 90%, 51%)"
}

let gradient = ctx.createLinearGradient(500, 800, 500, 1000);
gradient.addColorStop(0, "rgba(28, 108, 199, 1)");
gradient.addColorStop(1, "rgba(69, 131, 225, 0.4)");

let circles = [];

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Circle generator
for (let i = 0; i < 100; i++) {

    const circleSpacing = 2;
    const radius = 40 - circleSpacing // Circle radius


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
// Alpha Factor for X
    if (xFragment > gridAmountX/2) {  //<--------------------------------------   Calculates alphaValue based on how far circle is from middle
        alphaFactorX = (Math.abs(xFragment - gridAmountX))/(gridAmountX/2)      //If xFragment is bigger than half the grid-size, find difference between xFragment and gridAmountX and turn into a positive number
    } else {
        alphaFactorX = xFragment/(gridAmountX/2)
    }


// Alpha Factor for Y
    alphaFactorY = 1 - Math.abs(yFragment - gridAmountY / 2) / (gridAmountY / 2);   // (1 - yFragment / gridAmountY) * 4

    ctx.fillStyle = `rgba(28, 108, 199, ${alphaFactorX})`
    circles.push({x, y, radius})

    fillCircle(x, y, radius);
}

    setTimeout(() => {  // Needs to be wrapped in a function, otherwise it run immediately
        requestAnimationFrame(draw);
    }, 1000);

    // Draw iceberg
    icebergBottom();
    icebergTop();

    //Draw functions
    function icebergBottom() {
        ctx.beginPath();
        ctx.moveTo(150, 700);
        ctx.lineTo(150, 750);
        ctx.lineTo(200, 780);
        ctx.lineTo(300, 800);
        ctx.lineTo(700, 800);
        ctx.lineTo(900, 750);
        ctx.lineTo(900, 700);
        ctx.closePath();
        ctx.fillStyle = "rgba(182, 219, 242, 0.97)";
        ctx.globalCompositeOperation = "normal";
        ctx.fill();
    }

    function icebergTop() {
        ctx.beginPath();
        ctx.moveTo(300, 750);
        ctx.lineTo(700, 750);
        ctx.lineTo(900, 700);
        ctx.lineTo(800, 675);
        ctx.lineTo(500, 665);
        ctx.lineTo(250, 680);
        ctx.lineTo(150, 700);
        ctx.lineTo(200, 730);
        ctx.lineTo(300, 750);
        ctx.closePath();
        ctx.globalCompositeOperation = "normal";
        ctx.fillStyle = colorPalette.icewhite;
        ctx.fill();
    }
    
    // Draw sun
    const xSun = 900;
    const ySun = 100;
    const sunRadius = 200;
    const sunColorFactor = 39;

    sunFigure(xSun, ySun, sunRadius, sunColorFactor);


    function sunFigure(xSun, ySun, sunRadius, sunColorFactor) {
        let xPos = xSun //+ Math.random()/2 * Math.sqrt(sunRadius);
        let yPos = ySun //+ Math.random()/2 * Math.sqrt(sunRadius);
        let radius = sunRadius + Math.sqrt(Math.random() * sunRadius)
        let sunColor = `hsl(${sunColorFactor}, 90%, 51%)`

        ctx.fillStyle = sunColor
        ctx.beginPath();
        ctx.arc(xPos, yPos, radius, 0, Math.PI * 2);
        ctx.fill();
    }

    // Draw polar bear
    ctx.fillStyle = colorPalette.bearyellow
    ctx.beginPath()
    ctx.arc(650, 400, 50, Math.PI * 1, Math.PI * 0)
    ctx.arc(670, 690, 30, 0, Math.PI * 0.5)
    ctx.arc(620, 550, 170, Math.PI * 0.5, Math.PI * 1.5)
    ctx.closePath()
    ctx.fill()

    ctx.fillStyle = colorPalette.bearorange
    ctx.beginPath()
    ctx.arc(550, 700, 50, 0, Math.PI * 2)
    ctx.fill()

}


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

requestAnimationFrame(draw)
requestAnimationFrame(drawSun)