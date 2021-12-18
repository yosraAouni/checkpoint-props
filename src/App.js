import React from 'react'
import './App.css';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App" style={{color:'red'}}>
      <Profile fullName='Ouni Yossra' bio='Gomycode Menzah 5' profession='Web Developer'>
        <img src='https://salondumariagegap.fr/wp-content/uploads/avatar-femme.jpg' alt='maypic' />
      </Profile>
    </div>
  );
}

export default App;
