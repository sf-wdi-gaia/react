import React from "react"

export default React.createClass({
  getInitialState() {
    return {points: 1}
  },

  increaseMood() {
    let newPoints = this.state.points >= 10 ? 1 : this.state.points + 1
    this.setState({
      points: newPoints
    })
  },
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
        <p>On a scale of 1-10</p>
        <p>You are {this.props.mood}</p>
        <p>This much: {this.state.points}</p>
        <button onClick={this.increaseMood}>Up Your Mood!</button>
      </div>
    )
  }
})