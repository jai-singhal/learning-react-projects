import React from "react";
import ReactDOM from "react-dom";
import { IndecisionApp } from "./components/indecsion-app";

const JSX = (
    <IndecisionApp options={["Learn C++ effectively", "Learn Algorithms"]} />
);

const appId = document.getElementById("app");
ReactDOM.render(JSX, appId);