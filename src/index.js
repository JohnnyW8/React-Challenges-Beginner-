import React from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import UserDetails from './components/UserDetails';
import './styles.css';

const user = {
    name: 'Chris on Code',
    location: 'Las Vegas',
    foodType: 'Everything',
    age: 28,
    likes: 'Coding into the wee hours of the morning',
    twitterUsername: 'chrisoncode',
    avatar:
      'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
  };

function App() {
    return (
      <div className="App">
        <div className="user-deets">
          <UserDetails user={user} />
        </div>
        <ScotchInfoBar />
      </div>
    );
  }

  const rootElement = document.getElementById('root');
  ReactDOM.render(<App />, rootElement);