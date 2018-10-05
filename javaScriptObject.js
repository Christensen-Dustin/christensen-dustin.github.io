// Universal Variables
var personalInfo = new Object();
    personalInfo.firstName = "Dustin";
    personalInfo.lastName = "Christensen";
    personalInfo.age = "41";
    personalInfo.gender = "Male";

personalInfo.car = new Object();
    personalInfo.car.make = "Ford";
    personalInfo.car.model = "Mustang";
    personalInfo.car.year = "1966";
    personalInfo.car.color = "Black Cherry";

var sillySentence = new Object(); 

// Personal information
function objectFunction() {
    // Load message in variable
    var display = personalInfo.firstName + " " + 
        personalInfo.lastName + " " + 
        personalInfo.age + " " +
        personalInfo.gender;
        
    // Display info
    document.getElementById("info").innerHTML = display;
}
function objectFunction2() {
    // varibles
    var display2 = " ";
    var first = document.getElementById("firstName").value;
    var last = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    
    // Swap information
    personalInfo["firstName"] = first;
    personalInfo["lastName"] = last;
    personalInfo["age"] = age;
    personalInfo["gender"] = gender;
    
    // Load string with new data
    var display2 = personalInfo.firstName + " " + 
        personalInfo.lastName + " " + 
        personalInfo.age + " " +
        personalInfo.gender;
    
    // Display new info
    document.getElementById("info2").innerHTML = display2;
}

// Car fun
function inheritance() {
    // Adjust Univseral Variables
    personalInfo.firstName = "Dustin";
    personalInfo.lastName = "Christensen";
        
    // Variable
    var display3 = personalInfo.firstName + " " + personalInfo.lastName + 
        " likes the " + personalInfo.car.year + " " + personalInfo.car.make + " " +
        personalInfo.car.model + ". " + personalInfo.firstName + " thinks it looks best painted the color " + personalInfo.car.color + ".";
    
    // Display message
    document.getElementById("car1").innerHTML = display3;
}

function inheritance2() {
    // Variables
    var adjYear = parseInt(document.getElementById("addYear").value);
    var currentYear = parseInt(personalInfo.car.year);
    var newYear = currentYear + adjYear;
    
    // Check for validity
    if (newYear > 2019) {
        newYear = 2019;
    }
    
    // Update universal variable
    personalInfo.car.year = newYear;
}

function inheritance3() {
    // Variables
    var adjYear = document.getElementById("subYear").value;
    var currentYear = personalInfo.car.year;
    var newYear = currentYear - adjYear;
    
    // Check for validity
    if (newYear < 1966) {
        newYear = 1966;
    }
    
    // Update universal variable
    personalInfo.car.year = newYear;
}

function inheritance4() {
    // Adjust Univseral Variables
    personalInfo.firstName = "Dustin";
    personalInfo.lastName = "Christensen";
        
    // Variable
    var display3 = personalInfo.firstName + " " + personalInfo.lastName + 
        " likes the " + personalInfo.car.year + " " + personalInfo.car.make + " " +
        personalInfo.car.model + ". " + personalInfo.firstName + " thinks it looks best painted the color " + personalInfo.car.color + ".";
    
    // Display message
    document.getElementById("car2").innerHTML = display3;
}

// Goal making ??     
function properties() {
    // Variables
    var display = " ";
    var noun1 = document.getElementById("noun1").value;
    var verb1 = document.getElementById("verb1").value;
    var adj1 = document.getElementById("adj1").value; 
    var noun2 = document.getElementById("noun2").value;
    var verb2 = document.getElementById("verb2").value;
    var adj2 = document.getElementById("adj2").value;
    
    // Load object
    sillySentence.noun1 = noun1;
    sillySentence.verb1 = verb1;
    sillySentence.adj1 = adj1;
    sillySentence.noun2 = noun2;
    sillySentence.verb2 = verb2;
    sillySentence.adj2 = adj2;
        
    // Load message
    display = "The " + sillySentence.adj1 + " " + sillySentence.noun1 + " found several little " + sillySentence.noun2 + " " + sillySentence.verb1 + " around a very " + sillySentence.adj2 + " tree. I though to myself, I wonder if they can " + sillySentence.verb2 + "?";
    
    // Display message
    document.getElementById("prop").innerHTML = display;
}
