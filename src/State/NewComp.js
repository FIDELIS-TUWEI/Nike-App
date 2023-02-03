import React, { Component } from 'react'
import Notification from './Notification.png'
import NotificationB from './NotificationB.png'

class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe to Simplilearn",
         sub: "Subscribe",
         imageURL: Notification
      }
    }

    styles={
        fontStyle: "italic",
        color: "teal"
    }

    bellStyles = {
        width: "30px",
        height: "30px"
    }

    ButtonChange = () => {
        this.setState({
            message: "Hit the Bell Icon for Updates",
            sub: "Subscribed"
        })
    }

    imageChange = () => {
        this.setState({
            imageURL: NotificationB,
            message: "Thank you"
        })
    }
  render() {
    return (
      <div>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <p>
            <img src={this.state.imageURL} style={this.bellStyles} onClick={this.imageChange}/>
        </p>
      </div>
    )
  }
}

export default NewComp