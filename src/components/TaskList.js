import React from 'react'

import Task from './Task'
import '../styles/TaskList.css'

export default function TaskList(props) {
    return (
        <div className='todo--list'>
            <hr />

            <div className='widget--header'>
                <h3 className='widget--title'>Your To dos</h3>
                <button
                    onClick={props.handleDeleteTask}
                    className='removeAll-btn'
                >
                    Remove All
                </button>
            </div>

            {/* {props.tasks.map((task, index) => {
                return (
                    <Task 
                        key={task}
                        taskText={task}
                        count={index + 1}
                        handleDeleteTask={props.handleDeleteTask}
                    />
                )
            })}; */}

            {props.tasks.length !== 0 && <hr />}
        </div>
    )
}