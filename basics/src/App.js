import React from 'react';
import Header from './Header';
import Hello from './Hello';
import Total from './Total';




const App = ({name,age}) => {
  // const name = 'Peter'
  // const age = 10

  return (
    <div>
      
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} /> 

    </div>
  )
}





export default App;
