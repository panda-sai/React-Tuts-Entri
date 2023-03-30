import React, { Component } from 'react'

class Channel extends Component {

    constructor(props){
        super(props);
        this.props = props;
    }

  render() {
    return (
      <div>
        <h2>Channel Name = {this.props.name}</h2>
        <h2>URL = {this.props.url}</h2>
        <h2>Key = {this.props.id}</h2>
      </div>
    )
  }
}

export default Channel

