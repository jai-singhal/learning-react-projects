//anonymous function
const square = function (x) {
    return x;
};
 
console.log(square(8));

function squareFun(x) {
    return x*x;
}

console.log(squareFun(5));


// es6 arrow functions
//Anonymous functions
const squareArrowFun = (x) => { 
    return x*x;
};

const cubeArrowFun = (x) => x*x*x;

console.log(squareArrowFun(8));
console.log(cubeArrowFun(8));