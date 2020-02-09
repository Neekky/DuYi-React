import React, { Component, PureComponent } from 'react'
import PropTypes from "prop-types"
import "./Task.css"
// import { ObjectEqual } from "../utils/helper"

function Task(props) {
  console.log("task render")
  return (
    <li className={props.isFinish ? "finish" : ""}>{props.name}</li>
  )
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
  isFinish: PropTypes.bool.isRequired
}

export default React.memo(Task);


// export default class Task extends PureComponent {

//   static propTypes = {
//     name: PropTypes.string.isRequired,
//     isFinish: PropTypes.bool.isRequired
//   }
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   if (ObjectEqual(this.props, nextProps) && ObjectEqual(this.state, nextState)) {
//   //     return false;
//   //   }
//   //   return true;
//   // }

//   render() {
//     console.log("task render")
//     return (
//       <li className={this.props.isFinish ? "finish" : ""}>{this.props.name}</li>
//     )
//   }
// }
