console.log("React dom");

let userName = "Jai Singhal";
let age = 20;
let locations = "Jaipur/India";

const user = {
    "name": userName,
    "age": age,
    "location": locations
};

function getLocation(location) {
    if(location)
        return <p>Location: {location}</p>;
    return <p></p>;
}

const template2 = (
    <div>
        <h1>Name: {user.name ? user.name : "None"}</h1>
        {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
        <p>{getLocation(user.location)}</p>
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);