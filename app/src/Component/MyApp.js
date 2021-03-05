import React from "react";
//import Conditional from "./Conditional"
class MyApp extends React.Component{
      constructor()
      {
            super();
            this.state={
                  loading:false,
                  character:{}
            }
            
      }
      
      componentDidMount(){
            this.setState({loading : true })
            fetch("https://swapi.dev/api/people/10")
                  .then(response => response.json())
                  .then(data => {
                        this.setState({
                              loading:false,
                              character:data
                        })
                  })
      }
     
      
      render()
      {
            const text=this.state.loading ? "Loading...":this.state.character.name
            return(
                  <div>
                        <h1>{text}</h1>
                  </div>
                   )
      }
     
}
export default MyApp;
