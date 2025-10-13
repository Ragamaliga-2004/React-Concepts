import React from 'react'
import ChildThree from './ChildThree'

const ChildTwo = ({ name }) => {
  return (
    <div style={{
      margin: "20px auto",
      padding: "20px",
      width: "70%",
      backgroundColor: "#E9FBE9"
    }}>
      <h3 style={{ color: "darkblue" }}>CHILD 2 : Passing name Props to Child 3</h3>
      <ChildThree name={name} />
    </div>
  )
}

export default ChildTwo
