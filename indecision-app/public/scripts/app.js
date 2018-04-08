"use strict";

console.log("React dom");

var userName = "Jai Singhal";
var age = 20;
var locations = "Jaipur/India";

var user = {
    "name": userName,
    "age": age,
    "location": locations
};

function getLocation(location) {
    if (location) return React.createElement(
        "p",
        null,
        "Location: ",
        location
    );
    return React.createElement("p", null);
}

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Name: ",
        user.name ? user.name : "None"
    ),
    user.age && user.age > 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        getLocation(user.location)
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
