import React from 'react';
import Board from './Board';
import questionsData from  '../questionsData';

function App() {
    return (
        <div className="Tablo">
            <Board questions={questionsData}/>
        </div>
    )
}

export default App;