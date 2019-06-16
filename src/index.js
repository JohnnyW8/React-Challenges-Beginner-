import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(num1+num2);
  const calculateNumbers = () => {
    setSum(num1+num2);
  }
  
  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input type="number" placeholder="0" value={num1} onChange={e => setNum1(+e.target.value)} />
        <input type="number" placeholder="0" value={num2} onChange={e => setNum2(+e.target.value)} />
      </div>

      <button onClick={calculateNumbers}>Add Them!</button>

      <h2>{sum}</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
