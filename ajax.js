// Load Data from TXT File
    // Unverisal Varibles
    var storage;
    var storageTransfer;
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
    xmlhttp.open("GET", "jsonStorage.json", true);
    
    // load file
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            localStorage.setItem("storage2", this.responseText);
            document.getElementById("parsing1").innerHTML = this.responseText;
        }
    };
    
    // Display information
    xmlhttp.send();
}

// Organize the Information
function organized() {
    
    storage = JSON.parse(localStorage.getItem("storage2"));
    
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
    document.getElementById("parsing4").innerHTML = localStorage.getItem("storage2");
    saveData();
}

// POST data
function saveData() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "jsonStorage.json", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var output = " ";
            output = this.responseText;
        }
    xhr.send(storageTransfer);
    }
}

// GET from a website
function changeIP(newIP) {
    // Handle if no country is selected
    if (newIP == ""){
        document.getElementById("statusCode").innerHTML = "No data called";
        document.getElementById("ipAddress").innerHTML = "No data called";
        document.getElementById("countryName").innerHTML = "No data called";
        document.getElementById("regionName").innerHTML = "No data called";
        document.getElementById("cityName").innerHTML = "No data called";
        document.getElementById("zipCode").innerHTML = "No data called";
        document.getElementById("latitude").innerHTML = "No data called";
        document.getElementById("longitude").innerHTML = "No data called";
        document.getElementById("timeZone").innerHTML = "No data called";
        return;
    }

    
    // Changes the IP address element of the URL
    var newURL = newIP
    // URL to be sent
    var Url = "http://api.ipinfodb.com/v3/ip-city/?key=7d36c90ee151903ebdc434f06ef0848077b59156d3e31db2ef3d063ed037de44&format=json&ip=" + newURL;
    // Gathers the information dynamically
    var xhr = new XMLHttpRequest();
    xhr.open('GET', Url, true);
    xhr.send();
        
    // Checks the state of the process
    xhr.onreadystatechange = processRequest;
            
    function processRequest() {
        // Checks the status
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Setup variables to display
            var response = JSON.parse(xhr.responseText);
            document.getElementById("statusCode").innerHTML = response.statusCode;
            document.getElementById("ipAddress").innerHTML = response.ipAddress;
            document.getElementById("countryName").innerHTML = response.countryName;
            document.getElementById("regionName").innerHTML = response.regionName;
            document.getElementById("cityName").innerHTML = response.cityName;
            document.getElementById("zipCode").innerHTML = response.zipCode;
            document.getElementById("latitude").innerHTML = response.latitude;
            document.getElementById("longitude").innerHTML = response.longitude;
            document.getElementById("timeZone").innerHTML = response.timeZone;
        }
    }
}

