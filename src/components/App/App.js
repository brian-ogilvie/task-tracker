import React, { PureComponent } from 'react';
import './App.css';
import Board from '../Board/Board'
import Header from '../Header/Header'

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Header />
        <Board />
      </div>
    );
  }
}

export default App;
