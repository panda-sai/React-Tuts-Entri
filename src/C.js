import React, { useContext } from 'react'
import {x} from './A'

function C() {

    const context = useContext(x)

  return (
    <div>
       This is the context from Component C {context}
    </div>
  )
}

export default C
