"use strict";

var app = {
    name: "Indecision app",
    subtitle: "Put your life in the hands of computer",
    options: []
};

var removeAll = function removeAll() {
    app.options = [];
    renderIndecisionApp();
};

var onSubmitFunction = function onSubmitFunction(e) {
    e.preventDefault();
    var optionVal = e.target.elements.option.value;
    if (optionVal) {
        app.options.push(optionVal);
        e.target.elements.option.value = "";
        renderIndecisionApp();
    }
};

var makeRandomDecision = function makeRandomDecision() {
    var randNo = Math.floor(Math.random() * app.options.length);
    var option = app.options[randNo];
    alert(option);
};

var appRoot = document.getElementById("app");

var renderIndecisionApp = function renderIndecisionApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                app.name
            ),
            React.createElement(
                "p",
                null,
                app.subtitle
            ),
            React.createElement(
                "button",
                { onClick: makeRandomDecision, disabled: app.options.length == 0 ? true : false },
                "what should I choose?"
            ),
            React.createElement(
                "button",
                { onClick: removeAll },
                "Remove all"
            ),
            app.options.length == 0 ? React.createElement(
                "p",
                null,
                "No options"
            ) : React.createElement(
                "p",
                null,
                "Here all are your options"
            ),
            React.createElement(
                "ol",
                null,
                app.options.map(function (number) {
                    return React.createElement(
                        "li",
                        { key: number },
                        "Item ",
                        number
                    );
                })
            )
        ),
        React.createElement(
            "form",
            { onSubmit: onSubmitFunction },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                { type: "submit" },
                "Add Option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
