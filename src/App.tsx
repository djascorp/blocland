import React from 'react';
import './App.css';
import { DesignPage } from './modules/invoice/presentation/pages/design';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <div className='App'>
      <DndProvider backend={HTML5Backend}>
        <DesignPage />
      </DndProvider>

    </div>
  );
}

export default App;
