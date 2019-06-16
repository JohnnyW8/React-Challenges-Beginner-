import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

function App() {
  const [y, setY] = useState(300)
  const move = () => {
    setY(y - 50);
  }
  return (
    <div className="App">
      <h1>Move the Box!</h1>

      <button onClick={move}>👆 Move Up 👆</button>

      <div className="box" style={{transform: `translateY(${y}px)`}} />

      <ScotchInfoBar seriesNumber={6} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
