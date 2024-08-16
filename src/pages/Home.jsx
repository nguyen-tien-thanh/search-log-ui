import React from "react";
import logo from "../logo.svg";

const Home = () => {
  return (
    <div className="App">
      <header className="flex flex-col justify-center items-center bg-[#333333] h-[calc(100vh-80px)]">
        <img src={logo} className="App-logo h-[40vh]" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
};

export default Home;
