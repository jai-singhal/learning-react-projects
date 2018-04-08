"use strict";

var count = 0;
var addOne = function addOne() {
    ++count;
    renderCounterApp();
};
var subOne = function subOne() {
    --count;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            " Count: ",
            count
        ),
        React.createElement(
            "button",
            { id: "addCount", onClick: addOne, className: "btn btn-primary" },
            "+1"
        ),
        React.createElement(
            "button",
            { id: "addCount", onClick: subOne, className: "btn btn-primary" },
            "-1"
        ),
        React.createElement(
            "button",
            { id: "addCount", onClick: reset, className: "btn btn-primary" },
            "reset"
        )
    );
    ReactDOM.render(template, appRoot);
};

renderCounterApp();
