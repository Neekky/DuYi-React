import React, { Component } from 'react'
import TaskList from "./TaskList"
import AddTask from "./AddTask"


export default class TaskContainer extends Component {
  state = {
    tasks: [],
    obj: {
      a: 12,
      b: 344
    }
  }

  componentDidMount() {
    const ts = [];
    for (let i = 0; i < 10; i++) {
      ts.push({
        name: `任务${i}`,
        isFinish: Math.random() > 0.5
      })
    }
    this.setState({
      tasks: ts
    })
  }
  handleAdd = newTask => {
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }
  render() {
    return (
      <div>
        <AddTask
          onAdd={this.handleAdd}
        ></AddTask>
        <TaskList tasks={this.state.tasks} />
      </div>
    )
  }
}
