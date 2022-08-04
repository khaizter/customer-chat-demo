import React from "react";
import logo from "./logo.svg";
import "./App.css";
const MessengerCustomerChat = require("react-messenger-customer-chat");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MessengerCustomerChat pageId="100839829404972" appId="573592214218875" />
    </div>
  );
}

export default App;
