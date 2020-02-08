import React, { Component } from 'react'
import { Provider } from "./FormContext"

export default class Form extends Component {
  state = {
    fromData: {}, //表单数据对象
    // 修改formData中的数据
    changeFormData: (name, val) => {
      this.setState({
        formData: {
          ...this.state.formData,
          [name]: val
        }
      })
    }
  }
  render() {
    return (
      <div>
        <Provider value={this.state}>

        </Provider>
      </div>
    )
  }
}
