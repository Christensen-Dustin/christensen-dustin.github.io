// Change Text Color
function textColor(option) {
    // select color
    switch(option){
        case 0:
            document.getElementById("color1").style.color = "red";
            break;
        case 1:
            document.getElementById("color1").style.color = "blue";
            break;
        case 2:
            document.getElementById("color1").style.color = "green";
            break;
        default:
            document.getElementById("color1").style.color = "black";
    }
}

// Change Text Size
function textSize(option) {
    // select color
    switch(option){
        case 0:
            document.getElementById("size1").style.fontSize = "7px";
            break;
        case 1:
            document.getElementById("size1").style.fontSize = "17px";
            break;
        case 2:
            document.getElementById("size1").style.fontSize = "50px";
            break;
        default:
            document.getElementById("size1").style.fontSize = "24px";
    }
}

// Change CSS Style Sheet
function cssSheet(option) {
    document.getElementById('selectCSS').setAttribute('href', option);
}

// Changing the Background Through Hovering
function cssBGColor(option) {
    document.body.style.background = option;
}

// Change Image By a Click
// Unverisal Variable
var counter = 0;
// Image Changing Function
function changeImage() {
    // Variable for Image
    var image = " ";
    // Adjust Counter
    counter += 1;
    
    // Correct COUNTER is greater than 7
    if (counter >= 8) {
        counter = 0;
    }
        
    // Swicth Through the Images
    switch(counter) {
        case 0:
            image = "4.16.2010_I_Love_Taiwan(3).JPG";
            break;
        case 1:
            image = "4.16.2010_I_Love_Taiwan(4).JPG";
            break;
        case 2:
            image = "4.16.2010_I_Love_Taiwan(5).JPG";
            break;
        case 3:
            image = "4.16.2010_I_Love_Taiwan(6).JPG";
            break;
        case 4:
            image = "4.16.2010_I_Love_Taiwan(7).JPG";
            break;
        case 5:
            image = "4.16.2010_I_Love_Taiwan(8).JPG";
            break;
        case 6:
            image = "4.16.2010_I_Love_Taiwan(9).JPG";
            break;
        case 7:
            image = "4.16.2010_I_Love_Taiwan(2).JPG";
            break;
        default:
            image = "4.16.2010_I_Love_Taiwan(2).JPG";
            break;
    }
    // Send IMAGE
    document.getElementById("image1").src = image;
}
