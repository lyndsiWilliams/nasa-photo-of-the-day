import React from "react";
import { Jumbotron } from 'reactstrap';
import List from "./components/List";
import { bold } from "ansi-colors";
// import "./App.css";

function App() {
  
  return (
    <div className="App">
      <Jumbotron body inverse style={{
                backgroundColor: '#D8BFD8',
                textAlign: 'center',
                fontSize: '3rem',
                fontWeight: 'bold'
                }}>
                Spacey Introduction!
      </Jumbotron>
      <List />
    </div>
  );
}

export default App;
