
let count = 0;
const addOne = () => {
    ++count;
    renderCounterApp();
};
const subOne = () => {
    --count;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};


const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const template = (
        <div>
            <h1> Count: {count}</h1>
            <button id="addCount" onClick={addOne} className="btn btn-primary">
                +1
    </button>
            <button id="addCount" onClick={subOne} className="btn btn-primary">
                -1
    </button>
            <button id="addCount" onClick={reset} className="btn btn-primary">
                reset
    </button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderCounterApp();
