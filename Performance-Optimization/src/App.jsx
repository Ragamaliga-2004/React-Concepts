

// import React from 'react'
// import { useState,useCallback } from 'react';

// const Child = React.memo(({value})=>{
//   console.log("I am Child rerender");

//   return (
//     <div>
//       <button onClick={value}>DECREMENT</button>
//     </div>
//   )  
// }) 

// const App = () => {
//   const [count, setCount] = useState(0);
//   console.log("I am Parent rerender");

//   const handleDecrement = useCallback(() => {
//     setCount(prevCount => prevCount - 1);
//   }, []);

  

//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={()=>setCount(prevCount=>prevCount+1)}>INCREMENT</button>
//       <Child value={handleDecrement}/>
//     </div>
//   )
// }

// export default App


/// @app.jsx for exampleUsememo

import React from 'react'
import ExampleUseMemo from './ExampleUseMemo'

const App = () => {
  return (
    <div>
      <ExampleUseMemo />
    </div>
  )
}

export default App