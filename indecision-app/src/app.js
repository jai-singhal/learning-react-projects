class IndecisionApp extends React.Component{
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePickRandomOption = this.handlePickRandomOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
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
        alert("You should do: " + option);
    }

    handleAddOption(optionVal) {
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
    }

    render(){
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
                 />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>  
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: "Indecison App!!"
};

const Action = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.handlePickRandomOption}>
                What should I do?
                </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>Remove all</button>
            <ul>
                {
                    props.options.map((op) => <Option key={op} opitionVal={op} />)
                }
            </ul>
        </div>
    );
};


const Option = (props) => {
    return (
        <li key={props.opitionVal}>{props.opitionVal}</li>
    );
};


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.myForm = this.myForm.bind(this);
        this.submitForm = this.submitForm.bind(this);      
        this.state = {
            "error": undefined
        };
    }

    submitForm(e){
        e.preventDefault();
        const optionVal = e.target.elements.option.value;
        e.target.elements.option.value = "";      
        const error = this.props.handleAddOption(optionVal);
        this.setState(()=>{
            return {error: error};
        });
    }

    myForm(){
        return (
            <form onSubmit={this.submitForm}>
            {this.state.error && <p>{this.state.error}</p>}
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

const JSX = (
    <IndecisionApp options={["Learn C++ effectively", "Learn Algorithms"]} />
);

const appId = document.getElementById("app");
ReactDOM.render(JSX, appId);