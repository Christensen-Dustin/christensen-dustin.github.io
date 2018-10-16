// Canvas Example
function line() {
    var line = document.getElementById("myImage");
    var draw = line.getContext("2d");
    draw.moveTo(0,0);
    draw.lineTo(800,400);
    draw.moveTo(800,0);
    draw.lineTo(0,400);
    draw.stroke();
}

function circle() {
    var line = document.getElementById("myImage");
    var draw = line.getContext("2d");
    draw.beginPath();
    draw.arc(400,200,150,0,2 * Math.PI);
    draw.stroke();
}

function square() {
    var line = document.getElementById("myImage");
    var draw = line.getContext("2d");
    draw.moveTo(250,50);
    draw.lineTo(550,50);
    draw.lineTo(550,350);
    draw.lineTo(250,350);
    draw.lineTo(250,50);
    draw.stroke();
}

function retangle() {
    var line = document.getElementById("myImage");
    var draw = line.getContext("2d");
    draw.moveTo(20,20);
    draw.lineTo(780,20);
    draw.lineTo(780,380);
    draw.lineTo(20,380);
    draw.lineTo(20,20);
    draw.stroke();
}

function triangle() {
    var line = document.getElementById("myImage");
    var draw = line.getContext("2d");
    draw.moveTo(400,50);
    draw.lineTo(600,350);
    draw.lineTo(200,350);
    draw.lineTo(400,50);
    draw.stroke();
}

function printImage() {
    var line = document.getElementById("myImage");
    var draw = line.getContext("2d");
    
    var message = "-Courtesy of Sony and Santa Monica Studios-";
    
    var image = new Image();
    image.src = "God-of-War-Artwork-Banner.jpg";
    image.id = "GoWBanner";
    
    image.onload = function() {
        var image2 = draw.drawImage(image, 75, 40);
        draw.fillStyle = image2;
    };
    
    document.getElementById("messThankYou").innerHTML = message;
}
