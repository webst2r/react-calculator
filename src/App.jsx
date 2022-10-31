import './styles.css'
import { useState } from 'react';

function App() {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const handleClear = () => {
        setResult("");
    }

    const handleBackspace = () => {
        setResult(result.slice(0, result.length -1));
    }

    const handleResult = () => {
        try {
            setResult(eval(result).toString());

        } catch(err) {
            setResult("Error");
        }
    }

    return ( 
        <div className="calculator-grid">
        
            <div className="output">
                <div className="current-operand">{result}</div>
            </div>

            <button id="backspace" className="span-two" onClick={handleClear}>C</button>
            <button id="clear" onClick={handleBackspace}>DEL</button>
            <button name="/" onClick={handleClick}>&divide;</button>
            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>
            <button name="*" onClick={handleClick}>&times;</button>
            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>
            <button name="+" onClick={handleClick}>+</button>
            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button name="-" onClick={handleClick}>-</button>
            <button name="." onClick={handleClick}>.</button>
            <button name="0" onClick={handleClick}>0</button>
            <button id="result" className="span-two" onClick={handleResult }>=</button>
        </div>
    )
}

export default App