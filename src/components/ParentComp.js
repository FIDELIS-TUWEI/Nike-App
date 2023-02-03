import React, { Component } from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';

export class ParentComp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name: "Simplilearn"
        };
      }

      componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Simplilearn"
            })
        }, 3000)
      }

  render() {
    return (
      <div>I'm the ParentComp
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp