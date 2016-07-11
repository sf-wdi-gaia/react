import React from 'react'

export default class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
        <p>You are {this.props.mood}!</p>
      </div>
    )
  }
}