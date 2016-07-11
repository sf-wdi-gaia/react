import React from 'react'
import Comment from './comment'

export default React.createClass({

  getInitialState() {
    return {likes: 0}
  },

  like() {
    this.setState({
      likes: ++this.state.likes
    })
  },

  render() {
    return (
      <div className="post">
        <h2>{this.props.title}</h2>
        <h4>By {this.props.author}</h4>
        <p>{this.props.body}</p>
        <p>Likes: {this.state.likes}</p>
        <button onClick={this.like}>Like</button>
        <h3>Comments</h3>
          <ul> {
            this.props.comments.map((comment, index) => {
              return <Comment key={index} body={comment}/>
            })
          }</ul>
      </div>
    )
  }
})