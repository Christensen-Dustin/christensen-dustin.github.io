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
    sillySentence.noun = new Object();
    sillySentence.verb = new Object();
    sillySentence.adjective = new Object();

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

// Silly Sentence
function properties(noun1, noun2, verb1, verb2, adj1, adj2) {
    // Variables
    var display = " ";
    
    // Load object
    sillySentence.noun.noun1 = noun1;
    sillySentence.verb.verb1 = verb1;
    sillySentence.adjective.adj1 = adj1;
    sillySentence.noun.noun2 = noun2;
    sillySentence.verb.verb2 = verb2;
    sillySentence.adjective.adj2 = adj2;
        
    // Load message
    display = "The " + sillySentence.adjective.adj1 + " " + sillySentence.noun.noun1 + " found several little " + sillySentence.noun.noun2 + " " + sillySentence.verb.verb1 + " around a very " + sillySentence.adjective.adj2 + " tree. I though to myself, I wonder if they can " + sillySentence.verb.verb2 + "?";
    
    // Display message
    document.getElementById("prop").innerHTML = display;
}

function SillySentence2(noun1, noun2, verb1, verb2, adje1, adje2) {
        this.noun1 = noun1;
        this.noun2 = noun2;
        this.verb1 = verb1;
        this.verb2 = verb2;
        this.adje1 = adje1;
        this.adje2 = adje2;
    }
    
function properties2(noun1, noun2, verb1, verb2, adj1, adj2) {
    // Variables
    var display = " ";
    
    var silly1 = new SillySentence2(noun1, noun2, verb1, verb2, adj1, adj2);
    
    // Load message
    display = "There is a " + silly1.adje1 + " " + silly1.noun1 + " that grew up in a town far away. In that town the " + silly1.noun1 + " found several little " + silly1.noun2 + " " + silly1.verb1 + " around a very " + silly1.adje2 + " tree. I though to myself, I wonder if those " + silly1.noun2 + " can " + silly1.verb2 + "?";
    
    // Display message
    document.getElementById("prop2").innerHTML = display;
}

function properties3(noun1, noun2, verb1, verb2, adj1, adj2) {
    // Variables
    var display = " ";
    
    var silly2 = new SillySentence2(noun1, noun2, verb1, verb2, adj1, adj2);
    
    // Load message
    display = "There is a " + silly2.adje1 + " " + silly2.noun1 + " that grew up in a town far away. In that town the " + silly2.noun1 + " found several little " + silly2.noun2 + " " + silly2.verb1 + " around a very " + silly2.adje2 + " tree. I though to myself, I wonder if those " + silly2.noun2 + " can " + silly2.verb2 + "?";
    
    // Display message
    document.getElementById("prop3").innerHTML = display;
}
