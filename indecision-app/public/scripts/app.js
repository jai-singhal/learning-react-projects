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
        _this.state = {
            options: ["Option 1", "Option 2"]
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
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
            alert(option);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(e) {
            var _this2 = this;

            e.preventDefault();
            var optionVal = e.target.elements.option.value;
            if (optionVal) {
                this.setState(function (prevState) {
                    _this2.state.options.push(optionVal);
                    return {
                        options: _this2.state.options
                    };
                });
                e.target.elements.option.value = "";
            }
            alert("Submitted");
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision App";
            var subtitle = "Put your life in the hands of computer";

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length,
                    handlePickRandomOption: this.handlePickRandomOption
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleRemoveAll: this.handleRemoveAll
                }),
                React.createElement(AddOption, {
                    addOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            var props = this.props;
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    {
                        disabled: !this.props.hasOptions,
                        onClick: this.props.handlePickRandomOption },
                    "What should I do?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            var props = this.props;
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: props.handleRemoveAll },
                    "Remove all"
                ),
                React.createElement(
                    "ul",
                    null,
                    props.options.map(function (op) {
                        return React.createElement(Option, { key: op, opitionVal: op });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            var props = this.props;
            return React.createElement(
                "li",
                { key: props.opitionVal },
                props.opitionVal
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this7 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this7.myForm = _this7.myForm.bind(_this7);
        return _this7;
    }

    _createClass(AddOption, [{
        key: "myForm",
        value: function myForm() {
            return React.createElement(
                "form",
                { onSubmit: this.props.addOption },
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

var jsx = React.createElement(IndecisionApp, null);

var appId = document.getElementById("app");
ReactDOM.render(jsx, appId);
