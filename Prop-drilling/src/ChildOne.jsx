import React from 'react'
import ChildTwo from './ChildTwo'

const ChildOne = ({ name }) => {
  return (
    <div style={{
      margin: "20px auto",
      padding: "20px",
      width: "60%",
      backgroundColor: "#EAF2FA"
    }}>
      <h3 style={{ color: "darkblue" }}>CHILD 1 : Passing name Props to Child 2</h3>
      <ChildTwo name={name} />
    </div>
  )
}

export default ChildOne
