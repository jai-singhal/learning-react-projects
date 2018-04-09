class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of computer";
        const options = ["Option 1", "Option 2"];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options = {options} />
                <AddOption />
            </div>  
        );
    }
}


class Header extends React.Component {
    render(){
        const props = this.props;
        return (
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert("HI there");
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    removeAll() {
        alert("removeAll clicked");
    }

    render() {
        const props = this.props;
        return (
            <div>
                <button onClick={this.removeAll}>Remove all</button>
                <ul>
                {
                    props.options.map((op)=><Option key = {op} opitionVal={op} />)
                }
                </ul>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        const props = this.props;
        return (
            <li key={props.opitionVal}>{props.opitionVal}</li>
        );
    }   
}


class AddOption extends React.Component {
    onSubmitFunction(e){
        e.preventDefault();
        const optionVal = e.target.elements.option.value;
        if (optionVal) {
            // app.options.push(optionVal);
            e.target.elements.option.value = "";
            // renderIndecisionApp();
        }
        alert("Submitted");
    }

    myForm(){
        return (
        <form onSubmit={this.onSubmitFunction}>
            <input type="text" name="option" />
            <button type="submit">Add Option</button>
        </form>
        );
    }

    render() {
        return (
            <div>
                <p>Add option here</p>
                {this.myForm()}
            </div>
        );
    }
}

const jsx = (
    <IndecisionApp />
);

const appId = document.getElementById("app");
ReactDOM.render(jsx, appId);