import React from "react";

export default class AddOption extends React.Component {
    state = {
        "error": undefined
    };

    submitForm = (e) => {
        e.preventDefault();
        const optionVal = e.target.elements.option.value;
        const error = this.props.handleAddOption(optionVal);
        if (!error)
            e.target.elements.option.value = "";
        this.setState(() => {
            return { error: error };
        });
    };

    myForm = () => {
        return (
            <form onSubmit={this.submitForm}>
                {this.state.error && <p>{this.state.error}</p>}
                <input type="text" name="option" />
                <button type="submit">Add Option</button>
            </form>
        );
    };

    render() {
        return (
            <div>
                <p>Add option here</p>
                {this.myForm()}
            </div>
        );
    }
}