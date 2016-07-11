"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './components/hello-world'
import Greeting from './components/greeting'
import ProfilePic from './components/profile-pic'
import Post from './components/post'

const MoodTracker = React.createClass({
  getInitialState() {
    return {points: 1}
  },
  increaseMood() {
    const newPoints = this.state.points >= 10 ? 1 : this.state.points + 1
    this.setState({
      points: newPoints
    })
  },
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
        <p>On a scale of 1-10</p>
        <p>How much are you {this.props.mood}?</p>
        <p>Scale: {this.state.points}</p>
        <button onClick={this.increaseMood}>Up Your Mood!</button>
      </div>
    )
  }
})

ReactDOM.render(
  <MoodTracker name="Mr Cat" mood="enjoying meowmix"/>,
  document.getElementById("mood-tracker-component")
)




// const myPost = {
//   title: "My First Post",
//   author: "Mr Cat",
//   body: "Check it out. This is the first post on my dope blog!",
//   comments: ["First!", "Second!", "This blog needs more GIFs."]
// }

// ReactDOM.render(
//   <ProfilePic href="http://www.nyan.cat" id="mr-cat" className="profile-pic">
//     <h3>This Kitten Cashes Checks</h3>
//     <p className="bio">Meow mix pays the bills</p>
//   </ProfilePic>,
//   document.getElementById("profile-pic-component")
// )

// ReactDOM.render(
//   <Post
//     title={myPost.title}
//     author={myPost.author}
//     body={myPost.body}
//     comments={myPost.comments}
//   />,
//   document.getElementById('posts-container')
// )

