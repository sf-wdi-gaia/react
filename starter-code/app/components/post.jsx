import React from 'react'
import Comment from './comment'

export default class Post extends React.Component {
  render() {
    const comments = this.props.comments
    return (
      <div className="post">
        <h2>{this.props.title}</h2>
        <h4>By {this.props.author}</h4>
        <p>{this.props.body}</p>
        <ul>{
          comments.map((comment, index) =>
            <Comment key={index} body={comment}/>
          )
        }</ul>
      </div>
    )
  }
}