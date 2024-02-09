import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState(0);

  const butClick = (e) => {
    result === 0 ? setResult(e.target.name) : setResult(result.concat(e.target.name));
    console.log(result);
  }

  const evalResultat = (e) => {
    try {
      setResult(eval(result).toString()); // Vernahashwarkic heto karoxananq sharunakenq;
    }
    catch {
      setResult('Eror!!!')
    }
  }

  const removeAll = () => {
    setResult(0);
  }

  const removeLast = () => {
    result.length > 1 ? setResult(result.slice(0, result.length - 1)) : setResult(0);
  }
  
  return (
    <div className="App">
      <div className="calculator">
        <div className="resultat"><span>{result}</span></div>
        <div className="buttons">
          <button onClick={removeLast}>AC</button>
          <button onClick={removeAll}>C</button>
          <button onClick={butClick} name='1'>1</button>
          <button onClick={butClick} name='2'>2</button>
          <button onClick={butClick} name='3'>3</button>
          <button onClick={butClick} name='4'>4</button>
          <button onClick={butClick} name='5'>5</button>
          <button onClick={butClick} name='6'>6</button>
          <button onClick={butClick} name='7'>7</button>
          <button onClick={butClick} name='8'>8</button>
          <button onClick={butClick} name='9'>9</button>
          <button onClick={butClick} name='0'>0</button>
          <button onClick={butClick} name='+'>+</button>
          <button onClick={butClick} name='-'>-</button>
          <button onClick={butClick} name='*'>x</button>
          <button onClick={butClick} name='/'>/</button>
          <button onClick={evalResultat}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
