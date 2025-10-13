import React from 'react'
import ChildTwo from './ChildTwo'

const ChildOne = ({name}) => {
  return (
    <div>
        <h1>CHILD 1 : Passing name Props to Child 2</h1>
        <ChildTwo name={name} />
    </div>
  )
}

export default ChildOne