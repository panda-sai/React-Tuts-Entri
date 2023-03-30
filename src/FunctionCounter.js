import React, { useEffect, useState } from 'react'

function FunctionCounter() {

    const [count, changeState] = useState(0)
    useEffect(()=>{
        document.title = `Count is ${count}`
        alert("Rendered Again...")
    })

  return (
    <div>
        <button onClick={()=> changeState(count+1)}>Increment(Function), Count:{count}</button>
      
    </div>
  )
}

export default FunctionCounter
