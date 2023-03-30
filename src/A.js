import React from 'react'
import B from './B'

export const x = React.createContext()

function A() {
  return (
    <div>
       <x.Provider value={'VB'}> 
        <B/>
      </x.Provider>
    </div>
  )
}

export default A
