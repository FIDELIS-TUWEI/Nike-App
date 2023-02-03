import React from 'react'

import './App.css';
import Header from './components/Header'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask';

export default function App() {
  return (
    <div className="App">
      <Header />
      <TaskList />
      <AddTask />
    </div>
  );
}

