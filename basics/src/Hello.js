import React from 'react'


const Hello = ({age, name}) => {

  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    console.log(yearNow)
    return yearNow - age
  }

  return (
  
      <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
    
  )
}

export default Hello;