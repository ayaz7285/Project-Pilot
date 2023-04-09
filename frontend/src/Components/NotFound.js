import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div class="container" style={{background: "#fff",textAlign:"center",paddingTop:"50px",margin: "0 auto"}}>
        <img class="ops" src="error.gif" />
        <br />
        <h3 style={{fontSize: "25px",color: "#3498db",fontWeight: "bold",textAlign: "center",lineHeight: "130%"}}>Oops Page Not Found</h3>
    </div>
    )
  }
}
