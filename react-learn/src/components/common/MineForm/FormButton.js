import React from 'react'
import { Consumer } from "./FormContext"

export default function FormButton(props) {
  return (
    <Consumer>
      {value => {
        return (
          <button onClick={()=>{
            value.submit()
          }}>
            {props.children}
          </button>
        )
      }}
    </Consumer>

  )
}

