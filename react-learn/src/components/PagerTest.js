import React, { Component } from 'react'
import Pager from "./Pager"

export default class PagerTest extends Component {
  state = {
    current: 1,
    total: 0,
    limit: 10,
    panelNumber: 5
  }
  constructor(props){
    super(props);
    fetch("")
  }

  async function  fetchStudents(params) {
    
  }

  handlePageChange = (newPage) => {
    this.setState({
      current: newPage
    })
  }

  render() {
    return (
      <div>
        <Pager {...this.state} onPageChange={this.handlePageChange} />
      </div>
    )
  }
}
