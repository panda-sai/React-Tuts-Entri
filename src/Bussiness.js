import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Bussiness() {
    const [searchParams, setSearchParams] = useSearchParams()
    const queryParamStatus = searchParams.get('unicornStatus')
    console.log(queryParamStatus)
  return (
    <div>
      This is Bussiness Component
      <button onClick={()=> setSearchParams({unicornStatus:'true'})}>Generate Query Param</button>
    </div>
  )
}

export default Bussiness
