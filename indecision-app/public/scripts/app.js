"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handlePickRandomOption = _this.handlePickRandomOption.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem("options");
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return {
                            options: options
                        };
                    });
                }
            } catch (e) {
                console.error("Something went wrong");
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem("options", json);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("componentWillMount");
        }
    }, {
        key: "handleRemoveAll",
        value: function handleRemoveAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "handlePickRandomOption",
        value: function handlePickRandomOption() {
            var randNo = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randNo];
            alert("You should do: " + option);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(optionVal) {
            if (optionVal) {
                if (this.state.options.indexOf(optionVal) > -1) {
                    return "Item Already exists";
                }
                this.setState(function (prevState) {
                    return {
                        options: prevState.options.concat(optionVal)
                    };
                });
            } else return "Enter valid item";
        }
    }, {
        key: "handleDeleteOption",
        value: function handleDeleteOption(optionVal) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionVal !== option;
                    })
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(Action, {
                    hasOptions: this.state.options.length,
                    handlePickRandomOption: this.handlePickRandomOption
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleRemoveAll: this.handleRemoveAll,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: "Indecison App!!"
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                disabled: !props.hasOptions,
                onClick: props.handlePickRandomOption },
            "What should I do?"
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { disabled: props.options.length === 0, onClick: props.handleRemoveAll },
            "Remove all"
        ),
        props.options.length === 0 && React.createElement(
            "p",
            null,
            "Add options to get started !!"
        ),
        React.createElement(
            "ul",
            null,
            props.options.map(function (op) {
                return React.createElement(Option, {
                    key: op,
                    opitionVal: op,
                    handleDeleteOption: props.handleDeleteOption
                });
            })
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        "li",
        { key: props.opitionVal },
        props.opitionVal,
        React.createElement(
            "button",
            { onClick: function onClick(e) {
                    props.handleDeleteOption(props.opitionVal);
                } },
            "Remove"
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.myForm = _this2.myForm.bind(_this2);
        _this2.submitForm = _this2.submitForm.bind(_this2);
        _this2.state = {
            "error": undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "submitForm",
        value: function submitForm(e) {
            e.preventDefault();
            var optionVal = e.target.elements.option.value;
            var error = this.props.handleAddOption(optionVal);
            if (!error) e.target.elements.option.value = "";
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: "myForm",
        value: function myForm() {
            return React.createElement(
                "form",
                { onSubmit: this.submitForm },
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement("input", { type: "text", name: "option" }),
                React.createElement(
                    "button",
                    { type: "submit" },
                    "Add Option"
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "Add option here"
                ),
                this.myForm()
            );
        }
    }]);

    return AddOption;
}(React.Component);

var JSX = React.createElement(IndecisionApp, { options: ["Learn C++ effectively", "Learn Algorithms"] });

var appId = document.getElementById("app");
ReactDOM.render(JSX, appId);
