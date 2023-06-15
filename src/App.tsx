import React from 'react';
import './App.css';
import { HomePage } from './modules/invoice/presentation/pages/home';
import { DesignPage } from './modules/invoice/presentation/pages/design';

function App() {
  return (
    <div className='App'>
      <DesignPage  />
    </div>
  );
}

export default App;
