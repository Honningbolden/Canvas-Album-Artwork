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

    // Title
    TitanFont.load().then(() => {
        let fontSize = 70
        let fontPositionY = 60
        let fontPositionX = 70
        ctx.font = `${fontSize}px TitanOne`;
        ctx.fillStyle = "hsl(210, 90%, 51%)";
        ctx.textBaseline = "hanging";
        ctx.fillText("TAKE", fontPositionX - 2, fontPositionY);
        // ctx.fillStyle = "rgba(28, 108, 199, 0.6)";
        ctx.fillText("ME", fontPositionX + 188, fontPositionY);
        // ctx.fillStyle = "rgba(28, 108, 199, 0.8)";
        ctx.fillText("BACK", fontPositionX - 2, fontPositionY + fontSize - fontSize/5);
        // ctx.fillStyle = "rgba(28, 108, 199, 0.6)";
        ctx.fillText("IN", fontPositionX + 200, fontPositionY + fontSize - fontSize/5);
        ctx.fillText("YOUR", fontPositionX - 4, fontPositionY + (fontSize - fontSize/5) * 2);
        // ctx.fillStyle = "rgba(28, 108, 199, 1)";
        ctx.fillText("COLD", fontPositionX + 210, fontPositionY + (fontSize - fontSize/5) * 2);
        // ctx.fillStyle = "rgba(28, 108, 199, 1)";
        ctx.fillText("EMBRACE", fontPositionX, fontPositionY + (fontSize - fontSize/5) * 3);
    })

    // Draw background
    ctx.fillStyle = "rgba(31, 129, 255, 0.1)" 
    ctx.beginPath()
    ctx.arc(540, 540, 300, Math.PI * 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()

    ctx.fillStyle = "rgba(31, 129, 255, 0.1)" 
    ctx.beginPath()
    ctx.arc(540, 540, 250, Math.PI * 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()

    ctx.fillStyle = "rgba(31, 129, 255, 0.1)" 
    ctx.beginPath()
    ctx.arc(540, 540, 200, Math.PI * 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()

    // Draw water backdrop
    ctx.fillStyle = "rgba(255, 255, 255, 1)"  
    ctx.fillRect(0, 760, canvas.width, canvas.height)

    ctx.fillStyle = "rgba(31, 129, 255, 0.3)"  
    //ctx.fillRect(0, 760, canvas.width, canvas.height)

    // Circle generator
for (let i = 0; i < 40; i++) {

    const circleSpacing = 2;
    const radius = 20 - circleSpacing // Circle radius


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
        ctx.lineTo(160, 760);
        ctx.lineTo(220, 780);
        ctx.lineTo(350, 795);
        ctx.lineTo(680, 800);
        ctx.lineTo(780, 790);
        ctx.lineTo(905, 760);
        ctx.lineTo(925, 700)
        ctx.closePath();
        ctx.fillStyle = "rgba(182, 219, 242, 0.97)";
        ctx.globalCompositeOperation = "normal";
        ctx.fill();
    }

    function icebergTop() {
        ctx.beginPath();
        ctx.moveTo(300, 750);
        ctx.lineTo(700, 750);
        ctx.lineTo(925, 700);
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
    const xSun = 850;
    const ySun = 200;
    const sunRadius = 100;
    const sunColorFactor = 39;

    sunFigure(xSun, ySun, sunRadius, sunColorFactor);


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
        ctx.arc(550, 515, 20, Math.PI * 0, Math.PI * 1, true);
        ctx.arc(555, 590, 30, Math.PI * 1.1, Math.PI * 0, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#FDFBFC"; // Back ear
        ctx.beginPath();
        ctx.ellipse(555, 345, 15, 20, Math.PI * 0.8, Math.PI * 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#E1E6E2"; // Back ear - fill
        ctx.beginPath();
        ctx.ellipse(555, 345, 5, 10, Math.PI * 0.8, Math.PI * 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#FDFBFC";
        ctx.beginPath();
        ctx.moveTo(680, 440);
        ctx.quadraticCurveTo(685, 455, 700, 480);
        ctx.quadraticCurveTo(750, 570, 750, 650);
        ctx.arc(680, 650, 70, 0, Math.PI * 0.5);
        ctx.arc(450, 670, 50, Math.PI * 0.5, Math.PI * 1.5);
        ctx.arc(520, 600, 20, Math.PI * 0.5, Math.PI * 1.9, true);
        ctx.quadraticCurveTo(520, 520, 540, 450);
        ctx.arc(530, 450, 10, Math.PI * 0, Math.PI * 1.5, true);
        ctx.arc(530, 370, 70, Math.PI * 0.5, Math.PI * 0.75);
        ctx.quadraticCurveTo(450, 390, 480, 390); // Nose-part
        ctx.lineTo(500, 380);
        ctx.quadraticCurveTo(525, 340, 570, 335);
        ctx.quadraticCurveTo(585, 334, 600, 335);
        ctx.quadraticCurveTo(660, 340, 680, 440);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#010104";
        ctx.beginPath(); // Nose
        ctx.moveTo(470, 410);
        ctx.quadraticCurveTo(450, 390, 480, 390);
        ctx.quadraticCurveTo(510, 390, 490, 410);
        ctx.quadraticCurveTo(480, 420, 470, 410);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath(); // Small Eye
        ctx.arc(520, 370, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath(); // Big Eye
        ctx.arc(570, 375, 7, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#FDFBFC"; // Front ear
        ctx.beginPath();
        ctx.ellipse(625, 358, 25, 30, Math.PI * 1.2, Math.PI * 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#E1E6E2"; // Front ear - fill
        ctx.beginPath();
        ctx.ellipse(625, 358, 15, 20, Math.PI * 1.2, Math.PI * 0, Math.PI * 1);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#E1E6E2"; // Shadow leg
        ctx.beginPath();
        ctx.arc(450, 670, 50, Math.PI * 0.5, Math.PI * 1.5);
        ctx.arc(520, 670, 50, Math.PI * 1.5, Math.PI * 2);
        ctx.arc(620, 670, 50, Math.PI * 1, Math.PI * 0.5, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#FDFBFC"; // Front leg
        ctx.beginPath();
        ctx.arc(500, 685, 55, Math.PI * 0.5, Math.PI * 1.5);
        ctx.arc(680, 665, 55, Math.PI * 1.5, Math.PI * 0.5);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#E1E6E2"; // Front arm - shadow
        ctx.beginPath();
        ctx.arc(620, 525, 45, Math.PI * 0, Math.PI * 1, true);
        ctx.arc(620, 600, 45, Math.PI * 1, Math.PI * 0, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#FDFBFC"; // Front arm
        ctx.beginPath();
        ctx.arc(625, 500, 40, Math.PI * 0, Math.PI * 1, true);
        ctx.arc(625, 595, 40, Math.PI * 1, Math.PI * 0, true);
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