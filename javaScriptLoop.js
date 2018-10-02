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

// If, ELSE, and ELSE IF Conditions Example
function questionAnswer1(answer1) {
    var response;
    
    if(answer1 == "yes" || answer1 == "Yes" || answer1 == "YES"){
        response = "Though it did not require anything of you to receive your desired blessing, it will require more to keep it.";
    }
    else if(answer1 == "no" || answer1 == "No" || answer1 == "NO"){
        response = "I have always thought it is better to earn your blessing. They tend to mean so much more than things that are just given.";
    }
    else {
        response = "Sometimes it is just better not to answer the question."
    }
    
    document.getElementById("condition1").innerHTML = response;
}

// SWITCH Conditions Example
function questionAnswer2(answer2) {
    var response;
    
    switch(answer2) {
        case "yes":
            response = "Though it did not require anything of you to receive your desired blessing, it will require more to keep it.";
            break;
        case "no":
            response = "I have always thought it is better to earn your blessing. They tend to mean so much more than things that are just given.";
            break;
        case "maybe":
            response = "Sometimes it is just better not to answer the question.";
            break;
        default:
            response = "Waiting";
    }
    
    document.getElementById("condition2").innerHTML = response;
}

// PARAMETER Example
var numbers = [];

function parameter() {
    numbers.push(document.getElementById("input").value);
    var index;
    var answer1 = numbers.length;
    var answer2 = 1;
    var answer3;
            
    for(index = 0; index < numbers.length; index++) {
        answer2 *= numbers[index];
        answer3 += numbers[index] + " ";
    }        
    
    document.getElementById("parameter1").innerHTML = answer1;
    document.getElementById("parameter2").innerHTML = answer2;
    document.getElementById("parameter3").innerHTML = answer3;
}
    
// ARRAY Example
var words = [];

function simpleArray() {
    words.push(document.getElementById("input2").value);
    var index;
    var answer1 = words.length;
    var answer2;
            
    for(index = 0; index < words.length; index++) {
        answer2 += words[index] + " ";
    }        
    
    document.getElementById("simple1").innerHTML = answer1;
    document.getElementById("simple2").innerHTML = answer2;
}

// ASSOCIATIVE ARRAY Example
var sentenceInput = [];

function arrayAssoc() {
    var first = document.getElementById("firstName").value;
    var last = document.getElementById("lastName").value;
    var adj = document.getElementById("adj").value;
    var noun = document.getElementById("noun").value;
    var verb = document.getElementById("verb").value;

    sentenceInput = {
        "First Name" : first,
        "Last Name" : last,
        "Adjective" : adj,
        "Noun" : noun,
        "Verb" : verb
    };

    document.getElementById("assoc1").innerHTML = sentenceInput["First Name"];
    document.getElementById("assoc2").innerHTML = sentenceInput["Last Name"];
    document.getElementById("assoc3").innerHTML = sentenceInput["Adjective"];
    document.getElementById("assoc4").innerHTML = sentenceInput["Noun"];
    document.getElementById("assoc5").innerHTML = sentenceInput["Verb"];
}
