import React from 'react'

export default class Greeting extends React.Component {
  render() {
    return (
      <p>Good {this.props.timeOfDay} {this.props.object}</p>
    )
  }
}