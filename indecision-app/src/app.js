class IndecisionApp extends React.Component{
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePickRandomOption = this.handlePickRandomOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ["Option 1", "Option 2"]
        };
    }

    handleRemoveAll(){
        this.setState(()=>{
            return {
                options: []
            };
        });
    }

    handlePickRandomOption(){
        const randNo = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNo];
        alert(option);
    }

    handleAddOption(e) {
        e.preventDefault();
        const optionVal = e.target.elements.option.value;
        if (optionVal) {
            this.setState((prevState) => {
                this.state.options.push(optionVal);
                return {
                    options: this.state.options
                };
            });
            e.target.elements.option.value = "";
        }
        alert("Submitted");
    }

    render(){
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of computer";

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length} 
                    handlePickRandomOption={this.handlePickRandomOption}
                />
                <Options 
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}    
                 />
                <AddOption 
                    addOption={this.handleAddOption}
                />
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

    render() {
        return (
            <div>
                <button 
                    disabled={!this.props.hasOptions} 
                    onClick={this.props.handlePickRandomOption}>
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        const props = this.props;
        return (
            <div>
                <button onClick={props.handleRemoveAll}>Remove all</button>
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
    constructor(props) {
        super(props);
        this.myForm = this.myForm.bind(this);
    }
    myForm(){
        return (
            <form onSubmit={this.props.addOption}>
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