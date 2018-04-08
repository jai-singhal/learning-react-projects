const app = {
    name: "Indecision app",
    subtitle: "Put your life in the hands of computer",
    options: []
};

const removeAll = () => {
    app.options = [];
    renderIndecisionApp();
};

const onSubmitFunction = (e) => {
    e.preventDefault();
    const optionVal = e.target.elements.option.value;
    if(optionVal){
        app.options.push(optionVal);
        e.target.elements.option.value = "";
        renderIndecisionApp();
    }
};

const makeRandomDecision = () => {
    const randNo = Math.floor(Math.random() * app.options.length);
    const option = app.options[randNo];
    alert(option);
};

const appRoot = document.getElementById("app");

const renderIndecisionApp = () => {
    const template = (
        <div>
            <div>
                <h1>{app.name}</h1>
                <p>{app.subtitle}</p>
                <button onClick={makeRandomDecision} disabled = {app.options.length == 0? true: false}>what should I choose?</button>  
                <button onClick={removeAll}>Remove all</button>    
                {app.options.length == 0 ? <p>No options</p>:<p>Here all are your options</p>} 
                <ol>           
                {
                    app.options.map((number)=>{
                        return <li key = {number}>Item {number}</li>;
                    })
                }
                </ol>
            </div>
            
            <form onSubmit={onSubmitFunction}>
                <input type="text" name="option"/>
                <button type="submit">Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();






