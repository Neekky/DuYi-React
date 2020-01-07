import React from 'react'
import "./Modal.css"
export default function Modal(props) {
  let defaultProps = {
    bg: "rgba(0,0,0,.5)"
  };
  let datas = Object.assign({}, defaultProps, props)
  return (
    <div className="modal" style={{
      background: datas.bg
    }}>
      <p className="children">
        {props.children}
      </p>
    </div>
  )
}