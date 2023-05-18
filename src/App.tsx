import React from 'react';
import './App.css';
import { HomePage } from './modules/invoice/pages/home';

function App() {
  return (
    <div className="App">
      <div>
        <p className=''>Hello World</p>
      </div>
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
