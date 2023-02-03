import React from 'react'

import './App.css';
import Header from './components/Header'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask';
import Click from './components/Click';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };

    this.handleAddTask = this.handleAddTask.bind(this)
    this.handleDeleteTask = this.handleDeleteTask.bind(this)
    this.handleDeleteAllTask = this.handleDeleteAllTask.bind(this)
  }

  handleAddTask(task) {
    if (!task.trim()) {
      return "Enter Valid String";
    } else if (this.state.tasks.indexOf(task.trim()) > -1) {
      return "This value already exists in the List";
    }
  }

  handleDeleteTask(task) {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(singleTask => singleTask !== task)
    }));
  }

  handleDeleteAllTask() {
    this.setState({tasks: [] });
  }

  render() {
    return (
      <div className="todo--container">
        <Header />
        <TaskList 
          handleDeleteTask={this.handleDeleteTask}
          handleDeleteAllTask={this.handleDeleteAllTask}
          tasks={this.state.tasks}
        />
        <AddTask 
          handleAddTask={this.handleAddTask}
        />

        <Click />
      </div>
    );
  }
}

