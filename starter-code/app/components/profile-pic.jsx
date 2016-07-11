import React from 'react'

const profilePicStyles = {
  width: '50%',
  maxWidth: '200px'
}

export default class ProfilePic extends React.Component {
  render() {
    return (
      <a {...this.props}>
        {this.props.children}
        <img style={profilePicStyles} src="http://bit.ly/1MItzOs"/>
      </a>
    )
  }
}