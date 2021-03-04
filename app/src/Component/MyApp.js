import React, { Component } from "react";
import Conditional from "./Conditional"
class MyApp extends React.Component{
      constructor()
      {
            super();
            this.state={
                  Logged:true
            }
            this.handleClick=this.handleClick.bind(this)
      }
      
      
      handleClick()
      {
            
            this.setState(prevState =>{
                  return{
                        Logged:!prevState.Logged
                  }
            })
      
      }
      
      render()
      {
            return(
                  <div>
                        <button onClick={this.handleClick}>{this.state.Logged?"Log out":"Log in"}</button>
           
                  </div>
                   )
      }
     
}
export default MyApp;
