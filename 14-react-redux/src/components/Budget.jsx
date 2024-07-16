import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Budget() {
  
  
  

  return (
    <div>
        <h2>Redux Shelter Budget:</h2>
        <h3>${""}</h3>
        <div>
            <button className="ui button" onClick={() => console.log("clicked add") }>Add $10</button>
            <button className="ui button" onClick={() => console.log("clicked subtract") }>Subtract $5</button>
        </div>
    </div>
  )
}
