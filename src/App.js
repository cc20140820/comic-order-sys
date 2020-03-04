import React from 'react';
import './home.css';
import Lantern from './components/lantern';

function App() {
  return (
    <div className='App'>
      <header className='top_area'>
        <div className='lantern_area'>
          <Lantern type={'left'} />
          <Lantern type={'mid'} />
          <Lantern type={'right'} />
        </div>
        <div className='tag_area'>
          
        </div>
      </header>
      
    </div>
  );
}

export default App;
