import React from 'react';
import './home.css';

function App() {
  return (
    <div className='App'>
      <header className='top_area'>
        <img className='lantern' src={require('./images/lantern.png')} alt='tag' />
        <img className='tag' src={require('./images/tags.png')} alt='tag' />
      </header>
      <div className='couple'>
        <img src={require('./images/boy.gif')} alt='boy' />
        <img src={require('./images/girl.gif')} alt='girl' />
      </div>
      <div className='drink'>
        <img src={require('./images/drink_tea.gif')} alt='drink' />
      </div>
      <div className='pot'>
        <img src={require('./images/pot.gif')} alt='pot' />
      </div>
      <div className='cook'>
        <img src={require('./images/cook.gif')} alt='cook' />
      </div>

      <div className='ready'>
        <img src={require('./images/ready.gif')} alt='ready' />
      </div>
      <div className='welcome'>
        <img src={require('./images/welcome.gif')} alt='welcome' />
      </div>
      <div className='run'>
        <img src={require('./images/run.gif')} alt='run' />
      </div>

      <div className='dancing'>
        <div className='dancing_wrap'>
          <img src={require('./images/dancer.gif')} alt='dancer' />
          <img src={require('./images/dancer2.gif')} alt='dancer2' />
          <img src={require('./images/music.gif')} alt='music' />
        </div>
      </div>
    </div>
  );
}

export default App;
