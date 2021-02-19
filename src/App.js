import './App.css';
import React from "react";
import Inventory from "./Inventory";
import Projects from "./Projects";

const inventory = [
    {colour: "blue", quantity: 2},
    {colour: "red", quantity: 1},
    {colour: "black", quantity: 3},
    {colour: "white", quantity: 5}
]

const projects = [
    {
        name: "Hat",
        woolNeeded: [
            {colour: "blue", quantity: 2}
        ]
    },
    {
        name: "Jumper",
        woolNeeded: [
            {colour: "black", quantity: 2},
            {colour: "red", quantity: 1}
        ]
    }
]

function App() {
    return (
        <div>
            <Inventory inventory={inventory}/>
            <Projects projects={projects}/>
        </div>
    );
}

export default App;
