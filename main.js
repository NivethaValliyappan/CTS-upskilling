/* =====================================
   JAVASCRIPT BASICS
===================================== */

console.log("Welcome to the Community Portal");

window.onload = function () {
    alert("Page Loaded Successfully");
};

/* =====================================
   EVENT CLASS
===================================== */

class Event {

    constructor(name, category, seats, fee) {

        this.name = name;
        this.category = category;
        this.seats = seats;
        this.fee = fee;
    }
}

/* =====================================
   PROTOTYPE METHOD
===================================== */

Event.prototype.checkAvailability = function () {

    return this.seats > 0;
};

/* =====================================
   EVENTS ARRAY
===================================== */

let events = [

    new Event("Music Festival", "Music", 50, 500),

    new Event("Baking Workshop", "Workshop", 25, 300),

    new Event("Sports Day", "Sports", 40, 200)
];

/* =====================================
   OBJECT ENTRIES
===================================== */

console.log(Object.entries(events[0]));

/* =====================================
   DISPLAY EVENTS
===================================== */

function displayEvents(list = events) {

    const container =
        document.getElementById("eventContainer");

    container.innerHTML = "";

    list.forEach(event => {

        if (!event.checkAvailability()) return;

        const card =
            document.createElement("div");

        card.className = "eventCard";

        card.innerHTML = `

        <h3>${event.name}</h3>

        <p><strong>Category:</strong> ${event.category}</p>

        <p><strong>Seats Available:</strong> ${event.seats}</p>

        <p><strong>Fee:</strong> ₹${event.fee}</p>

        <button onclick="registerUser('${event.name}')">
        Register
        </button>

        `;

        container.appendChild(card);
    });
}

displayEvents();

/* =====================================
   ADD EVENT
===================================== */

function addEvent(name, category, seats, fee) {

    events.push(
        new Event(
            name,
            category,
            seats,
            fee
        )
    );

    displayEvents();
}

/* =====================================
   REGISTER USER
===================================== */

function registerUser(eventName) {

    alert(
        "Successfully Registered for " +
        eventName
    );
}

/* =====================================
   FILTER EVENTS
===================================== */

function filterEvents() {

    let category =
        document.getElementById(
            "categoryFilter"
        ).value;

    if (category === "all") {

        displayEvents();

        return;
    }

    let filteredEvents =
        events.filter(event =>
            event.category === category
        );

    displayEvents(filteredEvents);
}

/* =====================================
   MAP METHOD
===================================== */

const eventNames =
    events.map(event =>
        `Event: ${event.name}`
    );

console.log(eventNames);

/* =====================================
   SEARCH EVENTS
===================================== */

document
.getElementById("searchBox")
.addEventListener("keyup", function () {

    let keyword =
        this.value.toLowerCase();

    let result =
        events.filter(event =>
            event.name
                .toLowerCase()
                .includes(keyword)
        );

    displayEvents(result);
});

/* =====================================
   CLOSURE
===================================== */

function registrationCounter() {

    let count = 0;

    return function () {

        count++;

        console.log(
            "Registrations:",
            count
        );

        return count;
    };
}

const counter =
    registrationCounter();

/* =====================================
   PHONE VALIDATION
===================================== */

function validatePhone() {

    let phone =
        document.getElementById(
            "phone"
        ).value;

    if (!/^[0-9]{10}$/.test(phone)) {

        alert(
            "Please Enter Valid 10 Digit Phone Number"
        );
    }
}

/* =====================================
   EVENT FEE
===================================== */

function showFee() {

    let eventType =
        document.getElementById(
            "eventType"
        ).value;

    let fee = "";

    switch (eventType) {

        case "Music":
            fee = "₹500";
            break;

        case "Workshop":
            fee = "₹300";
            break;

        case "Sports":
            fee = "₹200";
            break;

        default:
            fee = "";
    }

    document.getElementById(
        "feeDisplay"
    ).innerHTML =
        "Event Fee: " + fee;
}

/* =====================================
   CHARACTER COUNTER
===================================== */

document
.getElementById("feedback")
.addEventListener("keyup", function () {

    document
    .getElementById("charCount")
    .innerText =
    this.value.length;
});

/* =====================================
   FORM SUBMISSION
===================================== */

document
.getElementById("registrationForm")
.addEventListener(
"submit",
function(event){

    event.preventDefault();

    let name =
        this.elements["name"].value;

    let email =
        this.elements["email"].value;

    if(name === "" || email === ""){

        document
        .getElementById(
            "outputMessage"
        )
        .innerHTML =
        "Fill all fields";

        return;
    }

    counter();

    document
    .getElementById(
        "outputMessage"
    )
    .innerHTML =
    "Registration Successful";
});

/* =====================================
   IMAGE ENLARGE
===================================== */

function enlargeImage(image){

    if(
        image.style.transform ===
        "scale(1.5)"
    ){

        image.style.transform =
        "scale(1)";
    }

    else{

        image.style.transform =
        "scale(1.5)";
    }
}

/* =====================================
   VIDEO READY
===================================== */

function videoReady(){

    document
    .getElementById(
        "videoStatus"
    )
    .innerHTML =
    "Video Ready To Play";
}

/* =====================================
   BEFORE UNLOAD
===================================== */

window.onbeforeunload =
function(){

    return "Unsaved changes may be lost";
};

/* =====================================
   LOCAL STORAGE
===================================== */

function savePreference(){

    let eventType =
        document.getElementById(
            "eventType"
        ).value;

    localStorage.setItem(
        "preferredEvent",
        eventType
    );

    sessionStorage.setItem(
        "lastVisit",
        new Date()
    );

    alert(
        "Preference Saved"
    );
}

/* =====================================
   LOAD SAVED DATA
===================================== */

window.addEventListener(
"load",
function(){

    let saved =
    localStorage.getItem(
        "preferredEvent"
    );

    if(saved){

        document
        .getElementById(
            "eventType"
        )
        .value = saved;
    }
});

/* =====================================
   CLEAR STORAGE
===================================== */

function clearPreferences(){

    localStorage.clear();

    sessionStorage.clear();

    alert(
        "Preferences Cleared"
    );
}

/* =====================================
   GEOLOCATION
===================================== */
function findLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function(position) {

                document.getElementById(
                    "locationResult"
                ).innerHTML =

                "Latitude: " +
                position.coords.latitude +

                "<br>Longitude: " +
                position.coords.longitude;
            },

            function(error) {

                document.getElementById(
                    "locationResult"
                ).innerHTML =

                "Location Error: " +
                error.message;
            }

        );

    } else {

        document.getElementById(
            "locationResult"
        ).innerHTML =

        "Geolocation not supported by this browser.";
    }
}
/* =====================================
   TRY CATCH
===================================== */

try{

    console.log(
        "Application Started"
    );
}

catch(error){

    console.log(error);
}

/* =====================================
   AJAX SIMULATION + FETCH
===================================== */

function sendRegistration(){

    document
    .getElementById(
        "ajaxResult"
    )
    .innerHTML =
    "Sending...";

    setTimeout(() => {

        fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {

            method:"POST",

            headers:{
                "Content-Type":
                "application/json"
            },

            body:JSON.stringify({

                name:"Community User",

                event:"Music Festival"
            })
        })

        .then(response =>
            response.json()
        )

        .then(data => {

            document
            .getElementById(
                "ajaxResult"
            )
            .innerHTML =
            "Registration Sent Successfully";
        })

        .catch(error => {

            document
            .getElementById(
                "ajaxResult"
            )
            .innerHTML =
            "Request Failed";
        });

    },2000);
}

/* =====================================
   ASYNC AWAIT
===================================== */

async function fetchEvents(){

    try{

        const response =
        await fetch(
        "https://jsonplaceholder.typicode.com/posts"
        );

        const data =
        await response.json();

        console.log(
            data.slice(0,5)
        );
    }

    catch(error){

        console.log(error);
    }
}

fetchEvents();

/* =====================================
   JQUERY
===================================== */

$(document).ready(function(){

    $("#registerBtn").click(function(){

        $(".eventCard").fadeOut(200);

        $(".eventCard").fadeIn(500);
    });
});

/* =====================================
   FINAL LOGS
===================================== */

console.log("Events Loaded");
console.log(events);