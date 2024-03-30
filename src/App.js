import React, { Component } from 'react';
// import Foods from './components/Foods';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Stages from './components/Stages';
// __________________________________________________________________________________

// // Exersice3

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Stages />
            </>
        );
    }
}

export default App;
// ---------------------------------------------------------------------------