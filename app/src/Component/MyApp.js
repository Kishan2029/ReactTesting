import React, { Component } from "react";

class MyApp extends React.Component{
      constructor()
      {
            super();
            this.state={
                  count:0
            }
            this.handleClick=this.handleClick.bind(this)
      }
      handleClick(){
           
            this.setState(prevState=>{
                  return{
                       count: prevState.count +1 
                  }
                  })
      }
      render()
      {
            return(
                  <div>
                        <h1>{this.state.count}</h1>
                        <button onClick={this.handleClick}>Click me</button>
                  </div>
            )
      }
     
}
export default MyApp;
