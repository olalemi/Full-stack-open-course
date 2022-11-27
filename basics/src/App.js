import React from 'react';
import './App.css';

const Hello = (props) => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" />
      <Hello name="Nurudeen" />
      <Hello name="Peka" />
    </div>
  )
}





export default App;
