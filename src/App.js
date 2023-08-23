import React from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import Header from './Components/Header/Header';
import Auth from './Components/Auth/Auth';

function App() {
  return (
    <div className="App">
      <Header />
      <Auth />
      <Counter />
    </div >
  );
}

export default App;
