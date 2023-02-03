import React from 'react'

import '../styles/Task.css'

export default function Task(props) {
    return (
        <div className='task--element'>
            <div className='task--text'>{props.taskText}</div>
            <button
                className='removeTask--btn'
                onClick={() => {
                    props.handleDeleteTask(props.tast)
                }}
            >
                X
            </button>
        </div>
    )
}