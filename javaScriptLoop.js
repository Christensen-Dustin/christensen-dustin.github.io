// FOR Loop Example
function loopExample() {
    var loops = ["There", "are", "different", "types", "of", "loops.",
                 "There", "are", "For", "loops,", "While", "loops",
                 "and", "Do/While", "loops."];
    var loopText = "";
    var index;
    
    for(index = 0; index < loops.length; index++) {
        loopText += loops[index] + " ";
    }
    
    document.getElementById("loop1").innerHTML = loopText;             
}

// WHILE Loop Example
function loopExample2(userInput) {
    var loops = ["There", "are", "different", "types", "of", "loops.",
                 "There", "are", "For", "loops,", "While", "loops",
                 "and", "Do/While", "loops."];
    var loopText = "";
    var index = userInput - 1;
        
    while(index >= 0) {
        loopText += loops[index] + " ";
        index--;
    }
    
    document.getElementById("loop2").innerHTML = loopText;
}

// DO/WHILE Loop Example
function loopExample3(wordFind) {
    var loops = ["There", "are", "different", "types", "of", "loops.",
                 "There", "are", "For", "loops,", "While", "loops",
                 "and", "Do/While", "loops."];
    var loopText = "";
    var index = 0;
    var count = 0;
    
    do {
        if (loops[index] == wordFind) {
            loopText += loops[index] + " ";
            count++;
        }
        index++;
    }
    while(index < loops.length);
    
    document.getElementById("loop3a").innerHTML = wordFind;
    document.getElementById("loop3b").innerHTML = count;
    document.getElementById("loop3c").innerHTML = loopText;
    
}
