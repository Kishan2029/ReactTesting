import React, { Component } from "react";

class MyApp extends Component {
      constructor() {
            super();
            this.state = {
                  isLoggedIn:true
            };
         
      }
      render()
      {
            let word;
            if(this.state.isLoggedIn)word="in";
            else word="out";
            return (
                  <div>
                        <h1>You are currently logged {word}</h1>
                  </div>
            );
      }

      
}
export default MyApp;
