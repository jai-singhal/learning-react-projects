import React from "react";
import Header from "./header.js";
import Action from "./action.js";
import Options from "./options.js";
import AddOption from "./add-option.js";

export class IndecisionApp extends React.Component {
    state = {
        options: props.options
    };

    handleRemoveAll = () => {
        this.setState(() => {
            return {
                options: []
            };
        });
    };

    handlePickRandomOption = () => {
        const randNo = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNo];
        alert("You should do: " + option);
    }

    handleAddOption = (optionVal) => {
        if (optionVal) {
            if (this.state.options.indexOf(optionVal) > -1) {
                return "Item Already exists";
            }
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat(optionVal)
                };
            });
        }
        else
            return "Enter valid item";
    };

    handleDeleteOption = (optionVal) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return optionVal !== option;
                })
            };
        });
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => {
                    return {
                        options: options
                    };
                });
            }
        }
        catch (e) {
            console.error("Something went wrong");
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    componentWillUnmount() {
        console.log("componentWillMount");
    }

    render() {
        return (
            <div>
                <Header />
                <Action
                    hasOptions={this.state.options.length}
                    handlePickRandomOption={this.handlePickRandomOption}
                />
                <Options
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};