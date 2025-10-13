import React from 'react'
import ChildThree from './ChildThree'

const ChildTwo = ({name}) => {
  return (
    <div>
        <h1>CHILD 2 :  Passing name Props to Child 3</h1>
        <ChildThree name={name} />
    </div>
  )
}

export default ChildTwo