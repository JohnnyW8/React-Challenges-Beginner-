import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import BookDetail from './components/BookDetail';
import './styles.css';

function App() {
  const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';

  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(apiURL).then(response => response.json());
    setData(response);
  }
  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>Fetch Data</button>
        <br />
      </div>

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      {!data.length ? <div>Lista książek jest pusta!</div> : [...data].map((book, i) => {
        return <BookDetail key={i} book={book} index={i+1}/>;
      }) }

      <ScotchInfoBar seriesNumber={7} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
