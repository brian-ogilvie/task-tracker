import React, { PureComponent } from 'react';
import './App.css';
import Board from '../Board/Board'

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
