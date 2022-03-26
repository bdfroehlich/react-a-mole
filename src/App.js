import { useState } from 'react'
import MoleContainer from './moleContainer'
import './App.css';

function App(){
    let [score, setScore] = useState(0)

    const container = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
     }

    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 36; i++) {
            hills.push(
                <MoleContainer
                key={i}
                setScore={setScore}
                score={score} />
            )
        }
    
        return (
            <div style={container}>
                {hills}
            </div>
        )
    }

    return (
        <div style={{ textAlign: 'center'}}>
            <h1 id="title">React-a-Mole!</h1>
            <h2 id="score">{score}</h2>
            {createMoleHill()}
        </div>
    )
}

export default App;
