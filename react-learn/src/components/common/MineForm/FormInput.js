import React, { Component } from 'react'
import PropTypes from "prop-types"
import ctx from "./FormContext"

export default class FormInput extends Component {

  static contextType = ctx;

  static defaultProps = {
    type: "text"
  }

  static propTypes = {
    name: PropTypes.string.isRequired, // 文本框的名称
    type: PropTypes.string.isRequired  // 文本框的类型
  }

  render() {
    return (
      <div>
        <input
          value={this.context.formData[this.props.name] || ""}
          type={this.props.type}
          name={this.props.name}
          onChange={e => {
            this.context.changeFormData(this.props.name, e.target.value)
          }}
        />
      </div>
    )
  }
}
