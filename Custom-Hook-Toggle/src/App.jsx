import React from 'react'
import useToggle from '../useToggle'

const App = () => {
  const {on,toggle} = useToggle(false);
  return (
    <div>
      <div>
        {on? "Switch is ON": "Switch is OFF"}
      </div>
      <button onClick={toggle}>
        {on?"Turn ON":"Turn OFF"}
      </button>    
    </div>
  )
}

export default App