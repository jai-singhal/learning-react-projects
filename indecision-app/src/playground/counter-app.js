
class Counter extends React.Component{
    constructor(props) {        
        super(props);
        this.addOne = this.addOne.bind(this);
        this.subOne = this.subOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count : 0,
            name: "Jai Singhal"
        };
    }
    addOne(){
        this.setState((prevState) => { //arrow function
            return {
                count: prevState.count + 1
            };
        });
    }
    subOne(){
        this.setState(function (prevState) {    //simple es5 function
            return{
                count: prevState.count - 1,
            };
         });
    }
    reset(){
        this.setState(() => { //arrow function prffered one
            return {
                count: 0
            };
        });
        //2nd method for setState
        // this.setState({  // old method use minimal
        //     count: 0
        // });
    }
    render(){
        return (
            <div>
                {this.state.name}
                 <h1> Count: {this.state.count}</h1>
                 <button id="addCount" onClick={this.addOne} className="btn btn-primary">
                 +1</button>
                <button id="addCount" onClick={this.subOne} className="btn btn-primary">
                    -1</button>
                <button id="addCount" onClick={this.reset} className="btn btn-primary">
                    reset</button>
            </div>
        );
    }
}

const template = (
    <Counter />
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

// let count = 0;
// const addOne = () => {
//     ++count;
//     renderCounterApp();
// };
// const subOne = () => {
//     --count;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };


// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//     const template = (
//         <div>
//             <h1> Count: {count}</h1>
//             <button id="addCount" onClick={addOne} className="btn btn-primary">
//                 +1
//     </button>
//             <button id="addCount" onClick={subOne} className="btn btn-primary">
//                 -1
//     </button>
//             <button id="addCount" onClick={reset} className="btn btn-primary">
//                 reset
//     </button>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// renderCounterApp();
