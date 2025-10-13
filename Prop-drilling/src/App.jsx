import React from 'react'
import ChildOne from './ChildOne'

const App = () => {
  return (
    <div>
      <h1>APP COMPONENT :  Passing name Props to Child 1</h1>
      <ChildOne name="Raga"/>
    </div>
  )
}

export default App