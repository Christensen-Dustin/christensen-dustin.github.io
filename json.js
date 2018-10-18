// Load Data from TXT File
    // Unverisal Varibles
    var storage;
    var storageTransfer;
    var storage2;
    var display = " ";
    var count = 0;

// adding personel
function AddPersonel(fName, lName, age, position, degree, years) {
    this.first = fName;
    this.last = lName;
    this.age = age;
    this.position = position;
    this.degree = degree;
    this.years = years;
}

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
    display = " ";
    
    // Load Header
    display += "<table><tr><th>First Name</th>" + "<th>Last Name</th>" + 
        "<th>Age</th>" + "<th>Position</th>" + "<th>Degree</th>" + "<th>Years</th></tr>";
    // Loop Throw the data
    for (var i = 0; i < storage.personel.length; i++) {
        display += "<tr><td>" + storage.personel[i].first + "</td>" + 
            "<td>" + storage.personel[i].last + "</td>" +
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
    
    // Create new object for personel
    var newPersonel = new AddPersonel(fName, lName, age, position, degree, years);
    
    storage.personel[storage.personel.length] = newPersonel;
    
    // call function
    displayData();
    
    storageTransfer = JSON.stringify(storage);
    localStorage.setItem("storage2", storageTransfer);
    
    document.getElementById("parsing3").innerHTML = display;
}

// Display stringified variable
function stringifiedVariable() {
    document.getElementById("parsing4").innerHTML = storageTransfer;
}
