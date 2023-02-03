import { render } from '@testing-library/react';
import React from 'react'


export default class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: "",
            error: undefined
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Handle change event
    handleChange(event) {
        this.setState({newTask: event.target.value, error: undefined});
    }

    // Handle submit event
    handleSubmit(event) {
        event.preventDefault();
        const {newTask} = this.state;
        const error = this.props.handleAddTask(newTask);

        this.setState({error});
        if (!error) {
            this.setState({newTask: ""})
        }
    }

    render() {
        return (
            <div>
                <form className='addtask--container' onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        className='addtask--input'
                        onChange={this.handleChange}
                        value={this.state.newTask}
                        placeholder="Add Task Here..."
                    />
                    <button 
                        className='addtask--btn'
                        onClick={this.handleAddItem}
                        disabled={!this.state.newTask.length}
                    >
                        +
                    </button>
                </form>
                {this.state.error && (
                    <span className='addtask--error'>{this.state.error}</span>
                )}
            </div>
        )
    }
}   
