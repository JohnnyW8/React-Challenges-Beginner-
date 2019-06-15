import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import UserDetails from "./components/UserDetails";
import "./styles.css";

/**
 * Our data comes from users-data.js
 * -----------------------------
 */
import users from "./users-data";

/**
 * Our React component where we display data
 * -----------------------------
 */
function App() {
    console.log(users);
    
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Loop Over an Array of Data</h2>
      </div>

      <div className="users">
          {users.map((user, i) => <UserDetails key={i} user={user} />)}
      </div>
      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
