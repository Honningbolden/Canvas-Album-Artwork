let canvas = document.getElementById("my-canvas");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

let colorPalette = {
    oceanblue: "#1C6CC7",
    oceanreflectionblue: "#4583E1",

    iceblue: "#B6DBF2",
    icewhite: "#F2F2F2",

    bearyellow: "#F2DBAE",
    bearorange: "#F2C791",
}

ctx.fillStyle = "rgba(255, 100, 50, 0.2)"

let mean = canvas.width/2;
let stdev = 400;

for (let i = 0; i < 50; i++) {
    let x = Math.floor(gaussianRandomX());
    let y = Math.floor(gaussianRandomX());

    fillCircle(x, y, 100);

    console.log(500)
}

// Helper functions

function fillCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function gaussianRandomX() {
    let x;
    do {
        const u = 1 - Math.random();
        const v = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        x = z * stdev + mean;
    } while (x < 0 || x > canvas.width);

    return x;
}
