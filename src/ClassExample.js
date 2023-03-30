import React, { Component } from 'react'
import ClassExampleStyle from './ClassExample.module.css'
import Channel from './Channel';

export default class ClassExample extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.swapHandler = this.swapHandler.bind(this);
    this.state = {
      swapStatus: true,
      shoutout:"Please Subscribe to ",
      channels : [
        {
          id:1,
          name:"ABC",
          url:"abc.com"
        },
        {
          id:2,
          name:"XYZ",
          url:"xyz.com"
        },
        {
          id:3,
          name:"UVW",
          url:"uvw.com"
        },
        {
          id:4,
          name:"Vamsi Bhavani",
          url:"www.youtube.com/VamsiBhavani"
        }
      ]
    }
  }

  buttonClickHandler() {
    //alert(this.props.data);
    this.setState({
      shoutout:"Subscribed to Vamsi Bhavani Channel. Thank You!"
    })
  }

  swapHandler() {
    this.setState({swapStatus:!(this.state.swapStatus)})
  }

  render() {
    const style = {
      color:"red"
    }

    let cs;
    cs = this.state.channels.map((channel,index)=>{
      return <Channel key={index} id = {index} name={channel.name} url={channel.url}/>
    })


    return (
      <div className={ClassExampleStyle.DivStyle}>
        <h1 style={style}>This is an class based component. 
          Data is {this.props.data}</h1>
          <h1 style={{color:'blue'}}>{this.state.shoutout}</h1>
        {this.state.swapStatus === true ? cs :''}
        <button onClick={this.swapHandler}>Swap</button>
      </div>
    )
  }
}
