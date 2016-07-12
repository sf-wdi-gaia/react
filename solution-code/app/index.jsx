"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import Post from './components/post'
import ProfilePic from './components/profile-pic'
import myPostData from './data/myPost'
// import moodTracker

ReactDOM.render(
  <Post
    title={myPostData.title}
    author={myPostData.author}
    body={myPostData.body}
    comments={myPostData.comments}
  />,
  document.getElementById("blog-component")
)

ReactDOM.render(
  <ProfilePic id="mr-cat" href="http://www.nyan.cat/" className="profile-cat">
    <h3>This Kitten Cashes Checks</h3>
    <p className="bio">The coolest cat around town</p>
  </ProfilePic>,
  document.getElementById("profile-pic-component")
)