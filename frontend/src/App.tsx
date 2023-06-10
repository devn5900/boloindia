import React from 'react';
import './App.css';
import Routes from './routes/Routes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='dark:bg-g-900'>
    <Navbar/>
    <div >

    <Routes/>
    </div>
    </div>
  );
}

export default App;
