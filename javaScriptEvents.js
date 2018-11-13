// Universal varible
var choreList;

// load chores into LocalStorage
function loadChores() {
    // variables
    xmlhttp = new XMLHttpRequest();

    // open file
    xmlhttp.open("GET", "chores.json", true);

    // load file
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            localStorage.setItem("chores", this.responseText);
        }
    };

    // Display information
    xmlhttp.send();
    // alert("Chores are Loaded");
}

// Display Chores
function displayChores(){
    // Parse LocalStorage into object
    choreList = JSON.parse(localStorage.getItem("chores"));
    var name = document.getElementById("choreList").value;
    
    // Variable setup
    var index =0;
    var count = 0;
    var display = " ";
    var displayName = " ";
    var displayList = " ";
    
    // Handle if no "name" is selected
    if (name == ""){
        displayName = " ";
        display = "No list has been loaded";
        document.getElementById("name").innerHTML = displayName;
        document.getElementById("toDoList").innerHTML = display;
        
        return;
    }
    
    // Handle when name is selected 
    if (name == "Dustin") {
        index = 0;
    }
    if (name == "Jean") {
        index = 1;
    }
    if (name == "Faith") {
        index = 2;
    }
    if (name == "Garrison") {
        index = 3;
    }
    
    displayName += "<h4>" + choreList.chores[index].name + "</h4>";
    displayList += "<li>" + choreList.chores[index].chore1 + "</li>" +
        "<li>" + choreList.chores[index].chore2 + "</li>" +
        "<li>" + choreList.chores[index].chore3 + "</li>" +
        "<li>" + choreList.chores[index].chore4 + "</li>";
    
    document.getElementById("name").innerHTML = displayName;
    document.getElementById("toDoList").innerHTML = displayList;
}

// Top Chore
function topChore() {
    var node = document.getElementById("toDoList").firstChild;
    document.getElementById("finishedList").appendChild(node);
}

// Bottom Chore
function bottomChore() {
    var node = document.getElementById("toDoList").lastChild;
    document.getElementById("finishedList").appendChild(node);
}

// Top Finished
function topFinished() {
    var node = document.getElementById("finishedList").firstChild;
    document.getElementById("toDoList").appendChild(node);
}

// Bottom Finished
function bottomFinished() {
    var node = document.getElementById("finishedList").lastChild;
    document.getElementById("toDoList").appendChild(node);
}

// display reward
function mouseOver() {
    document.getElementById("choreTipText").style.visibility = "visible";
}

function mouseOut() {
    document.getElementById("choreTipText").style.visibility = "hidden";
}

// Silly Message
function sizeUp() {
    document.getElementById("name").style.color = "red";
    document.getElementById("dueDate").style.visibility = "visible";
    document.getElementById("toDoList").style.color =  "red";
    document.getElementById("toDoList").style.fontSize = "200%";
}

function sizeDown() {
    document.getElementById("name").style.color = "black";
    document.getElementById("dueDate").style.visibility = "hidden";
    document.getElementById("toDoList").style.color =  "brown";
    document.getElementById("toDoList").style.fontSize = "100%";
}