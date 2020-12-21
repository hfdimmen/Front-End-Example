import cat from './cat.svg';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={cat} className="App-cat" alt="logo" />
        <p>
          Welcome to this cat-fact frontend test
        </p>
      </header>
      <body className="App-body">
        <p>Cat facts coming soon!</p>
      </body>    
    </div>
  );
}

export default App;
