import './App.css';
import React from 'react';
import Toggle from './components/Toggle';

function App() {
    return (
        <div className="App">
            <Toggle round={true} />
            <Toggle round={false} />
        </div>
    );
}

export default App;
