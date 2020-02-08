import React, { Component } from 'react'
import {Provider} from "./FormContext"

export default class Form extends Component {
  state = {
    fromData: {}, //表单数据对象
  }
  render() {
    return (
      <div>
        <Provider value={}>

        </Provider>
      </div>
    )
  }
}
