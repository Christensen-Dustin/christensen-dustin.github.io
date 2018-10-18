// Load Data from TXT File
    // Unverisal Varibles
    var storage;
    var storageTransfer;
    var display = " ";
    var displayTransfer = " ";
    var count = 0;

// Loads data from file
function loadData() {
    // variables
    xmlhttp = new XMLHttpRequest();
    
    // open file
    xmlhttp.open("GET", "jsonStorage.txt", true);
    
    // load file
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            storage = JSON.parse(this.responseText);
            storageTransfer = this.responseText;
            document.getElementById("parsing1").innerHTML = storageTransfer;
        }
    };
    
    // Display information
    xmlhttp.send();
}

// Organize the Information
function organized() {
    // call function
    displayData();
    
    // Display Content
    document.getElementById("parsing2").innerHTML = display;
}
    
// display content
function displayData() {
    // reset count
    count = 0;
    
    // Load Header
    display += "<table><tr><th>First Name</th>" + "<th>Last Name</th>" + 
        "<th>Age</th>" + "<th>Position</th>" + "<th>Degree</th>" + "<th>Years</th></tr>";
    // Loop Throw the data
    for (var i = 0; i < storage.personel.length; i++) {
        display += "<tr><td>" + storage.personel[i].name.first + "</td>" + 
            "<td>" + storage.personel[i].name.last + "</td>" +
            "<td>" + storage.personel[i].age + "</td>" + 
            "<td>" + storage.personel[i].position + "</td>" + 
            "<td>" + storage.personel[i].degree + "</td>" + 
            "<td>" + storage.personel[i].years + "</td>"
        
        count++;
    }
    
    // Close the TABLE
    display += "</table>";
}

// Input data and store it
function inputData() {
    // Variables
    var x = count;
    
    // grab text
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var age = document.getElementById("age").value;
    var position = document.getElementById("pos").value;
    var degree = document.getElementById("degree").value;
    var years = document.getElementById("years").value;
    
    // load new variables
    storage.personel[x].name.first = fName;
    storage.personel[x].name.last = lName;
    storage.personel[x].age = age;
    storage.personel[x].position = position;
    storage.personel[x].degree = degree;
    storage.personel[x].years = years;
    
    // call function
    displayData();
    
    document.getElementById("parsing3").innerHTML = display;
}

