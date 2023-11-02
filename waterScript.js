let canvas = document.getElementById("my-canvas");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

// TypeFace
let ConcertFont = new FontFace("ConcertOne", "url(Fonts/ConcertOne-TypeFace/ConcertOne-Regular.ttf)")
let TitanFont = new FontFace("TitanOne", "url(Fonts/Titan_One/TitanOne-Regular.ttf)")

document.fonts.add(ConcertFont)
document.fonts.add(TitanFont)

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

    let regX = 00;
    let regY = 170;

    // Title
    TitanFont.load().then(() => {
        ctx.font = "40px TitanOne";
        ctx.fillStyle = "hsl(39, 90%, 51%, 0.2)";
        ctx.textBaseline = "normal";
        ctx.fillText("LARRY THE BIPOLAR BEARY", 504, 1024)
        
        ctx.font = "40px TitanOne";
        ctx.fillStyle = colorPalette.sunorange;
        ctx.textBaseline = "normal";
        ctx.fillText("LARRY THE BIPOLAR BEARY", 500, 1020)



        let fontSize = 60
        let fontPositionY = 20
        let fontPositionX = 30
        ctx.font = `${fontSize}px TitanOne`;
        ctx.fillStyle = "hsl(210, 90%, 51%)";
        ctx.textBaseline = "hanging";
        ctx.fillText("TAKE", fontPositionX - 2, fontPositionY);
        ctx.fillText("ME", fontPositionX, fontPositionY + (fontSize - fontSize/5) * 1);
        ctx.fillText("BACK", fontPositionX, fontPositionY + (fontSize - fontSize/5) * 2);
        ctx.fillText("INTO", fontPositionX, fontPositionY + (fontSize - fontSize/5) * 3);
        ctx.fillText("YOUR", fontPositionX, fontPositionY + (fontSize - fontSize/5) * 4);
        ctx.fillText("COLD", fontPositionX, fontPositionY + (fontSize - fontSize/5) * 5);
        ctx.font = `${fontSize * 1}px TitanOne`;
        ctx.fillText("EMBRACE", fontPositionX, fontPositionY + (fontSize - fontSize/5) * 6);

        ctx.fillStyle = "hsla(210, 90%, 51%, 0.2)";

        ctx.beginPath()
        ctx.roundRect(fontPositionX + 90, fontPositionY + (fontSize - fontSize/5) * 1 + 14,  65, 44, 10)
        ctx.fill()

        // let fontSize = 60
        // let fontPositionY = 20
        // let fontPositionX = 30
        // ctx.font = `${fontSize}px TitanOne`;
        // ctx.fillStyle = "hsl(210, 90%, 51%)";
        // ctx.textBaseline = "hanging";
        // ctx.fillText("TAKE", fontPositionX - 2, fontPositionY);
        // ctx.fillText("ME", fontPositionX, fontPositionY + (fontSize - fontSize/5) * 1);
        // ctx.fillText("BACK", fontPositionX, fontPositionY + (fontSize - fontSize/5) * 2);
        // ctx.fillText("IN", fontPositionX + 130, fontPositionY + (fontSize - fontSize/5) * 3);
        // ctx.fillText("YOUR", fontPositionX, fontPositionY + (fontSize - fontSize/5) * 4);
        // ctx.fillText("COLD", fontPositionX, fontPositionY + (fontSize - fontSize/5) * 5);
        // ctx.font = `${fontSize * 1}px TitanOne`;
        // ctx.fillText("EMBRACE", fontPositionX, fontPositionY + (fontSize - fontSize/5) * 6);

        // ctx.fillStyle = "hsla(210, 90%, 51%, 0.2)";

        // ctx.beginPath()
        // ctx.roundRect(fontPositionX + 90, fontPositionY + (fontSize - fontSize/5) * 1 + 14,  65, 44, 10)
        // ctx.fill()
        // ctx.beginPath()
        // ctx.roundRect(fontPositionX, fontPositionY + (fontSize - fontSize/5) * 3 + 14,  125, 44, 10)
        // ctx.fill()
    })

    // Draw sun
    const xSun = 850;
    const ySun = 300;
    const sunRadius = 100;
    const sunColorFactor = 39;

    sunFigure(xSun, ySun, sunRadius, sunColorFactor);

// Draw background
    ctx.fillStyle = "rgba(31, 129, 255, 0.1)";
    ctx.beginPath();
    ctx.arc(540 + regX, 540 + regY, 300, Math.PI * 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "rgba(31, 129, 255, 0.1)";
    ctx.beginPath();
    ctx.arc(540 + regX, 540 + regY, 250, Math.PI * 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "rgba(31, 129, 255, 0.1)";
    ctx.beginPath();
    ctx.arc(540 + regX, 540 + regY, 200, Math.PI * 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

    // Draw water backdrop
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.fillRect(0 + regX, 760 + regY, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(31, 129, 255, 0.3)"

    // Circle generator
for (let i = 0; i < 500; i++) {

    const circleSpacing = 1;
    const radius = 6 - circleSpacing // Circle radius


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

    ctx.fillStyle = `rgba(31, 129, 255, ${alphaFactorX})`       //  ctx.fillStyle = `rgba(28, 108, 199, ${alphaFactorX})`
    circles.push({x, y, radius})

    fillCircle(x + regX, y, radius);
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
        ctx.moveTo(150 + regX, 700 + regY);
        ctx.lineTo(160 + regX, 760 + regY);
        ctx.lineTo(220 + regX, 780 + regY);
        ctx.lineTo(350 + regX, 795 + regY);
        ctx.lineTo(680 + regX, 800 + regY);
        ctx.lineTo(780 + regX, 790 + regY);
        ctx.lineTo(905 + regX, 760 + regY);
        ctx.lineTo(925 + regX, 700 + regY);
        ctx.closePath();
        ctx.fillStyle = "rgba(182, 219, 242, 0.97)";
        ctx.globalCompositeOperation = "normal";
        ctx.fill();
    }

    function icebergTop() {
        ctx.beginPath();
        ctx.moveTo(300 + regX, 750 + regY);
        ctx.lineTo(700 + regX, 750 + regY);
        ctx.lineTo(925 + regX, 700 + regY);
        ctx.lineTo(800 + regX, 675 + regY);
        ctx.lineTo(500 + regX, 665 + regY);
        ctx.lineTo(250 + regX, 680 + regY);
        ctx.lineTo(150 + regX, 700 + regY);
        ctx.lineTo(200 + regX, 730 + regY);
        ctx.lineTo(300 + regX, 750 + regY);
        ctx.closePath();
        ctx.globalCompositeOperation = "normal";
        ctx.fillStyle = colorPalette.icewhite;
        ctx.fill();
    }


    function sunFigure(xSun, ySun, sunRadius, sunColorFactor) {
        let xPos = xSun //+ Math.random()/2 * Math.sqrt(sunRadius);
        let yPos = ySun //+ Math.random()/2 * Math.sqrt(sunRadius);
        let radius = sunRadius //+ Math.sqrt(Math.random() * sunRadius)
        let sunColor = `hsl(${sunColorFactor}, 90%, 51%)`

        ctx.fillStyle = sunColor
        ctx.beginPath();
        ctx.arc(xPos, yPos, radius, 0, Math.PI * 2);
        ctx.fill();
    }

    // Draw polar bear

    drawPolarBear();


    function drawPolarBear() {
        ctx.fillStyle = "#E1E6E2"; // Back arm - shadow       "#FAF6F3"
        ctx.beginPath();
        ctx.arc(550 + regX, 515 + regY, 20, Math.PI * 0, Math.PI * 1, true);
        ctx.arc(555 + regX, 590 + regY, 30, Math.PI * 1.1, Math.PI * 0, true);
        ctx.closePath();
        ctx.fill();
    
        ctx.fillStyle = "#FDFBFC"; // Back ear
        ctx.beginPath();
        ctx.ellipse(555 + regX, 345 + regY, 15, 20, Math.PI * 0.8, Math.PI * 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    
        ctx.fillStyle = "#E1E6E2"; // Back ear - fill
        ctx.beginPath();
        ctx.ellipse(555 + regX, 345 + regY, 5, 10, Math.PI * 0.8, Math.PI * 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    
        ctx.fillStyle = "#FDFBFC";
        ctx.beginPath();
        ctx.moveTo(680 + regX, 440 + regY);
        ctx.quadraticCurveTo(685 + regX, 455 + regY, 700 + regX, 480 + regY);
        ctx.quadraticCurveTo(750 + regX, 570 + regY, 750 + regX, 650 + regY);
        ctx.arc(680 + regX, 650 + regY, 70, 0, Math.PI * 0.5);
        ctx.arc(450 + regX, 670 + regY, 50, Math.PI * 0.5, Math.PI * 1.5);
        ctx.arc(520 + regX, 600 + regY, 20, Math.PI * 0.5, Math.PI * 1.9, true);
        ctx.quadraticCurveTo(520 + regX, 520 + regY, 540 + regX, 450 + regY);
        ctx.arc(530 + regX, 450 + regY, 10, Math.PI * 0, Math.PI * 1.5, true);
        ctx.arc(530 + regX, 370 + regY, 70, Math.PI * 0.5, Math.PI * 0.75);
        ctx.quadraticCurveTo(450 + regX, 390 + regY, 480 + regX, 390 + regY); // Nose-part
        ctx.lineTo(500 + regX, 380 + regY);
        ctx.quadraticCurveTo(525 + regX, 340 + regY, 570 + regX, 335 + regY);
        ctx.quadraticCurveTo(585 + regX, 334 + regY, 600 + regX, 335 + regY);
        ctx.quadraticCurveTo(660 + regX, 340 + regY, 680 + regX, 440 + regY);
        ctx.closePath();
        ctx.fill();
    
        ctx.fillStyle = "#010104";
        ctx.beginPath(); // Nose
        ctx.moveTo(470 + regX, 410 + regY);
        ctx.quadraticCurveTo(450 + regX, 390 + regY, 480 + regX, 390 + regY);
        ctx.quadraticCurveTo(510 + regX, 390 + regY, 490 + regX, 410 + regY);
        ctx.quadraticCurveTo(480 + regX, 420 + regY, 470 + regX, 410 + regY);
        ctx.closePath();
        ctx.fill();
    
        ctx.beginPath(); // Small Eye
        ctx.arc(520 + regX, 370 + regY, 6, 0, Math.PI * 2);
        ctx.fill();
    
        ctx.beginPath(); // Big Eye
        ctx.arc(570 + regX, 375 + regY, 7, 0, Math.PI * 2);
        ctx.fill();
    
        ctx.fillStyle = "#FDFBFC"; // Front ear
        ctx.beginPath();
        ctx.ellipse(625 + regX, 358 + regY, 25, 30, Math.PI * 1.2, Math.PI * 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    
        ctx.fillStyle = "#E1E6E2"; // Front ear - fill
        ctx.beginPath();
        ctx.ellipse(625 + regX, 358 + regY, 15, 20, Math.PI * 1.2, Math.PI * 0, Math.PI * 1);
        ctx.closePath();
        ctx.fill();
    
        ctx.fillStyle = "#E1E6E2"; // Shadow leg
        ctx.beginPath();
        ctx.arc(450 + regX, 670 + regY, 50, Math.PI * 0.5, Math.PI * 1.5);
        ctx.arc(520 + regX, 670 + regY, 50, Math.PI * 1.5, Math.PI * 2);
        ctx.arc(620 + regX, 670 + regY, 50, Math.PI * 1, Math.PI * 0.5, true);
        ctx.closePath();
        ctx.fill();
    
        ctx.fillStyle = "#FDFBFC"; // Front leg
        ctx.beginPath();
        ctx.arc(500 + regX, 685 + regY, 55, Math.PI * 0.5, Math.PI * 1.5);
        ctx.arc(680 + regX, 665 + regY, 55, Math.PI * 1.5, Math.PI * 0.5);
        ctx.closePath();
        ctx.fill();
    
        ctx.fillStyle = "#E1E6E2"; // Front arm - shadow
        ctx.beginPath();
        ctx.arc(620 + regX, 525 + regY, 45, Math.PI * 0, Math.PI * 1, true);
        ctx.arc(620 + regX, 600 + regY, 45, Math.PI * 1, Math.PI * 0, true);
        ctx.closePath();
        ctx.fill();
    
        ctx.fillStyle = "#FDFBFC"; // Front arm
        ctx.beginPath();
        ctx.arc(625 + regX, 500 + regY, 40, Math.PI * 0, Math.PI * 1, true);
        ctx.arc(625 + regX, 595 + regY, 40, Math.PI * 1, Math.PI * 0, true);
        ctx.closePath();
        ctx.fill();
    }
    
    
}


// Helper functions

function fillCircle(x, y, radius, isFull) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function randomX() {
    var mean = 0.5; // Mean of the Gaussian distribution
    var standardDeviation = 0.15; // Standard deviation of the Gaussian distribution
    
    return Math.abs(randomGaussian(mean, standardDeviation));
}

function randomY() {
    var mean = 0.14; // Mean of the Gaussian distribution
    var standardDeviation = 0.025; // Standard deviation of the Gaussian distribution
    let waterPosY = 1 - mean;
    

    return waterPosY + Math.abs(mean - randomGaussian(mean, standardDeviation));
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
// requestAnimationFrame(drawSun)